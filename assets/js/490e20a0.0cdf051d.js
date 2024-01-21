"use strict";(self.webpackChunkdashdot=self.webpackChunkdashdot||[]).push([[24],{8828:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var o=t(5893),s=t(1151);const r={sidebar_position:4,tags:["Help"]},i="Help",a={id:"help",title:"Help",description:"Q&A",source:"@site/docs/help.mdx",sourceDirName:".",slug:"/help",permalink:"/docs/help",draft:!1,unlisted:!1,editUrl:"https://github.com/MauriceNino/dashdot/edit/main/apps/docs/docs/help.mdx",tags:[{label:"Help",permalink:"/docs/tags/help"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["Help"]},sidebar:"tutorialSidebar",previous:{title:"API Endpoints",permalink:"/docs/integration/api"}},l={},h=[{value:"Q&amp;A",id:"qa",level:2},{value:"How can I make the percentage labels in the top left corner stay?",id:"how-can-i-make-the-percentage-labels-in-the-top-left-corner-stay",level:3},{value:"The network information can not be read correctly - what should I do?",id:"the-network-information-can-not-be-read-correctly---what-should-i-do",level:3},{value:"Can you use dash. without mounting the whole host drive?",id:"can-you-use-dash-without-mounting-the-whole-host-drive",level:3},{value:"Answer not found?",id:"answer-not-found",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"help",children:"Help"}),"\n",(0,o.jsx)(n.h2,{id:"qa",children:"Q&A"}),"\n",(0,o.jsx)(n.h3,{id:"how-can-i-make-the-percentage-labels-in-the-top-left-corner-stay",children:"How can I make the percentage labels in the top left corner stay?"}),"\n",(0,o.jsxs)(n.p,{children:["In earlier versions, the top-left percentage labels were on by default, but due to UX decisions, they are now\nonly enabled on mobile devices. If you want to bring back the old behavior, there is the flag\n",(0,o.jsx)(n.a,{href:"./configuration/basic#dashdot_always_show_percentages",children:(0,o.jsx)(n.code,{children:"DASHDOT_ALWAYS_SHOW_PERCENTAGES"})})," for that."]}),"\n",(0,o.jsx)(n.h3,{id:"the-network-information-can-not-be-read-correctly---what-should-i-do",children:"The network information can not be read correctly - what should I do?"}),"\n",(0,o.jsxs)(n.p,{children:["First of all, if you are running docker, make sure that you are passing the ",(0,o.jsx)(n.code,{children:"-v /:/mnt/host:ro"}),"\nbind mount. If you have done so, and it still does not work, please do the following:"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Check your logs for a message like ",(0,o.jsx)(n.code,{children:'Using network interface "xxxxx"'}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Is this the correct network interface?"})," If not, please find out your default interface, and pass the name\nmanually, using the ",(0,o.jsx)(n.a,{href:"./configuration/network#dashdot_use_network_interface",children:(0,o.jsx)(n.code,{children:"DASHDOT_USE_NETWORK_INTERFACE"})})," flag."]}),"\n",(0,o.jsxs)(n.p,{children:["If it ",(0,o.jsx)(n.strong,{children:"is"})," the correct network interface, please open a GitHub issue with the relevant log outputs and information."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Is there no message like this?"})," If so, please check your log for any errors and open a new issue on GitHub with\nthat information."]}),"\n",(0,o.jsx)(n.h3,{id:"can-you-use-dash-without-mounting-the-whole-host-drive",children:"Can you use dash. without mounting the whole host drive?"}),"\n",(0,o.jsx)(n.p,{children:"Yes, you can - the mount is only needed to make it easier for the user, but you can\nmanually mount the relevant parts into the container as well."}),"\n",(0,o.jsx)(n.p,{children:"For this you need to use the following volume mounts:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/etc/os-release:/mnt/host/etc/os-release:ro"})," for reading the OS version of the host"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/proc/1/ns/net:/mnt/host/proc/1/ns/net:ro"})," for reading the Network usage of the host","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["alternatively, you can just bind the container to the host network using ",(0,o.jsx)(n.code,{children:"--net=host"}),",\nbut this is not recommended, because it messes with Dockers internal networking"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/mnt:/mnt/host/mnt:ro"})," and ",(0,o.jsx)(n.code,{children:"/media:/mnt/host/media:ro"})," for reading the usage stats of all drives","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["keep in mind that this covers only the most basic mount paths of linux. if your system uses other mount paths,\nyou will need to manually add them to the list of volumes, following the pattern ",(0,o.jsx)(n.code,{children:"/xxx:/mnt/host/xxx:ro"}),". To\ncheck where all your mounts are on your system, you can use the command ",(0,o.jsx)(n.code,{children:"df"})," and run it in a shell."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"answer-not-found",children:"Answer not found?"}),"\n",(0,o.jsxs)(n.p,{children:["If you think there is no answer for your question and it is actually a bug, or a missing feature,\nplease create a ",(0,o.jsx)(n.a,{href:"https://github.com/MauriceNino/dashdot/issues",children:"new Issue on GitHub"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If you need further help, please ",(0,o.jsx)(n.a,{href:"https://discord.gg/3teHFBNQ9W",children:"join our Discord"})," - we are happy to answer any questions."]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("iframe",{src:"https://discord.com/widget?id=986251291577688064&theme=dark",width:"400",height:"300",allowtransparency:"true",frameborder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(7294);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);