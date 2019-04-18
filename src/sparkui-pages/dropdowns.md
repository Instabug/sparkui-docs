---
path: "/docs/dropdowns"
date: "2017-11-07"
title: "Dropdowns"
---

<style>
    .icon-14x14 {
      width: 14px;
      height: 14px;
    }
    .o-circle.-size-24 {
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 50%;
  }
  .icon-17x16 {
    width: 17px;
    height: 16px;
  }
  .c-dropdownlist li {
    margin-bottom: 0;
  }
  </style>
# Dropdowns Demo
## Demo
#### To use the dropdowns you need to check angular sparkui docs the following details are for usage from sparkui
#### the dropdown element is inline elemeemt to take full width with class ```.c-dropdown-toggle--block```

<spark-dropdown-select>
  <spark-dropdown-toggle class="c-dropdown c-dropdown-select">
    <span>
      <toggle>
        <a class="c-dropdown-toggle c-dropdown-toggle--small">
          <span class="c-dropdown-toggle__placeholder">block</span>
        </a>
      </toggle>
    </span>
  </spark-dropdown-toggle>
</spark-dropdown-select>

```html
<spark-dropdown-select>
  <spark-dropdown-toggle class="c-dropdown c-dropdown-select">
    <span>
      <toggle>
        <a class="c-dropdown-toggle c-dropdown-toggle--small">
          <span class="c-dropdown-toggle__placeholder">block</span>
        </a>
      </toggle>
    </span>
  </spark-dropdown-toggle>
</spark-dropdown-select>
```

####by default the minimum width of dropdown is 80px:

<spark-dropdown-select>
  <spark-dropdown-toggle class="c-dropdown c-dropdown-select">
    <span>
      <toggle>
        <a class="c-dropdown-toggle c-dropdown-toggle--small">
          <span class="c-dropdown-toggle__placeholder">min</span>
        </a>
      </toggle>
    </span>
  </spark-dropdown-toggle>
</spark-dropdown-select>

```html
<spark-dropdown-select>
  <spark-dropdown-toggle class="c-dropdown c-dropdown-select">
    <span>
      <toggle>
        <a class="c-dropdown-toggle c-dropdown-toggle--small">
          <span class="c-dropdown-toggle__placeholder">min</span>
        </a>
      </toggle>
    </span>
  </spark-dropdown-toggle>
</spark-dropdown-select>
```

####by default the max width is 316px:
<spark-dropdown-select>
  <spark-dropdown-toggle class="c-dropdown c-dropdown-select">
    <span>
      <toggle>
        <a class="c-dropdown-toggle c-dropdown-toggle--small">
          <span class="c-dropdown-toggle__placeholder">Maxiumun number of words ever exist in the world</span>
        </a>
      </toggle>
    </span>
  </spark-dropdown-toggle>
</spark-dropdown-select>

```html
<spark-dropdown-select>
  <spark-dropdown-toggle class="c-dropdown c-dropdown-select">
    <span>
      <toggle>
        <a class="c-dropdown-toggle c-dropdown-toggle--small">
          <span class="c-dropdown-toggle__placeholder">Maxiumun number of words ever exist in the world</span>
        </a>
      </toggle>
    </span>
  </spark-dropdown-toggle>
</spark-dropdown-select>
```

