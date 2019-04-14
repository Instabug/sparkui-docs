---
path: "/docs/modals"
date: "2017-11-07"
title: "Modals and Drawers"
---

# Modals
This is the internal design of modals, this is not related to how the reveal will appear,
this is just the content of the modal styling

## Demo
<div class="u-window-padding--4x">
  <div class="c-modal">
      <div class="c-modal__header u-pillar-padding--2x">
          <div>
              Modal Action Titles
          </div>
          <div class="c-modal__close-button">&times;</div>
      </div>
      <div class="c-modal__body u-window-padding--2x">
          <div class="c-modal__content">
              this is modal content header
          </div>
      </div>
      <div class="c-modal__footer u-pillar-padding--2x">
          <a class="c-button c-button--error u-right-margin--1x">
              Save
          </a>
          <a class="c-button c-button--info">
              Close
          </a>
      </div>
  </div>
</div>

```html
<div class="c-modal">
    <div class="c-modal__header u-pillar-padding--2x">
        <div>
            Modal Action Titles
        </div>
        <div class="c-modal__close-button">&times;</div>
    </div>
    <div class="c-modal__body u-window-padding--2x">
        <div class="c-modal__content">
            this is modal content header
        </div>
    </div>
    <div class="c-modal__footer u-pillar-padding--2x">
        <a class="c-button c-button--error u-right-margin--1x">
            Save
        </a>
        <a class="c-button c-button--info">
            Close
        </a>
    </div>
</div>
```

## Usage
This component has the following classes list
  * `.c-modal` this is the main container of the modal window, this doesn't
  add any shadows, padding or margin, so you need to set them using utilities,
  default shadow level is `all-over`
  * `.c-modal__header` set the header border colors and header height, same as
  container, you need to add paddings or margin using utils classes
  * `.c-modal__header` set the header border colors and header height, same as
  container, you need to add paddings or margin using utils classes
  * `.c-modal__footer` same as header
  * `.c-modal__body` modal contents must be located here, you need to set any
  paddings using utils classes
  * `.c-modal__content` this class is used to fix scrolling issues in safari
