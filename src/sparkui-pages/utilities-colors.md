---
path: "/docs/utilities-colors"
date: "2019-03-10"
title: "Utilities - Colors"
---
# Colors Utilities Classes
In sparkUI we have utilities classes to colorize text, background, fill and stroke of svgs
utilities classes formulas are:

Class | Usage
------|------
`u-color-[COLOR_CLASS]--[COLOR_NAME]` | set current container font color to the selected color
`u-bg-[COLOR_CLASS]--[COLOR_NAME]` | set current container background color to the selected color
`u-fill-[COLOR_CLASS]--[COLOR_NAME]` | set current svg fill color to the selected color
`u-stroke-[COLOR_CLASS]--[COLOR_NAME]` | set current svg stroke color to the selected color

You can find a list of all [SprakUI Colors](colors)


we also have 4 special case colors for svg fill and stroke to apply the current parent color
`u-stroke-current-color` and `u-fill-current-color` or to remove the color of strock or fill
`u-fill-none` and `u-stroke-none`
