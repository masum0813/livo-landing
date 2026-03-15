# Performance Guardrails

Livo Player web projects (`livoplayer.com`) treat performance as a core product requirement.

## Critical Performance Principles

### 1. Do not introduce new render-blocking resources

- CSS must not block first paint unless it is critical CSS.
- Google Fonts must be loaded using non-blocking strategies.
- Third-party scripts must never be placed synchronously in `<head>`.

### 2. Always use preconnect for critical third-party origins

Allowed critical origins:

- `fonts.googleapis.com`
- `fonts.gstatic.com`
- `firebaseapp.com`
- `googleapis.com`

Preconnect hints must be placed at the very top of `<head>`.

### 3. Third-party SDK initialization must be deferred

Firebase Auth, Analytics, Remote Config, or any SDK:

- must not initialize during initial page load
- must load after:
  - first meaningful paint
  - user interaction
  - explicit feature requirement

### 4. Fonts must follow performance loading strategy

Rules:

- use `font-display: swap`
- preload font CSS or inline critical font styles
- avoid loading more than:
  - 2 font families
  - 3 weights per family

### 5. Bundle discipline is mandatory

- Avoid adding large dependencies without justification.
- Prefer dynamic imports for feature-level modules.
- Initial JS bundle must stay minimal.

### 6. Network critical chain must stay short

When adding new API calls:

- they must not be triggered automatically on first render
- prefer lazy fetching
- prefer background fetching after UI is visible

### 7. Cache strategy must be respected

Static assets must:

- have long cache lifetimes
- use hashed filenames
- avoid querystring cache busting patterns

### 8. UI performance must not regress

Any visual enhancement must:

- avoid layout shifts
- avoid heavy animations on initial load
- avoid synchronous blocking computations

## When Modifying Code

Before finalizing changes, ask:

- Does this introduce render blocking?
- Does this increase initial JS execution time?
- Does this extend the critical request chain?
- Does this load third-party code too early?

If yes, redesign the solution.

## Output Expectations

When proposing changes:

- explain performance impact
- mention LCP / TBT / CLS implications
- prefer lazy loading strategies
- prefer prefetch / preload hints when useful

Performance regressions are not acceptable.

Always optimize for:

- fast first paint
- fast interaction
- short critical path

## Target Budgets

- Lighthouse Performance >= 90
- LCP < 1.5s
- JS initial bundle < 120kb
- no blocking fonts
- no blocking Firebase initialization

Any change that risks these targets must be redesigned.
