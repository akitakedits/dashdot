"use strict";(self.webpackChunkdashdot=self.webpackChunkdashdot||[]).push([[872],{9740:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var i=n(5893),s=n(1151);const r={sidebar_position:4,tags:["Configuration","Styles"],title:"RAM"},l="RAM Widget",t={id:"configuration/ram",title:"RAM",description:"{/ markdownlint-disable /}",source:"@site/docs/configuration/ram.mdx",sourceDirName:"configuration",slug:"/configuration/ram",permalink:"/docs/configuration/ram",draft:!1,unlisted:!1,editUrl:"https://github.com/MauriceNino/dashdot/edit/main/apps/docs/docs/configuration/ram.mdx",tags:[{label:"Configuration",permalink:"/docs/tags/configuration"},{label:"Styles",permalink:"/docs/tags/styles"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["Configuration","Styles"],title:"RAM"},sidebar:"tutorialSidebar",previous:{title:"Storage",permalink:"/docs/configuration/storage"},next:{title:"Network",permalink:"/docs/configuration/network"}},o={},c=[{value:"Options",id:"options",level:2},{value:"<code>DASHDOT_RAM_LABEL_LIST</code>",id:"dashdot_ram_label_list",level:3},{value:"Styles",id:"styles",level:2},{value:"<code>DASHDOT_RAM_WIDGET_GROW</code>",id:"dashdot_ram_widget_grow",level:3},{value:"<code>DASHDOT_RAM_WIDGET_MIN_WIDTH</code>",id:"dashdot_ram_widget_min_width",level:3},{value:"<code>DASHDOT_RAM_SHOWN_DATAPOINTS</code>",id:"dashdot_ram_shown_datapoints",level:3},{value:"<code>DASHDOT_RAM_POLL_INTERVAL</code>",id:"dashdot_ram_poll_interval",level:3},{value:"Overrides",id:"overrides",level:2},{value:"<code>DASHDOT_OVERRIDE_RAM_BRAND</code>",id:"dashdot_override_ram_brand",level:3},{value:"<code>DASHDOT_OVERRIDE_RAM_SIZE</code>",id:"dashdot_override_ram_size",level:3},{value:"<code>DASHDOT_OVERRIDE_RAM_TYPE</code>",id:"dashdot_override_ram_type",level:3},{value:"<code>DASHDOT_OVERRIDE_RAM_FREQUENCY</code>",id:"dashdot_override_ram_frequency",level:3}];function a(e){const d={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n",(0,i.jsx)(d.h1,{id:"ram-widget",children:"RAM Widget"}),"\n","\n",(0,i.jsx)(d.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(d.h3,{id:"dashdot_ram_label_list",children:(0,i.jsx)(d.code,{children:"DASHDOT_RAM_LABEL_LIST"})}),"\n",(0,i.jsx)(d.p,{children:"Selects which data is shown in the RAM widget."}),"\n",(0,i.jsxs)(d.p,{children:["The available options are: ",(0,i.jsx)(d.code,{children:"brand"}),", ",(0,i.jsx)(d.code,{children:"size"}),", ",(0,i.jsx)(d.code,{children:"type"}),", ",(0,i.jsx)(d.code,{children:"frequency"}),"."]}),"\n",(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsxs)(d.li,{children:["type: ",(0,i.jsx)(d.code,{children:"string (comma separated list)"})]}),"\n",(0,i.jsxs)(d.li,{children:["default: ",(0,i.jsx)(d.code,{children:"brand,size,type,frequency"})]}),"\n"]}),"\n",(0,i.jsx)(d.h2,{id:"styles",children:"Styles"}),"\n",(0,i.jsx)(d.h3,{id:"dashdot_ram_widget_grow",children:(0,i.jsx)(d.code,{children:"DASHDOT_RAM_WIDGET_GROW"})}),"\n",(0,i.jsx)(d.p,{children:"To adjust the relative size of the Memory widget."}),"\n",(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsxs)(d.li,{children:["type: ",(0,i.jsx)(d.code,{children:"number"})]}),"\n",(0,i.jsxs)(d.li,{children:["default: ",(0,i.jsx)(d.code,{children:"4"})]}),"\n"]}),"\n",(0,i.jsx)(d.h3,{id:"dashdot_ram_widget_min_width",children:(0,i.jsx)(d.code,{children:"DASHDOT_RAM_WIDGET_MIN_WIDTH"})}),"\n",(0,i.jsx)(d.p,{children:"To adjust the minimum width of the Memory widget (in px)."}),"\n",(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsxs)(d.li,{children:["type: ",(0,i.jsx)(d.code,{children:"number"})]}),"\n",(0,i.jsxs)(d.li,{children:["default: ",(0,i.jsx)(d.code,{children:"500"})]}),"\n"]}),"\n",(0,i.jsx)(d.h3,{id:"dashdot_ram_shown_datapoints",children:(0,i.jsx)(d.code,{children:"DASHDOT_RAM_SHOWN_DATAPOINTS"})}),"\n",(0,i.jsx)(d.p,{children:"The amount of datapoints in the Memory graph."}),"\n",(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsxs)(d.li,{children:["type: ",(0,i.jsx)(d.code,{children:"number"})]}),"\n",(0,i.jsxs)(d.li,{children:["default: ",(0,i.jsx)(d.code,{children:"20"})]}),"\n"]}),"\n",(0,i.jsx)(d.h3,{id:"dashdot_ram_poll_interval",children:(0,i.jsx)(d.code,{children:"DASHDOT_RAM_POLL_INTERVAL"})}),"\n",(0,i.jsx)(d.p,{children:"Read the Memory load every x milliseconds."}),"\n",(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsxs)(d.li,{children:["type: ",(0,i.jsx)(d.code,{children:"number"})]}),"\n",(0,i.jsxs)(d.li,{children:["default: ",(0,i.jsx)(d.code,{children:"1000"})]}),"\n"]}),"\n",(0,i.jsx)(d.h2,{id:"overrides",children:"Overrides"}),"\n",(0,i.jsx)(d.p,{children:"You can use overrides to manually set statically gathered data. This is useful\nif you want to use dashdot on a VPS or a system where the data cannot be\ngathered automatically."}),"\n",(0,i.jsx)(d.h3,{id:"dashdot_override_ram_brand",children:(0,i.jsx)(d.code,{children:"DASHDOT_OVERRIDE_RAM_BRAND"})}),"\n",(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsxs)(d.li,{children:["type: ",(0,i.jsx)(d.code,{children:"string"})]}),"\n",(0,i.jsxs)(d.li,{children:["default: ",(0,i.jsx)(d.code,{children:"unset"})]}),"\n"]}),"\n",(0,i.jsx)(d.h3,{id:"dashdot_override_ram_size",children:(0,i.jsx)(d.code,{children:"DASHDOT_OVERRIDE_RAM_SIZE"})}),"\n",(0,i.jsxs)(d.p,{children:["Number needs to be passed in bytes (e.g. ",(0,i.jsx)(d.code,{children:"34359738368"})," for 32 GB, because it is ",(0,i.jsx)(d.code,{children:"32 * 1024 * 1024 * 1024"}),")"]}),"\n",(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsxs)(d.li,{children:["type: ",(0,i.jsx)(d.code,{children:"number"})]}),"\n",(0,i.jsxs)(d.li,{children:["default: ",(0,i.jsx)(d.code,{children:"unset"})]}),"\n"]}),"\n",(0,i.jsx)(d.h3,{id:"dashdot_override_ram_type",children:(0,i.jsx)(d.code,{children:"DASHDOT_OVERRIDE_RAM_TYPE"})}),"\n",(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsxs)(d.li,{children:["type: ",(0,i.jsx)(d.code,{children:"string"})]}),"\n",(0,i.jsxs)(d.li,{children:["default: ",(0,i.jsx)(d.code,{children:"unset"})]}),"\n"]}),"\n",(0,i.jsx)(d.h3,{id:"dashdot_override_ram_frequency",children:(0,i.jsx)(d.code,{children:"DASHDOT_OVERRIDE_RAM_FREQUENCY"})}),"\n",(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsxs)(d.li,{children:["type: ",(0,i.jsx)(d.code,{children:"number"})]}),"\n",(0,i.jsxs)(d.li,{children:["default: ",(0,i.jsx)(d.code,{children:"unset"})]}),"\n"]})]})}function h(e={}){const{wrapper:d}={...(0,s.a)(),...e.components};return d?(0,i.jsx)(d,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,d,n)=>{n.d(d,{Z:()=>t,a:()=>l});var i=n(7294);const s={},r=i.createContext(s);function l(e){const d=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function t(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:d},e.children)}}}]);