#### another type is circular dropdown with class ```.c-dropdown-toggle--circle```
<div style="display: flex;">
  <spark-dropdown-toggle>
    <span>
      <toggle>
        <div class="c-dropdown-toggle c-dropdown-toggle--circle c-dropdown-toggle--small" title="More">
          <svg class="icon-17x16" viewBox="0 0 17 4" id="shape-more" width="100%" height="100%"><title>more</title><path d="M14.96 4c-1.126 0-2.04-.895-2.04-2 0-1.104.914-2 2.04-2C16.087 0 17 .896 17 2c0 1.105-.913 2-2.04 2zM8.5 4c-1.127 0-2.04-.895-2.04-2 0-1.104.913-2 2.04-2s2.04.896 2.04 2c0 1.105-.913 2-2.04 2zM2.04 4C.913 4 0 3.106 0 2 0 .897.913 0 2.04 0s2.04.896 2.04 2c0 1.105-.913 2-2.04 2z"></path></svg>
        </div>
      </toggle>
    </span>
  </spark-dropdown-toggle>

  <spark-dropdown-toggle class="has-arrow">
    <span class="is-open">
      <toggle>
        <div class="c-dropdown-toggle c-dropdown-toggle--circle c-dropdown-toggle--small" title="More">
          <svg class="icon-17x16" viewBox="0 0 17 4" id="shape-more" width="100%" height="100%"><title>more</title><path d="M14.96 4c-1.126 0-2.04-.895-2.04-2 0-1.104.914-2 2.04-2C16.087 0 17 .896 17 2c0 1.105-.913 2-2.04 2zM8.5 4c-1.127 0-2.04-.895-2.04-2 0-1.104.913-2 2.04-2s2.04.896 2.04 2c0 1.105-.913 2-2.04 2zM2.04 4C.913 4 0 3.106 0 2 0 .897.913 0 2.04 0s2.04.896 2.04 2c0 1.105-.913 2-2.04 2z"></path></svg>
        </div>
      </toggle>
    </span>
  </spark-dropdown-toggle>
</div>

```html
<spark-dropdown-toggle>
  <span>
    <toggle>
      <div class="c-dropdown-toggle c-dropdown-toggle--circle c-dropdown-toggle--small" title="More">
        <svg class="icon-17x16" viewBox="0 0 17 4" id="shape-more" width="100%" height="100%"><title>more</title><path d="M14.96 4c-1.126 0-2.04-.895-2.04-2 0-1.104.914-2 2.04-2C16.087 0 17 .896 17 2c0 1.105-.913 2-2.04 2zM8.5 4c-1.127 0-2.04-.895-2.04-2 0-1.104.913-2 2.04-2s2.04.896 2.04 2c0 1.105-.913 2-2.04 2zM2.04 4C.913 4 0 3.106 0 2 0 .897.913 0 2.04 0s2.04.896 2.04 2c0 1.105-.913 2-2.04 2z"></path></svg>
      </div>
    </toggle>
  </span>
</spark-dropdown-toggle>

<spark-dropdown-toggle>
  <span class="is-open">
    <toggle>
      <div class="c-dropdown-toggle c-dropdown-toggle--circle c-dropdown-toggle--small" title="More">
        <svg class="icon-17x16" viewBox="0 0 17 4" id="shape-more" width="100%" height="100%"><title>more</title><path d="M14.96 4c-1.126 0-2.04-.895-2.04-2 0-1.104.914-2 2.04-2C16.087 0 17 .896 17 2c0 1.105-.913 2-2.04 2zM8.5 4c-1.127 0-2.04-.895-2.04-2 0-1.104.913-2 2.04-2s2.04.896 2.04 2c0 1.105-.913 2-2.04 2zM2.04 4C.913 4 0 3.106 0 2 0 .897.913 0 2.04 0s2.04.896 2.04 2c0 1.105-.913 2-2.04 2z"></path></svg>
      </div>
    </toggle>
  </span>
</spark-dropdown-toggle>
```

### Sizes
We have 3 sizes `c-dropdown-toggle--large`, `c-dropdown-toggle--medium` and `c-dropdown-toggle--small`

