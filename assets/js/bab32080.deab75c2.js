"use strict";(self.webpackChunkdevops_training=self.webpackChunkdevops_training||[]).push([[974],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(o),h=a,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return o?n.createElement(m,i(i({ref:t},l),{},{components:o})):n.createElement(m,i({ref:t},l))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7288:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=o(7462),a=(o(7294),o(3905));const r={sidebar_position:5.1},i="Documentation as Code",s={unversionedId:"concepts/documentation-as-code",id:"concepts/documentation-as-code",title:"Documentation as Code",description:"Documentation as Code (Docs-as-Code) is quite to my heart. Especially as I'm not",source:"@site/docs/concepts/documentation-as-code.mdx",sourceDirName:"concepts",slug:"/concepts/documentation-as-code",permalink:"/docs/concepts/documentation-as-code",draft:!1,editUrl:"https://github.com/elft3r/devops-training/tree/main/docs/concepts/documentation-as-code.mdx",tags:[],version:"current",sidebarPosition:5.1,frontMatter:{sidebar_position:5.1},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/docs/concepts/"},next:{title:"Infrastructure as Code",permalink:"/docs/concepts/infrastructure-as-code"}},c={},u=[{value:"Tools",id:"tools",level:2}],l={toc:u};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"documentation-as-code"},"Documentation as Code"),(0,a.kt)("p",null,"Documentation as Code (Docs-as-Code) is quite to my heart. Especially as I'm not\nso good at it, and something I have been struggling for a long time and still\nam. But it's one of the things that is so important but also disliked so much by\na lot of technical people. And the sad thing is, that the technical people are\nthe ones that need to transfer the knowledge. They don't have to write the\ndocumentation, but they are the ones who know how things work and why they are\nbuilt the way they are. So they could have come up with the concept of\nDocumentation as Code (Docs-as-Code) much earlier. But it looks like it's one of\nthese things where first all the pieces have to fall into place before it keeps\non getting traction. Especially, as developers like to pride themselves on the\nfact, that they automate repeating tasks."),(0,a.kt)("p",null,"But what is Docs-as-Code? Actually, the website that you are looking at\ncurrently is built using one concept of Documentation as Code. It is built using\n",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus"),". It's a static site generator, that uses\nMarkdown and React. Out of these, it builds a website that can be deployed and\nhosted by a lot of providers."),(0,a.kt)("p",null,"There are many advantages of this concept. Some of them I found on the ",(0,a.kt)("a",{parentName:"p",href:"https://www.writethedocs.org/guide/docs-as-code/"},"Write\nthe Docs")," page:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using tools and processes that developers are already familiar with"),(0,a.kt)("li",{parentName:"ul"},"Keep up with the changes and reduce the amount of outdated documentation"),(0,a.kt)("li",{parentName:"ul"},"Automatically extract the information developers put in code"),(0,a.kt)("li",{parentName:"ul"},"Let Developers write the first draft")),(0,a.kt)("p",null,"One of the biggest struggles, I came across and faced myself, is how to ensure\nthat the documentation that you write keeps up to date with the changes you make\nin the code or infrastructure. Who hasn't been bitten by an outdated comment, or\npiece of documentation?"),(0,a.kt)("p",null,"So what better idea to use code to extract the information with ever change that\nyou make to your code? Luckily there is an increasing amount of tools that help\nyou enhance documentation, by extracting information out of the code or create\ndiagrams based on the information in the code."),(0,a.kt)("p",null,"If you want to learn more about this concept, you can head over to the page from\nAnne Gentle: ",(0,a.kt)("a",{parentName:"p",href:"https://www.docslikecode.com"},"Docs like Code"),". There you can find\na lot of resources to dive deep into the topic of documentation as code."),(0,a.kt)("h2",{id:"tools"},"Tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/pistazie/cdk-dia"},"CDK-Dia - Automated diagrams for CDK infrastructure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/DrFaust92/terraform-provider-confluence"},"Terraform Provider for Confluence"))))}d.isMDXComponent=!0}}]);