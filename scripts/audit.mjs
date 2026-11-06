import { writeFileSync } from 'node:fs';

const targets = await fetch('http://127.0.0.1:9223/json').then(response => response.json());
const target = targets.find(item => item.url === 'http://127.0.0.1:4173/');
if (!target) throw new Error('CodeKids audit tab not found');

const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener('open', resolve, { once: true });
  socket.addEventListener('error', reject, { once: true });
});

let nextId = 0;
const pending = new Map();
socket.addEventListener('message', event => {
  const message = JSON.parse(event.data);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});

function send(method, params = {}) {
  const id = ++nextId;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

await send('Runtime.enable');
await send('Page.enable');
const widths = [1440, 834, 390, 360, 320];
const results = [];

for (const width of widths) {
  await send('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: width < 600 });
  await send('Page.reload', { ignoreCache: true });
  await new Promise(resolve => setTimeout(resolve, 800));
  await send('Runtime.evaluate', { expression: "document.documentElement.style.scrollBehavior='auto';window.scrollTo(0,0)" });
  await new Promise(resolve => setTimeout(resolve, 80));
  const expression = `(() => {
    const viewport = document.documentElement.clientWidth;
    const visible = el => { const s=getComputedStyle(el); const r=el.getBoundingClientRect(); return s.display!=='none' && s.visibility!=='hidden' && r.width>0 && r.height>0; };
    const label = el => (el.id ? '#' + el.id : el.className ? el.tagName.toLowerCase()+'.'+String(el.className).trim().replace(/\\s+/g,'.') : el.tagName.toLowerCase());
    const overflowers = [...document.querySelectorAll('body *')].filter(visible).map(el => ({el:label(el),r:el.getBoundingClientRect().right,l:el.getBoundingClientRect().left,w:el.getBoundingClientRect().width})).filter(x => x.r > viewport + 1 || x.l < -1).slice(0,20);
    const controls=[...document.querySelectorAll('a,button,input,select,textarea,summary')].filter(visible).map(el=>({el:label(el),w:el.getBoundingClientRect().width,h:el.getBoundingClientRect().height}));
    const tooSmall=controls.filter(x=>x.w<44||x.h<44);
    const originalTitle=document.querySelector('.course-card h3').textContent;
    const originalName=document.querySelector('#parent-name').value;
    const originalNote=document.querySelector('#note').value;
    document.querySelector('.course-card h3').textContent='Advanced Creative Coding and Interactive Game Design for Young Makers';
    document.querySelector('#parent-name').value='A parent or guardian with an intentionally long full name for layout stress testing';
    document.querySelector('#note').value='This is a deliberately long note that checks whether the form keeps its boundaries when a parent describes interests, prior experience, scheduling needs and accessibility considerations in practical detail.';
    const stressOverflow=document.documentElement.scrollWidth>viewport;
    const stressCard=document.querySelector('.course-card').scrollWidth>document.querySelector('.course-card').clientWidth;
    const stressForm=document.querySelector('.form-shell').scrollWidth>document.querySelector('.form-shell').clientWidth;
    document.querySelector('.course-card h3').textContent=originalTitle; document.querySelector('#parent-name').value=originalName; document.querySelector('#note').value=originalNote;
    return {viewport,scrollWidth:document.documentElement.scrollWidth,overflowers,tooSmall,headingRects:[...document.querySelectorAll('h1,h2,h3')].filter(visible).map(el=>({text:el.textContent.trim(),w:el.getBoundingClientRect().width,h:el.getBoundingClientRect().height,lineHeight:getComputedStyle(el).lineHeight})),stress:{page:stressOverflow,card:stressCard,form:stressForm}};
  })()`;
  const evaluated = await send('Runtime.evaluate', { expression, returnByValue: true });
  results.push(evaluated.result.value);
  const screenshot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false, fromSurface: true });
  writeFileSync(`docs/audit/codekids-${width}.png`, Buffer.from(screenshot.data, 'base64'));
}

const interactionExpression = `(() => {
  const form=document.querySelector('#trial-form');
  form.querySelector('button[type=submit]').click();
  const error={visible:!form.hidden,invalid:[...form.querySelectorAll('[aria-invalid=true]')].length,status:document.querySelector('#form-status').textContent};
  form.elements.parentName.value='A Parent With A Very Long Name That Still Fits The Responsive Form Boundary';
  form.elements.contact.value='parent@example.com';
  form.elements.course.value='Web and App Makers';
  form.querySelector('button[type=submit]').click();
  const success={formHidden:form.hidden,panelVisible:!document.querySelector('#success-panel').hidden,text:document.querySelector('#success-panel').textContent.trim()};
  return {error,success};
})()`;
const interaction = await send('Runtime.evaluate', { expression: interactionExpression, returnByValue: true });
console.log(JSON.stringify({ viewports: results, interaction: interaction.result.value }, null, 2));
socket.close();