<div class="u-display-flex u-justify-content--around">
  <div class="c-dropdown u-bottom-margin--1x">
    <div class="c-dropdown-toggle c-dropdown-toggle--large">
      large height dropdown
    </div>
    <div class="c-dropdown-pane">
      <ul class="c-dropdownlist">
        <li class="c-dropdownlist__item"><a href="#"><span>item 1</span></a></li>
        <li class="c-dropdownlist__item"><a href="#"><span>item 2</span></a></li>
        <li class="c-dropdownlist__item"><a href="#"><span>item 3</span></a></li>
        <li class="c-dropdownlist__item"><a href="#"><span>item 4</span></a></li>
      </ul>
    </div>
  </div>


  <div class="c-dropdown u-bottom-margin--1x">
    <div class="c-dropdown-toggle c-dropdown-toggle--medium">
      medium height dropdown
    </div>
    <div class="c-dropdown-pane">
      <ul>
        <li><a href="#"><span>item 1</span></a></li>
        <li><a href="#"><span>item 2</span></a></li>
        <li><a href="#"><span>item 3</span></a></li>
        <li><a href="#"><span>item 4</span></a></li>
      </ul>
    </div>
  </div>

  <div class="c-dropdown u-bottom-margin--1x">
    <div class="c-dropdown-toggle c-dropdown-toggle--small">
      small height dropdown
    </div>
    <div class="c-dropdown-pane">
      <ul>
        <li><a href="#"><span>item 1</span></a></li>
        <li><a href="#"><span>item 2</span></a></li>
        <li><a href="#"><span>item 3</span></a></li>
        <li><a href="#"><span>item 4</span></a></li>
      </ul>
    </div>
  </div>
</div>

```html
<div class="c-dropdown u-bottom-margin--1x">
  <div class="c-dropdown-toggle c-dropdown-toggle--large">
    large height dropdown
  </div>
  ...
</div>
```

### Ghost
another type of dropdowns with no borders

<div class="u-display-flex u-justify-content--around">
  <div class="c-dropdown u-bottom-margin--1x">
    <div class="c-dropdown-toggle c-dropdown-toggle--large c-dropdown-toggle--ghost">
      large height dropdown
    </div>
  </div>

  <div class="c-dropdown u-bottom-margin--1x">
    <div class="c-dropdown-toggle c-dropdown-toggle--medium c-dropdown-toggle--ghost">
      medium height dropdown
    </div>
  </div>

  <div class="c-dropdown u-bottom-margin--1x">
    <div class="c-dropdown-toggle c-dropdown-toggle--small c-dropdown-toggle--ghost">
      small height dropdown
    </div>
  </div>
</div>

```html
<div class="u-display-flex u-justify-content--around">
  <div class="c-dropdown u-bottom-margin--1x">
    <div class="c-dropdown-toggle c-dropdown-toggle--large c-dropdown-toggle--ghost">
      large height dropdown
    </div>
  </div>
  ...
</div>
```

#### Disabled
when the anchor or the tag contains ```.c-dropdown-toggle``` had attribute ```disabled```

<spark-dropdown-select>
  <spark-dropdown-toggle class="c-dropdown c-dropdown-select c-dropdown--equal-size">
    <span>
      <toggle>
        <a class="c-dropdown-toggle c-dropdown-toggle--small" disabled>
          <span class="c-dropdown-toggle__placeholder">Choose an option</span>
        </a>
      </toggle>
    </span>
  </spark-dropdown-toggle>
</spark-dropdown-select>

```html
<spark-dropdown-select>
  <spark-dropdown-toggle class="c-dropdown c-dropdown-select c-dropdown--equal-size">
    <span>
      <toggle>
        <a class="c-dropdown-toggle c-dropdown-toggle--small" disabled>
          <span class="c-dropdown-toggle__placeholder">Choose an option</span>
        </a>
      </toggle>
    </span>
  </spark-dropdown-toggle>
</spark-dropdown-select>
```
### dropdown toggler
dropdown button can have any content

