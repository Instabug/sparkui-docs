---
path: "/docs/inputs"
date: "2017-11-07"
title: "Inputs"
---

# Inputs

## Demo
### text inputs:

#### Sizes:
3 sizes: default, medium & large

<div>
  <input
    class="c-field u-bottom-margin--1x"
    type="text"
    placeholder=".c-field - fixed height of 32px" />
  <input
    class="c-field c-field--medium u-bottom-margin--1x"
    type="text"
    placeholder=".c-field.c-field--medium fixed height of 40px" />
  <input
    class="c-field c-field--large u-bottom-margin--1x"
    type="text"
    placeholder=".c-field.c-field--large - fixed height of 48px" />
</div>

```html
<input
  class="c-field u-bottom-margin--1x"
  type="text"
  placeholder=".c-field - fixed height of 32px" />

<input
  class="c-field c-field--medium u-bottom-margin--1x"
  type="text"
  placeholder=".c-field.c-field--medium fixed height of 40px" />

<input
  class="c-field c-field--large u-bottom-margin--1x"
  type="text"
  placeholder=".c-field.c-field--large - fixed height of 48px" />
```

#### Colors:
2 colors:
  default & error

<div>
  <input
    class="c-field u-bottom-margin--1x"
    type="text"
    placeholder=".c-field" />

  <input
    class="c-field c-field--error u-bottom-margin--1x"
    type="text"
    placeholder=".c-field.c-field--error" />
</div>

```html
<div>
  <input
    class="c-field u-bottom-margin--1x"
    type="text"
    placeholder=".c-field" />

  <input
    class="c-field c-field--error u-bottom-margin--1x"
    type="text"
    placeholder=".c-field.c-field--error" />
</div>
```

#### States:
<div>
  <input
    class="c-field u-bottom-margin--1x"
    type="text"
    disabled
    placeholder=".c-field - disabled input" />

  <input
    class="c-field u-bottom-margin--1x"
    type="text"
    autofocus
    placeholder=".c-field - focused input" />
</div>

```html
<div>
  <input
    class="c-field u-bottom-margin--1x"
    type="text"
    disabled
    placeholder=".c-field - disabled input" />

  <input
    class="c-field u-bottom-margin--1x"
    type="text"
    autofocus
    placeholder=".c-field - focused input" />
</div>
```

#### Inputs with Label and hints:
<div class="u-bottom-margin--3x">
  <label
    class="c-label"
    for="sampleInputFieldSmall1">
    Username:
  </label>
  <input
    id="sampleInputFieldSmall1"
    class="c-field"
    type="text"
    placeholder="Username" />
  <div class="c-hint">test hint</div>
</div>

<div class="u-bottom-margin--3x">
  <label class="c-label u-color-neutral--grey-lighter" for="sampleInputFieldSmall">
    for disabled input to give color to label u need to add ng-class for disabled with u-color-neutral--grey-lighter color
  </label>
  <input id="sampleInputFieldSmall" class="c-field" type="text" placeholder="Username" disabled="">
  <div class="c-hint">test hint</div>
</div>

<div class="u-bottom-margin--1x">
  <label
    class="c-label"
    for="sampleInputFieldSmall2">
    Username:
  </label>
  <input
    id="sampleInputFieldSmall2"
    class="c-field c-field--error"
    type="text"
    placeholder="Username" />
  <div class="c-hint c-hint--error">test hint</div>
</div>

```html
<div class="u-bottom-margin--3x">
  <label
    class="c-label"
    for="sampleInputFieldSmall1">
    Username:
  </label>
  <input
    id="sampleInputFieldSmall1"
    class="c-field"
    type="text"
    placeholder="Username" />
  <div class="c-hint">test hint</div>
</div>

<div class="u-bottom-margin--3x">
  <label class="c-label u-color-neutral--grey-lighter" for="sampleInputFieldSmall">
    for disabled input to give color to label u need to add ng-class for disabled with u-color-neutral--grey-lighter color
  </label>
  <input id="sampleInputFieldSmall" class="c-field" type="text" placeholder="Username" disabled="">
  <div class="c-hint">test hint</div>
</div>

<div class="u-bottom-margin--1x">
  <label
    class="c-label"
    for="sampleInputFieldSmall2">
    Username:
  </label>
  <input
    id="sampleInputFieldSmall2"
    class="c-field c-field--error"
    type="text"
    placeholder="Username" />
  <div class="c-hint c-hint--error">test hint</div>
</div>
```

#### Inputs with Icons

