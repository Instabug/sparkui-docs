---
path: "/docs/buttons"
date: "2017-11-07"
title: "Buttons"
---

# Buttons

## Demo
### Colors
<button type="button" class="c-button c-button--info">info Button</button>
<button type="button" class="c-button c-button--success">success Button</button>
<button type="button" class="c-button c-button--error">error Button</button>
<button type="button" class="c-button c-button--info" disabled>Disabled Button</button>

```html
<button type="button" class="c-button c-button--info">info Button</button>
<button type="button" class="c-button c-button--success">success Button</button>
<button type="button" class="c-button c-button--error">error Button</button>
<button type="button" class="c-button c-button--info" disabled>Disabled Button</button>
```

### Outline Colored Buttons
#### Normal
<button type="button" class="c-button c-button--outline-default">Button</button>
<button type="button" class="c-button c-button--outline-info">Button</button>
<button type="button" class="c-button c-button--outline-success">Button</button>
<button type="button" class="c-button c-button--outline-error">Button</button>

```html
<button type="button" class="c-button c-button--outline-default">Button</button>
<button type="button" class="c-button c-button--outline-info">Button</button>
<button type="button" class="c-button c-button--outline-success">Button</button>
<button type="button" class="c-button c-button--outline-error">Button</button>
```

#### Sizes
<button type="button" class="c-button c-button--outline-default c-button--small">Button</button>
<button type="button" class="c-button c-button--outline-info c-button--medium">Button</button>
<button type="button" class="c-button c-button--outline-warning c-button--large">Button</button>
<button type="button" class="c-button c-button--outline-error c-button--xlarge">Button</button>

```html
   <button type="button" class="c-button c-button--outline-default c-button--small">Button</button>
   <button type="button" class="c-button c-button--outline-default c-button--medium">Button</button>
   <button type="button" class="c-button c-button--outline-default c-button--large">Button</button>
   <button type="button" class="c-button c-button--outline-default c-button--xlarge">Button</button>
```

### Sizes

<button type="button" class="c-button c-button--info c-button--small">.c-button--small</button>
<button type="button" class="c-button c-button--info c-button--medium">.c-button--medium</button>
<button type="button" class="c-button c-button--info c-button--large">.c-button--large</button>
<button type="button" class="c-button c-button--info c-button--xlarge">.c-button--xlarge</button>

```html
<button type="button" class="c-button c-button--info c-button--small">.c-button--small</button>
<button type="button" class="c-button c-button--info c-button--medium">.c-button--medium</button>
<button type="button" class="c-button c-button--info c-button--large">.c-button--large</button>
<button type="button" class="c-button c-button--info c-button--xlarge">.c-button--xlarge</button>
```

### Square Button
this is mainly used with svg icons, in this type, height and width are the same
<div>
  <button type="button" class="c-button c-button--info c-button--small c-button--square">c</button>
  <button type="button" class="c-button c-button--info c-button--medium c-button--square">c</button>
  <button type="button" class="c-button c-button--info c-button--large c-button--square">c</button>
  <button type="button" class="c-button c-button--info c-button--xlarge c-button--square">c</button>
</div>

```html
  <button type="button" class="c-button c-button--info c-button--small c-button--square">
    <svg ...></svg>
  </button>
```

### Delete Button
this is basically another square button, but has special behaviors on focus, hover, active states.
<div>
  <button type="button" class="c-button c-button--delete c-button--small c-button--square">D</button>
</div>

```html
  <button type="button" class="c-button c-button--delete c-button--small c-button--square">
    <svg ...></svg>
  </button>
```

### Grouped Buttons
<div>
  <span class="c-input-group">
    <button type="button" class="c-button c-button--info c-button--active">Button</button>
    <button type="button" class="c-button c-button--info">Button</button>
  </span>
</div>
<br />

<div>
  <span class="c-input-group">
    <button type="button" class="c-button c-button--info c-button--active">Button</button>
    <button type="button" class="c-button c-button--success">Button</button>
    <button type="button" class="c-button c-button--error">Button</button>
  </span>
</div>

```html
<span class="c-input-group">
  <button type="button" class="c-button c-button--info c-button--active">Button</button>
  <button type="button" class="c-button c-button--info">Button</button>
  ...
</span>
```

### Buttons with Icons

<button type="button" class="c-button c-button--outline-default c-button--large c-button--square">
 <svg
   viewBox="0 0 14.97 15"
   id="shape-filter"
   width="14px"
   height="14px"
   style="fill: currentColor; color: inherit;">
   <title>filter</title>
   <path d="M5.687 7.088c.16.17.246.395.246.627v6.82c0 .41.5.62.794.33l1.917-2.18c.257-.305.4-.457.4-.76v-4.21c0-.23.087-.454.244-.626l5.5-5.925C15.202.72 14.885 0 14.275 0H.7C.093 0-.226.72.188 1.165l5.5 5.923z">
   </path>
 </svg>
</button>

<button type="button" class="c-button c-button--outline-info c-button--large">
 <svg
   class="c-button__icon-left"
   viewBox="0 0 14.97 15"
   id="shape-filter"
   width="14px"
   height="14px"
   style="fill: currentColor; color: inherit;">
   <title>filter</title>
   <path d="M5.687 7.088c.16.17.246.395.246.627v6.82c0 .41.5.62.794.33l1.917-2.18c.257-.305.4-.457.4-.76v-4.21c0-.23.087-.454.244-.626l5.5-5.925C15.202.72 14.885 0 14.275 0H.7C.093 0-.226.72.188 1.165l5.5 5.923z">
   </path>
 </svg>
 <span class="c-button__text">Button with one icon</span>
</button>

<button type="button" class="c-button c-button--outline-error c-button--large">
 <svg
   class="c-button__icon-left"
   viewBox="0 0 14.97 15"
   id="shape-filter"
   width="14px"
   height="14px"
   style="fill: currentColor; color: inherit;">
   <title>filter</title>
   <path d="M5.687 7.088c.16.17.246.395.246.627v6.82c0 .41.5.62.794.33l1.917-2.18c.257-.305.4-.457.4-.76v-4.21c0-.23.087-.454.244-.626l5.5-5.925C15.202.72 14.885 0 14.275 0H.7C.093 0-.226.72.188 1.165l5.5 5.923z">
   </path>
 </svg>
 <span class="c-button__text">Button with two icons</span>
 <svg
   class="c-button__icon-right"
   viewBox="0 0 50 50"
   id="shape-drop-down"
   width="14px"
   height="14px"
   style="fill: currentColor; color: inherit;">
   <title>drop-down</title>
   <path d="M24.997 11.862H48.75L36.876 24.998l-11.88 13.14-11.872-13.14L1.25 11.862">
   </path>
 </svg>
</button>

<br />
<br />

### Blocked Button

<div class="u-bottom-margin--1x u-pillar-padding--9x">
  <button type="button" class="c-button c-button--info c-button--block c-button--small">Button</button><br><br>
  <button type="button" class="c-button c-button--info c-button--block c-button--medium">Button</button><br><br>
  <button type="button" class="c-button c-button--info c-button--block c-button--large">Button</button><br><br>
  <button type="button" class="c-button c-button--info c-button--block c-button--xlarge">Button</button><br><br>
</div>

```html
<button type="button" class="c-button c-button--info c-button--block c-button--small">Button</button><br><br>
<button type="button" class="c-button c-button--info c-button--block c-button--medium">Button</button><br><br>
<button type="button" class="c-button c-button--info c-button--block c-button--large">Button</button><br><br>
<button type="button" class="c-button c-button--info c-button--block c-button--xlarge">Button</button><br><br>
```