<spark-dropdown-toggle class="c-dropdown--equal-size" style="width: 200px">
  <span>
    <toggle>
      <div class="c-dropdown-toggle c-dropdown-toggle--large">
        <div class="u-display-flex u-justify-content--center u-align-items--center u-full-height">
          <span class="o-circle -no-border -size-24 u-left-margin--half-x u-right-margin--1x" style="background-color:#ff0000">
          </span>
          <div class="u-flex-grow--1 u-flex-shrink--1 u-overflow--hidden u-left-margin--half-x">
            <div class="u-font--xsmall u-color--ink-0 u-font--normal">Status</div>
            <div class="u-font--small u-text--trim u-font--semibold u-color--ink-0">New</div>
          </div>
        </div>
      </div>
    </toggle>
  </span>
</spark-dropdown-toggle>

```html
<spark-dropdown-toggle class="c-dropdown--equal-size" style="width: 200px">
  <span>
    <toggle>
      <div class="c-dropdown-toggle c-dropdown-toggle--large">
        <div class="u-display-flex u-justify-content--center u-align-items--center u-full-height">
          <span class="o-circle -no-border -size-24 u-left-margin--half-x u-right-margin--1x" style="background-color:#ff0000">
          </span>
          <div class="u-flex-grow--1 u-flex-shrink--1 u-overflow--hidden u-left-margin--half-x">
            <div class="u-font--xsmall u-color--ink-0 u-font--normal">Status</div>
            <div class="u-font--small u-text--trim u-font--semibold u-color--ink-0">New</div>
          </div>
        </div>
      </div>
    </toggle>
  </span>
</spark-dropdown-toggle>
```

### Open State
by adding ```is-open``` class to both toogle button and pane