<div class="o-field o-field--icon-left u-bottom-margin--1x">
  <div>
    <svg
      class="o-field__icon"
      style="width: 14px; height: 16px;"
      aria-hidden="true"
      data-prefix="far"
      data-icon="calendar-alt"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512" >
      <path
          fill="currentColor"
          d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z">
       </path>
    </svg>
  </div>
  <input class="c-field" type="text">
</div>

<div class="o-field o-field--icon-left u-bottom-margin--1x">
  <div>
    <svg
      class="o-field__icon"
      style="width: 14px; height: 16px;"
      aria-hidden="true"
      data-prefix="far"
      data-icon="calendar-alt"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512" >
      <path
          fill="currentColor"
          d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z">
       </path>
    </svg>
  </div>
  <input class="c-field c-field--error" type="text" placeholder="input field with icon and error">
</div>

<div class="o-field o-field--icon-left u-bottom-margin--1x">
  <svg
    class="o-field__icon"
    style="width: 14px; height: 16px;"
    aria-hidden="true"
    data-prefix="far"
    data-icon="calendar-alt"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512" >
    <path
        fill="currentColor"
        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z">
     </path>
  </svg>
  <input class="c-field c-field--large c-field--error" type="text" placeholder="small input field with icon and error">
</div>

<div class="o-field o-field--icon-right">
  <input class="c-field" type="text" placeholder="input field with right side icon">
  <svg
    class="o-field__icon"
    style="width: 14px; height: 16px;"
    aria-hidden="true"
    data-prefix="far"
    data-icon="calendar-alt"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512" >
    <path
        fill="currentColor"
        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z">
     </path>
  </svg>
</div>

```html
<div class="o-field o-field--icon-left u-bottom-margin--1x">
  <div>
    <svg>...</svg>
  </div>
  <input class="c-field" type="text">
</div>

<div class="o-field o-field--icon-left u-bottom-margin--1x">
  <div>
    <svg>...</svg>
  </div>
  <input class="c-field c-field--error" type="text" placeholder="input field with icon and error">
</div>

<div class="o-field o-field--icon-left u-bottom-margin--1x">
  <svg>...</svg>
  <input class="c-field c-field--large c-field--error" type="text" placeholder="small input field with icon and error">
</div>

<div class="o-field o-field--icon-right">
  <input class="c-field" type="text" placeholder="input field with right side icon">
  <svg>...</svg>
</div>
```

#### inline input groups
<div class="c-input-group">
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
</div>

```html
<div class="c-input-group">
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
  <div class="o-field">
    <input class="c-field" placeholder=".c-input-group">
  </div>
</div>
```

#### inline large input group

<div class="c-input-group">
  <div class="o-field">
    <input class="c-field c-field--large" placeholder=".c-input-group.c-field--large">
  </div>
  <div class="o-field">
    <input class="c-field c-field--large" placeholder=".c-input-group.c-field--large">
  </div>
  <div class="o-field">
    <input class="c-field c-field--large" placeholder=".c-input-group.c-field--large">
  </div>
</div>

```html
<div class="c-input-group">
  <div class="o-field">
    <input class="c-field c-field--large" placeholder=".c-input-group.c-field--large">
  </div>
  <div class="o-field">
    <input class="c-field c-field--large" placeholder=".c-input-group.c-field--large">
  </div>
  <div class="o-field">
    <input class="c-field c-field--large" placeholder=".c-input-group.c-field--large">
  </div>
</div>
```
## Checkboxes and Radiobuttons :
### Sizes
Checkboxes comes in two sizes:
1. Default (16px)
<div class="c-choice c-choice--checkbox u-bottom-margin--2x">
  <input
    id="111"
    class="c-choice__field"
    type="checkbox">
  <label
    class="c-choice__label"
    for="111">
    <span class="c-choice__text">select all</span>
  </label>
</div>

2. Small (12px)
<div class="c-choice c-choice--checkbox c-choice--small u-bottom-margin--2x">
  <input
    id="112"
    class="c-choice__field"
    type="checkbox">
  <label
    class="c-choice__label"
    for="112">
    <span class="c-choice__text">select all</span>
  </label>
</div>

Radiobuttons comes in one size (16px)
<div class="c-choice c-choice--radio u-bottom-margin--2x">
  <input
  id="12"
  class="c-choice__field"
  type="radio">
  <label
  class="c-choice__label"
  for="12">
  <span class="c-choice__text">select all</span>
</label>
</div>

### States
1. Default
2. Hover
3. Selected
4. Disabled

