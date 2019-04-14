---
path: "/docs/cards"
date: "2017-11-07"
title: "Cards"
---
# Cards

## Demo

### card without header or footer
<div class="c-spark-card u-window-margin--2x">
  <div class="c-spark-card__body u-pillar-margin--3x u-letter-margin--2x">
    This is a card container without header or footer
  </div>
</div>

### card with header and footer
<div class="c-spark-card u-window-margin--2x">
  <div class="c-spark-card__header">
    <div class="c-spark-card__title u-font--bold u-flex-1">
      Card Title wrapped in `.c-spark-card__title`
    </div>
    <a class="o-link o-link--underline" href="#"> and this is header link</a>
  </div>
  <div class="c-spark-card__body u-pillar-margin--3x u-letter-margin--2x">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores facere est. Odio consectetur expedita fugiat sequi amet harum quidem blanditiis temporibus fugit, odit maiores quisquam unde voluptas ipsum dolor.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores facere est. Odio consectetur expedita fugiat sequi amet harum quidem blanditiis temporibus fugit, odit maiores quisquam unde voluptas ipsum dolor.</p>
  </div>
  <div class="c-spark-card__footer u-right">
    <a href="#" class="c-button c-button--info u-right-margin--1x">OK</a>
    <a href="#" class="c-button c-button--default">Cancel</a>
  </div>
</div>

```html
<div class="c-spark-card u-window-margin--2x">
  <div class="c-spark-card__header">
    <div class="c-spark-card__title u-font--bold u-flex-1">
      Card Title...
    </div>
    <a href="#"> and this is header link</a>
  </div>

  <div class="c-spark-card__body u-pillar-margin--3x u-letter-margin--2x">
    Card Content....
  </div>

  <div class="c-spark-card__footer u-right">
    <a href="#" class="c-button c-button--info u-right-margin--1x">OK</a>
    ...
  </div>
</div>
```

## Usage
* card component cosistes of `card-header`, `card-body` and `card-footer`,

* card by default has no shadow, you must add shadow utility class to import,
available shadows are:-
  * `.u-box-shadow`
  * `.u-box-shadow--high`
  * `.u-box-shadow--higher`
  * `.u-box-shadow--highest`

* `card-body` has no padding by default, you can add then using utiities as well.

* cards could be have header and footer, you can use `.c-spark-card__title` into headers or
footers to style a title
