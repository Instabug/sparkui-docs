---
path: "/docs/badges"
date: "2017-11-07"
title: "Badges"
---
# Badges
Badges have two width variations:
1. Default style;
<div class="u-window-padding--2x u-display-flex">
  <span class="c-badge u-bg--sky-lighter u-color--ink-lighter u-font--semibold">Q1</span>
</div>

2. With min-width `96px` using class `c-badge--with-min-width`;
<div class="u-window-padding--2x">
  <span class="c-badge c-badge--with-min-width u-bg--green u-color--sky-white u-font--semibold">Completed</span>
</div>


## Demo
### Light Background variations
<span class="c-badge c-badge--dark">Dark Badge</span>
<span class="c-badge c-badge--light">light Badge</span>
<span class="c-badge c-badge--outline-light">light Badge</span>
<span class="c-badge c-badge--dark u-bg-red">Dark Badge (Red BG)</span>

### Dark background variations
<div class="u-window-padding--2x u-bg-blue-dense-2 u-color--ink-opacity-4">
  <span class="c-badge c-badge--light">Light Badge</span>
  <span class="c-badge c-badge--light u-font--semibold">Light Badge (Semibold)</span>
  <span class="c-badge c-badge--outline-dark">Outline Dark Badge</span>
  <span class="c-badge c-badge--outline-dark u-bg-red">Outline Dark Badge (Red BG)</span>
</div>

```html
  <span class="c-badge c-badge--dark">Dark Badge</span>
  <span class="c-badge c-badge--light">light Badge</span>
  <span class="c-badge c-badge--outline-light">light Badge</span>
  <span class="c-badge c-badge--dark u-bg-red">Dark Badge (Red BG)</span>
```

## Usage
* `c-badge` is the main component class.
* `c-badge--with-min-width` to add min-width constraint on badge.
* you can use any color using color background utilities
classes `u-bg-****`
