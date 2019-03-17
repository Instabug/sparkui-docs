---
path: "/docs/avatars"
date: "2017-11-07"
title: "Avatars"
---
# Avatars

## Demo
<div class="u-display-flex u-bottom-margin--3x u-align-items--center">
  <div class="c-spark-avatar c-spark-avatar--xxsmall u-right-margin--2x">
    <img class="c-spark-avatar__img" alt="placeholder" src="http://placehold.it/16x16/3B6DC6/FFF">
  </div>

  <div class="c-spark-avatar c-spark-avatar--xsmall u-right-margin--2x">
    <img class="c-spark-avatar__img" alt="placeholder" src="http://placehold.it/24x24/3B6DC6/FFF">
  </div>

  <div class="c-spark-avatar c-spark-avatar--small u-right-margin--2x">
    <img class="c-spark-avatar__img" alt="placeholder" src="http://placehold.it/32x32/3B6DC6/FFF">
  </div>

  <div class="c-spark-avatar c-spark-avatar--medium u-right-margin--2x">
    <img class="c-spark-avatar__img" alt="placeholder" src="http://placehold.it/40x40/3B6DC6/FFF">
  </div>

  <div class="c-spark-avatar c-spark-avatar--large u-right-margin--2x">
    <img class="c-spark-avatar__img" alt="placeholder" src="http://placehold.it/48x48/3B6DC6/FFF">
  </div>

  <div class="c-spark-avatar c-spark-avatar--super u-right-margin--2x">
    <img class="c-spark-avatar__img" alt="placeholder" src="http://placehold.it/72x72/3B6DC6/FFF">
  </div>

  <div class="c-spark-avatar c-spark-avatar--xsuper">
    <img class="c-spark-avatar__img" alt="placeholder" src="http://placehold.it/104x104/3B6DC6/FFF">
  </div>
</div>

```html
<div class="c-spark-avatar c-spark-avatar--xxsmall u-right-margin--2x">
  <img class="c-spark-avatar__img" alt="placeholder" src="http://placehold.it/16x16/3B6DC6/FFF">
</div>
```

## Usage
avatars component has the following classes
* `c-spark-avatar` this provide the basic avatar styling, but it has no padding or margins, so you
need to specify them using utilities classes, along side this class you need to specify the size,
this component has 9 sizes to provide image with `16, 24, 32, 40, 48, 72 and 104` pixels the
corresponding classes are `c-spark-avatar--xxsmall`, `c-spark-avatar--xsmall`, `c-spark-avatar--small`
, `c-spark-avatar--medium`, `c-spark-avatar--large`, 
`c-spark-avatar--super`, `c-spark-avatar--xsuper`

* `c-spark-avatar__img` this class is added to the image element itself
* `c-spark-avatar` sets the box-shadow of the avatar to `sky-dark` color with `opacity: 0.1`
