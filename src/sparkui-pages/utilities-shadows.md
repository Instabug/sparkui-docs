---
path: "/docs/utilities-shadows"
date: "2017-11-07"
title: "Utilities - Shadows"
---
# Layers & Shadows
Layer is the surface on which content and components placed in.

## Demo

<div class="u-display-flex u-justify-content--center u-flex--wrap u-top-padding--2x">
  <div class="demo-box u-bg-white u-box-shadow--inset-raised">inset raised</div>
  <div class="demo-box u-bg-white u-box-shadow--inset-lifted">inset lifted</div>
  <div class="demo-box u-bg-white u-box-shadow--inset-overlay">inset overlay</div>
  <div class="demo-box u-bg-white u-box-shadow--inset-boost">inset boost</div>
  <div class="demo-box u-bg-white u-box-shadow--inset-pop-out">inset popout</div>
  <div class="demo-box u-bg-white u-box-shadow--inset-all-over">inset all-over</div>

  <div class="demo-box u-bg-white u-box-shadow--raised">raised</div>
  <div class="demo-box u-bg-white u-box-shadow--lifted">lifted</div>
  <div class="demo-box u-bg-white u-box-shadow--overlay">overlay</div>
  <div class="demo-box u-bg-white u-box-shadow--boost">boost</div>
  <div class="demo-box u-bg-white u-box-shadow--pop-out">pop-out</div>
  <div class="demo-box u-bg-white u-box-shadow--all-over">all-over</div>
</div>

## Elevation
Each type of layer placed in on a different imagined plane of the UI giving each its own distinct elevation.

Elevation is the implied measured distance above the base layer.

The affect of the elevation on a layer is defined by the intensity and depth of the shadow it casts.

## Elevation scale
The range of imagined planes in the UI are on a scale from 0 to 15, with zero being the base and 15 the highest point. 

The higher the elevation is the larger the shadow each layer will cast. Each unit on the elevation scale is equal to the pixel value of the coded blur applied to shadow.

Each layer is a defined marker along the elevation scale.

There is not a layer for each level of the scale.

## Content on layer
Components with different layers can be stacked one top of one another, In integrations page tool card “jira” is on top of the integrations card. 

To represent depth, Uses the offset of the `y` axis and blur of the box-shadow. 

Content on a layer is bound by the edges of the layer container. Content cannot cross boundaries of the layer.

## Usage

 Type    | Usage
---------|-------
Base     | Dashboard background
Flat     | Card background, Top Nav background and Side Nav Background
Raised   | All Tooltips
Lifted   | All Filters Selectors bar
Overlay  | Dropdowns and Buttons (Active - inset) (Hover - outset)
Boost    | All Popovers
Pop-out  | Top nav dropdowns and Filters dropdowns
All Over | Modals

# SCSS Reference

## Variables
Name                           |      Type      |   Default Value
-------------------------------|----------------|----------------------
**$spark-box-shadow-raised**   |     List       | `0 2px 2px 0 rgba(22, 37, 63 0.05)`
**$spark-box-shadow-lifted**   |     List       | `0 3px 4px 0 rgba(22, 37, 63 0.06)`
**$spark-box-shadow-overlay**  |     List       | `0 4px 8px 0 rgba(22, 37, 63 0.07)`
**$spark-box-shadow-boost**    |     List       | `0 6px 10px 0 rgba(22, 37, 63 0.08)`
**$spark-box-shadow-pop-out**  |     List       | `0 7px 12px 0 rgba(22, 37, 63 0.09)`
**$spark-box-shadow-all-over** |     List       | `0 10px 15px 0 rgba(22, 37, 63 0.1)`



# Box Shadows Utilities Classes

There are 4 variations, they are used to apply outer box shadow to containers as below

Class                             | Implementation
----------------------------------|---------------
**.u-box-shadow--raised**         |  `0 2px 2px 0 rgba(22, 37, 63 0.05) !important;`
**.u-box-shadow--lifted**         |  `0 3px 4px 0 rgba(22, 37, 63 0.06) !important;`
**.u-box-shadow--overlay**        |  `0 4px 8px 0 rgba(22, 37, 63 0.07) !important;`
**.u-box-shadow--boost**          |  `0 6px 10px 0 rgba(22, 37, 63 0.08) !important;`
**.u-box-shadow--pop-out**        |  `0 7px 12px 0 rgba(22, 37, 63 0.09) !important;`
**.u-box-shadow--all-over**       |  `0 10px 15px 0 rgba(22, 37, 63 0.1) !important;`
**.u-box-shadow--inset-raised**   |  `0 2px 2px 0 rgba(22, 37, 63 0.05) inset !important;`
**.u-box-shadow--inset-lifted**   |  `0 3px 4px 0 rgba(22, 37, 63 0.06) inset !important;`
**.u-box-shadow--inset-overlay**  |  `0 4px 8px 0 rgba(22, 37, 63 0.07) inset !important;`
**.u-box-shadow--inset-boost**    |  `0 6px 10px 0 rgba(22, 37, 63 0.08) inset !important;`
**.u-box-shadow--inset-pop-out**  |  `0 7px 12px 0 rgba(22, 37, 63 0.09) inset !important;`
**.u-box-shadow--inset-all-over** |  `0 10px 15px 0 rgba(22, 37, 63 0.1) inset !important;`
