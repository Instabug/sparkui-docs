---
path: "/docs/loaders"
date: "2017-11-07"
title: "Loaders"
---
# Loaders
loaders are used when retrieving data or performing slow computations, and help to notify users
that loading is underway.

## Demo
loaders has 2 sizes `c-loader--small` and `c-loader--large`

```html
<div class="c-loader c-loader--white-container c-loader--small"></div>
<div class="c-loader c-loader--white-container c-loader--large"></div>
```

### loaders on white background
You can apply it using the `c-loader--white-container` modifier class

<div class="u-display-flex u-flex--row u-align-items--center u-window-padding--1x">
  <div class="u-display-flex u-flex-grow--1 u-justify-content--center u-align-items--center">
    <div class="c-loader c-loader--white-container c-loader--small"></div>
    <span class="u-left-margin--1x">small loader</span>
  </div>

  <div class="u-display-flex u-flex-grow--1 u-justify-content--center u-align-items--center">
    <div class="c-loader c-loader--white-container c-loader--large"></div>
    <span class="u-left-margin--2x">large loader</span>
  </div>
</div>

```html
  <div class="c-loader c-loader--white-container c-loader--small"></div>
```

### loaders on dark background
use it by apply the `c-loader--dark-container` modifier class
<div class="u-display-flex u-flex--row u-align-items--center u-bg-blue u-window-padding--1x">
  <div class="u-display-flex u-flex-grow--1 u-justify-content--center u-align-items--center">
    <div class="c-loader c-loader--small c-loader--dark-container"></div>
    <span class="u-left-margin--1x u-color--white">small loader</span>
  </div>

  <div class="u-display-flex u-flex-grow--1 u-justify-content--center u-align-items--center">
    <div class="c-loader c-loader--large c-loader--dark-container"></div>
    <span class="u-left-margin--2x u-color--white">large loader</span>
  </div>
</div>

```html
  <div class="c-loader c-loader--large c-loader--dark-container"></div>
```

### loaders on light background
<div class="u-display-flex u-flex--row u-align-items--center u-bg-ink-opacity-6 u-window-padding--1x">
  <div class="u-display-flex u-flex-grow--1 u-justify-content--center u-align-items--center">
    <div class="c-loader c-loader--small c-loader--light-container"></div>
    <span class="u-left-margin--1x">small loader</span>
  </div>

  <div class="u-display-flex u-flex-grow--1 u-justify-content--center u-align-items--center">
    <div class="c-loader c-loader--large c-loader--light-container"></div>
    <span class="u-left-margin--2x">large loader</span>
  </div>
</div>
