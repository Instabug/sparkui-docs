(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(151);e.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},147:function(t,e,a){var n;t.exports=(n=a(149))&&n.default||n},148:function(t){t.exports={data:{site:{siteMetadata:{title:"SparkUI"}}}}},149:function(t,e,a){"use strict";a.r(e);a(33);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(54),l=a(2),d=function(t){var e=t.location,a=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json))};d.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=d},150:function(t){t.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Alerts",path:"/docs/alerts"}}},{node:{frontmatter:{title:"Avatars",path:"/docs/avatars"}}},{node:{frontmatter:{title:"Badges",path:"/docs/badges"}}},{node:{frontmatter:{title:"Breadcrumbs",path:"/docs/breadcrumbs"}}},{node:{frontmatter:{title:"Buttons",path:"/docs/buttons"}}},{node:{frontmatter:{title:"Cards",path:"/docs/cards"}}},{node:{frontmatter:{title:"Colors",path:"/docs/colors"}}},{node:{frontmatter:{title:"Dropdowns",path:"/docs/dropdowns"}}},{node:{frontmatter:{title:"HUDs",path:"/docs/huds"}}},{node:{frontmatter:{title:"Icons",path:"/docs/icons"}}},{node:{frontmatter:{title:"Inputs",path:"/docs/inputs"}}},{node:{frontmatter:{title:"Loaders",path:"/docs/loaders"}}},{node:{frontmatter:{title:"Modals and Drawers",path:"/docs/modals"}}},{node:{frontmatter:{title:"Tooltips",path:"/docs/tooltips"}}},{node:{frontmatter:{title:"Utilities - Alignment",path:"/docs/utilities-alignment"}}},{node:{frontmatter:{title:"Utilities - Box model",path:"/docs/utilities-box-model"}}},{node:{frontmatter:{title:"Utilities - Colors",path:"/docs/utilities-colors"}}},{node:{frontmatter:{title:"Utilities - Flexbox",path:"/docs/utilities-flex"}}},{node:{frontmatter:{title:"Utilities - Overflow",path:"/docs/utilities-overflow"}}},{node:{frontmatter:{title:"Utilities - Shadows",path:"/docs/utilities-shadows"}}},{node:{frontmatter:{title:"Utilities - Typography",path:"/docs/utilities-typography"}}},{node:{frontmatter:{title:"Utilities - Visibility",path:"/docs/utilities-visibility"}}}]}}}},151:function(t,e,a){"use strict";var n=a(148),r=a(0),o=a.n(r),i=a(4),s=a.n(i),l=a(152),d=a.n(l),c=a(32),u=a.n(c),m=(a(147),o.a.createContext({})),p=function(t){return o.a.createElement(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};a(142);var f=function(t){var e=t.siteTitle;return o.a.createElement("div",{className:"spark-docs-layout__header"},o.a.createElement(u.a,{to:"/",className:"u-color-ink u-font--super",style:{textDecoration:"none"}},e))},h=a(150),y=function(t){return t.pages.map(function(t,e){var a=t.node.frontmatter;return o.a.createElement(u.a,{className:"o-link spark-docs-sidebar-item",activeClassName:"spark-docs-sidebar-item--current",to:a.path},o.a.createElement("div",{key:e}," ",a.title," "))})},v=function(t){t.data;return o.a.createElement(p,{query:"3649305949",render:function(t){return o.a.createElement("div",{className:"spark-docs-sidebar"},o.a.createElement(y,{pages:t.allMarkdownRemark.edges}))},data:h})},E=function(t){var e=t.children;return o.a.createElement(p,{query:"755544856",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement("div",{className:"spark-docs-container"},o.a.createElement(f,{siteTitle:t.site.siteMetadata.title}),o.a.createElement("div",{className:"spark-docs-layout"},o.a.createElement(v,null),o.a.createElement("div",{className:"spark-docs-details-body"},e))))},data:n})};E.propTypes={children:s.a.node.isRequired};e.a=E}}]);
//# sourceMappingURL=component---src-pages-404-js-be854fdf3c51346028fc.js.map