### Label styles
Label Name | Label Style
-----------|------------
1. Default normal proximaNova | `c-choice__label`
2. Semi-bold ProximaNova | `c-choice__label.c-choice__label--semi-bold`

#### checkbox and radios with text
<div class="c-choice c-choice--checkbox u-bottom-margin--2x">
  <input
    id="111"
    class="c-choice__field"
    type="checkbox">
  <label
    class="c-choice__label"
    for="111">
    <span class="c-choice__text">select all</span>
  </label>
</div>

<div class="c-choice c-choice--checkbox u-bottom-margin--2x">
  <input
    id="11i"
    class="c-choice__field intermediate"
    type="checkbox">
  <label
    class="c-choice__label"
    for="11i">
    <span class="c-choice__text">select all</span>
  </label>
</div>

<div class="c-choice c-choice--radio u-bottom-margin--2x">
  <input
  id="11"
  class="c-choice__field"
  type="radio">
  <label
  class="c-choice__label"
  for="11">
  <span class="c-choice__text">select all</span>
</label>
</div>

#### checkbox and radios with semi-bold text
<div class="c-choice c-choice--checkbox u-bottom-margin--2x">
  <input
    id="112"
    class="c-choice__field"
    type="checkbox">
  <label
    class="c-choice__label c-choice__label--semi-bold"
    for="112">
    <span class="c-choice__text">select all</span>
  </label>
</div>

<div class="c-choice c-choice--checkbox u-bottom-margin--2x">
  <input
    id="12i"
    class="c-choice__field intermediate"
    type="checkbox">
  <label
    class="c-choice__label c-choice__label--semi-bold"
    for="12i">
    <span class="c-choice__text">select all</span>
  </label>
</div>

<div class="c-choice c-choice--radio u-bottom-margin--2x">
  <input
  id="radio-12"
  class="c-choice__field"
  type="radio">
  <label
  class="c-choice__label c-choice__label--semi-bold"
  for="radio-12">
  <span class="c-choice__text">select all</span>
</label>
</div>

#### checkbox and radios without text

<div class="c-choice c-choice--checkbox u-bottom-margin--2x">
  <input
    id="1114"
    class="c-choice__field"
    type="checkbox">
  <label
    class="c-choice__label"
    for="1114">
  </label>
</div>

<div class="c-choice c-choice--radio u-bottom-margin--2x">
  <input
    id="radio-3"
    class="c-choice__field"
    type="radio">
  <label
    class="c-choice__label"
    for="radio-3">
  </label>
</div>

#### disabled checkbox and radios

<div class="c-choice c-choice--checkbox u-bottom-margin--2x">
  <input
    id="111r"
    class="c-choice__field"
    type="checkbox"
    disabled>
  <label
    class="c-choice__label"
    for="111r">
    <span class="c-choice__text">select all</span>
  </label>
</div>

<div class="c-choice c-choice--radio u-bottom-margin--2x">
  <input
    id="11q"
    class="c-choice__field"
    type="radio"
    disabled>
  <label
    class="c-choice__label"
    for="11q">
    <span class="c-choice__text">select all</span>
  </label>
</div>

<div class="c-choice c-choice--checkbox u-bottom-margin--2x">
  <input
    id="111rw"
    class="c-choice__field"
    type="checkbox"
    disabled>
  <label
    class="c-choice__label"
    for="111rw">
  </label>
</div>

<div class="c-choice c-choice--radio u-bottom-margin--2x">
  <input
    id="11qw"
    class="c-choice__field"
    type="radio"
    disabled>
  <label
    class="c-choice__label"
    for="11qw">
  </label>
</div>

#### select field styling

<select class="c-field u-bottom-margin--2x">
  <option value="bug-item">bug-item</option>
  <option value="state-item">state-item</option>
  <option value="state-items">state-items</option>
  <option value="bug-basic-details">bug-basic-details</option>
</select>

<select class="c-field c-field--large">
  <option value="bug-item">bug-item</option>
  <option value="state-item">state-item</option>
  <option value="state-items">state-items</option>
  <option value="bug-basic-details">bug-basic-details</option>
</select>

#### textarea

<div class="o-field u-bottom-margin--1x">
  <label
    for="textarea1"
    class="c-label">
    Text area label
  </label>

  <textarea
    id="textarea1"
    class="c-field"
    name="name"
    placeholder=".c-field"></textarea>

  <div class="c-hint">take care :D.</div>
</div>

<textarea class="c-field c-field--error" name="name" rows="8" cols="80" ></textarea>
