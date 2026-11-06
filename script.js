const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.primary-nav');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
  menuButton.querySelector('[aria-hidden]').textContent = open ? '☰' : '×';
});

nav.addEventListener('click', event => {
  if (!event.target.closest('a')) return;
  menuButton.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
  menuButton.querySelector('[aria-hidden]').textContent = '☰';
});

const form = document.querySelector('#trial-form');
const successPanel = document.querySelector('#success-panel');
const status = document.querySelector('#form-status');
const fields = {
  parentName: { input: form.elements.parentName, error: document.querySelector('#parent-name-error') },
  contact: { input: form.elements.contact, error: document.querySelector('#contact-error') },
  course: { input: form.elements.course, error: document.querySelector('#course-error') }
};

function messageFor(name, value) {
  const trimmed = value.trim();
  if (!trimmed) return name === 'course' ? 'Choose a course or select “Not sure yet”.' : 'Complete this field before saving the local request.';
  if (name === 'parentName' && trimmed.length < 2) return 'Enter at least 2 characters for the parent or guardian name.';
  if (name === 'contact' && !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) || /^[+\d][\d\s()-]{7,}$/.test(trimmed))) return 'Enter a valid email address or phone number.';
  return '';
}

function validateField(name) {
  const field = fields[name];
  const message = messageFor(name, field.input.value);
  field.error.textContent = message;
  field.input.setAttribute('aria-invalid', String(Boolean(message)));
  return !message;
}

Object.keys(fields).forEach(name => fields[name].input.addEventListener('blur', () => validateField(name)));

document.querySelectorAll('[data-course]').forEach(link => link.addEventListener('click', () => {
  form.elements.course.value = link.dataset.course;
  validateField('course');
}));

form.addEventListener('submit', event => {
  event.preventDefault();
  const results = Object.keys(fields).map(validateField);
  if (results.includes(false)) {
    status.textContent = 'Review the highlighted fields. Your information has not been saved.';
    status.className = 'form-status error';
    Object.values(fields).find(field => field.input.getAttribute('aria-invalid') === 'true').input.focus();
    return;
  }
  status.textContent = '';
  form.hidden = true;
  successPanel.hidden = false;
  successPanel.focus();
});

document.querySelector('#reset-demo').addEventListener('click', () => {
  form.reset();
  Object.values(fields).forEach(field => { field.error.textContent = ''; field.input.removeAttribute('aria-invalid'); });
  successPanel.hidden = true;
  form.hidden = false;
  form.elements.parentName.focus();
});
