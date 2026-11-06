# CodeKids journey and information architecture

## Part 1: Parent journey

1. A parent arrives from search, Behance, portfolio or a shared link and decides whether this is a coding-course concept relevant to their child.
2. They compare course fit by age guidance, coding style, learning outcome and duration.
3. They inspect how the trial process works and whether the interface provides enough practical detail to continue.
4. **Decision:** if no course seems suitable or the concept boundary is unacceptable, they leave; otherwise they choose a course or “Not sure yet”.
5. They complete the local trial-request form. Validation errors keep them in control and identify the exact field to fix.
6. They receive a local confirmation explaining that no data was transmitted and no class was booked. They may reset the demo and re-enter.
7. A real provider callback, scheduling, trial class, enrollment and receipt would be external future touchpoints and are outside this prototype.

## Part 2: Screen and state inventory

- `Responsive landing page, default`: discovery, comparison, FAQ and form entry (serves steps 1 to 5).
- `Mobile navigation open`: access to page sections at narrow widths (serves steps 1 to 5).
- `Trial validation error`: field-specific recovery (serves step 5).
- `Trial local success`: transparent completion and reset (serves step 6).
- `Real booking and enrollment`: external and not implemented (serves step 7).

Every implemented screen/state serves a journey step. Every journey step maps to an implemented state or the named external future touchpoint.

## Part 3: Navigation

A sticky in-page navigation links to Courses, How it works, Pricing/Comparison, FAQ and Trial. At 760 px and below it becomes an explicit menu button and stacked navigation. Course-card actions preselect the related course and move to the form.

## Part 4: Content hierarchy

- **Landing hero:** primary, coding-course fit and trial route; secondary, comparison route and concept limitation; tertiary, CSS code illustration.
- **Courses:** primary, three comparable paths; secondary, age, outcomes and duration; tertiary, course-preselection actions.
- **Parent details and comparison:** primary, practical decision evidence; secondary, equivalent course attributes; tertiary, source limits.
- **FAQ:** primary, booking and fit questions; secondary, evidence limits.
- **Trial form:** primary, required contact and course fields; secondary, optional context and no-transmission explanation; tertiary, reset after local success.