<div class="u-display-flex">
  <div class="u-bottom-marign--1x u-right-margin--6x">
    <h4 class="example-item__title">small With placeholder</h4>
    <spark-dropdown-select>
      <spark-dropdown-toggle class="c-dropdown c-dropdown-select c-dropdown--equal-size">
        <span class="is-open">
          <toggle>
            <a class="c-dropdown-toggle c-dropdown-toggle--small c-dropdown-toggle--block">
              <span class="c-dropdown-toggle__placeholder">Choose an option</span>
            </a>
          </toggle>
        </span>
        <div class="c-dropdown-pane c-dropdown-pane--small c-dropdown-pane--left is-open" style="top: 30px; left: 0px;">
          <div class="c-dropdown--search o-field o-field--icon-right is-open">
            <input class="c-dropdown--field c-field c-field--medium open-field" type="text" placeholder="Search">
            <span class="o-field__icon">
              <svg class="icon-14x14 u-color--grey-1 u-display-block">
                  <use xlink:href="#shape-search"></use>
              </svg>
            </span>
          </div>
          <pane>
            <ul class="c-dropdownlist">
              <li class="c-dropdownlist__item u-full-width">
                  <span class="u-text--trim">item 1</span>
              </li>
              <li class="c-dropdownlist__item u-full-width">
                  <span class="u-text--trim">item 2</span>
              </li>
              <li class="c-dropdownlist__item u-full-width">
                  <span class="u-text--trim">item 3</span>
              </li>
              <li class="c-dropdownlist__item u-full-width">
                  <span class="u-text--trim">item 4</span>
              </li>
              <li class="c-dropdownlist__item u-full-width">
                  <span class="u-text--trim">item 5</span>
              </li>
              <li class="c-dropdownlist__item u-full-width">
                  <span class="u-text--trim">item 6</span>
              </li>
              <li class="c-dropdownlist__item u-full-width">
                  <span class="u-text--trim">item 7</span>
              </li>
            </ul>
          </pane>
        </div>
      </spark-dropdown-toggle>
    </spark-dropdown-select>
  </div>
  <div class="u-bottom-marign--1x u-right-margin--6x">
      <h4 class="example-item__title">Medium with selected item</h4>
      <spark-dropdown-select>
        <spark-dropdown-toggle class="c-dropdown c-dropdown-select c-dropdown--equal-size">
          <span class="is-open">
            <toggle>
              <a class="c-dropdown-toggle c-dropdown-toggle--medium c-dropdown-toggle--block">
                <span>item 3</span>
              </a>
            </toggle>
          </span>
          <div class="c-dropdown-pane c-dropdown-pane--small c-dropdown-pane--left is-open" style="top: 34px; left: 0px;">
            <div class="c-dropdown--search o-field o-field--icon-right is-open">
              <input class="c-dropdown--field c-field c-field--medium open-field" type="text" placeholder="Search">
              <span class="o-field__icon">
                <svg class="icon-14x14 u-color--grey-1 u-display-block">
                    <use xlink:href="#shape-search"></use>
                </svg>
              </span>
            </div>
            <pane>
              <ul class="c-dropdownlist">
                <li class="c-dropdownlist__item u-full-width">
                  <span class="u-text--trim">item 1</span>
                </li>
                <li class="c-dropdownlist__item u-full-width">
                  <span class="u-text--trim">item 2</span>
                </li>
                <li class="c-dropdownlist__item u-full-width c-dropdownlist__item__selected">
                  <span class="u-text--trim">item 3</span>
                </li>
                <li class="c-dropdownlist__item u-full-width">
                  <span class="u-text--trim">item 4</span>
                </li>
                <li class="c-dropdownlist__item u-full-width">
                  <span class="u-text--trim">item 5</span>
                </li>
                <li class="c-dropdownlist__item u-full-width">
                  <span class="u-text--trim">item 6</span>
                </li>
                <li class="c-dropdownlist__item u-full-width">
                  <span class="u-text--trim">item 7</span>
                </li>
              </ul>
            </pane>
          </div>
        </spark-dropdown-toggle>
      </spark-dropdown-select>
    </div>
    <div class="u-bottom-marign--1x u-right-margin--6x">
      <h4 class="example-item__title">Large with selected item</h4>
      <spark-dropdown-select>
        <spark-dropdown-toggle class="c-dropdown c-dropdown-select c-dropdown--equal-size">
          <span class="is-open">
            <toggle>
              <a class="c-dropdown-toggle c-dropdown-toggle--large c-dropdown-toggle--block">
                <span>item 3</span>
              </a>
            </toggle>
          </span>
          <div class="c-dropdown-pane c-dropdown-pane--small c-dropdown-pane--left is-open" style="top: 38px; left: 0px;">
            <div class="c-dropdown--search o-field o-field--icon-right is-open">
              <input class="c-dropdown--field c-field c-field--medium" type="text" placeholder="Search">
              <span class="o-field__icon">
                <svg class="icon-14x14 u-color--grey-1 u-display-block">
                  <use xlink:href="#shape-search"></use>
                </svg>
              </span>
            </div>
          <pane>
            <ul class="c-dropdownlist">
              <li class="c-dropdownlist__item u-full-width">
                <span class="u-text--trim">item 1</span>
              </li>
              <li class="c-dropdownlist__item u-full-width">
                <span class="u-text--trim">item 2</span>
              </li>
              <li class="c-dropdownlist__item u-full-width c-dropdownlist__item__selected">
                <span class="u-text--trim">item 3</span>
              </li>
              <li class="c-dropdownlist__item u-full-width">
                <span class="u-text--trim">item 4</span>
              </li>
              <li class="c-dropdownlist__item u-full-width">
                <span class="u-text--trim">item 5</span>
              </li>
              <li class="c-dropdownlist__item u-full-width">
                <span class="u-text--trim">item 6</span>
              </li>
              <li class="c-dropdownlist__item u-full-width">
                <span class="u-text--trim">item 7</span>
              </li>
            </ul>
          </pane>
        </div>
      </spark-dropdown-toggle>
    </spark-dropdown-select>
  </div>
</div>

<br><br><br><br><br><br><br><br><br><br>

### furthur notes:
- ```.c-dropdown--equal-size``` this class is used to give the toggler and pane the same width
- the position of the dropdown pane is calculated by the angular component
