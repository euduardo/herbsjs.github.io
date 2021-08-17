"use strict";(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[741],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},75271:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],s={id:"motivation",title:"Motivation",sidebar_label:"Motivation",slug:"/introduction/motivation",custom_edit_url:null},l=void 0,c={unversionedId:"introduction/motivation",id:"introduction/motivation",isDocsHomePage:!1,title:"Motivation",description:"The goal of software development has always been to have happy customers through amazing features, working accurately and delivered as quickly as possible. We know that impose clear challenges for developers.",source:"@site/docs/introduction/motivators.md",sourceDirName:"introduction",slug:"/introduction/motivation",permalink:"/docs/introduction/motivation",editUrl:null,version:"current",frontMatter:{id:"motivation",title:"Motivation",sidebar_label:"Motivation",slug:"/introduction/motivation",custom_edit_url:null},sidebar:"sidebar",previous:{title:"What's Herbs?",permalink:"/docs/introduction/whats-herbs"},next:{title:"Architecture guidelines",permalink:"/docs/introduction/architecture-guidelines"}},u=[{value:"Domain-first",id:"domain-first",children:[]},{value:"Code Intention",id:"code-intention",children:[]},{value:"&quot;Enterprise Features&quot; Out Of The Box",id:"enterprise-features-out-of-the-box",children:[]},{value:"Inspirations",id:"inspirations",children:[]},{value:"History",id:"history",children:[]}],d={toc:u};function p(e){var t=e.components,s=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The goal of software development has always been to have happy customers through amazing features, working accurately and delivered as quickly as possible. We know that impose clear challenges for developers. "),(0,r.kt)("p",null,"These are the major pain points in software development that Herbs tries to help solve:"),(0,r.kt)("h2",{id:"domain-first"},"Domain-first"),(0,r.kt)("p",null,"A great motivation for Herbs came to realize the huge amount of software that we write around the domain core of an application to make it work properly. It is commonplace to see layers of an application that basically share the same properties and knowledge of the core like entities, fields types, etc but changes to your domain do not reflect the rest of your code."),(0,r.kt)("p",null,"A very simple and direct manifestation of this is when it is necessary to add a new field to an entity on your domain. That means also changing the entity repository, the GraphQL type or a REST endpoint, changing the documentation, etc. This is because current libraries are not prepared to create a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Single_source_of_truth#SOLID_&_Source_Code"},"single source of truth")," for their domain."),(0,r.kt)("p",null,"Because of that, a lot of effort is put into writing low-value codes, which are not really related to the business domain."),(0,r.kt)("p",null,"We believe that we can do much better. Developers should put a lot of their efforts into writing high-impact code, focused on their business domain. For the rest, it should be generated automatically for you."),(0,r.kt)("h2",{id:"code-intention"},"Code Intention"),(0,r.kt)("p",null,"Building software that evolves is difficult, especially for those who are tasked with changing the current version to accommodate the new requirements."),(0,r.kt)("p",null,"One of the main reasons why it is difficult is because the code is a manifestation of an initial intention, but that intention is rarely captured in the code. This makes reading code basically a decoding task."),(0,r.kt)("p",null,"As your business rules become more complex, the task of reading and understanding the code becomes exponentially more difficult, thus hampering the evolution of the application."),(0,r.kt)("p",null,"So, if you are building a project that is a team effort and should be up and running in the long run, being able to keep your code understandable to the next developer is essential."),(0,r.kt)("p",null,"With Herbs we try to bring those initial intentions closer to the code. Thus, the next developer who reading the code will have a much better experience when changing and evolving your application."),(0,r.kt)("h2",{id:"enterprise-features-out-of-the-box"},'"Enterprise Features" Out Of The Box'),(0,r.kt)("p",null,'In business domains it is common the need for authorization and auditing. However, these features are treated as "enterprise" features, which usually requires an investment from the developer to incorporate these features into the application.'),(0,r.kt)("p",null,"This investment should not be necessary if your domain is aware of the actions taken by users."),(0,r.kt)("p",null,"Herbs brings these features out of the box because we simply believe they should be there, even for simple applications. That means having robust applications from the beginning with very low investment."),(0,r.kt)("h2",{id:"inspirations"},"Inspirations"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"herbsJS",src:n(44710).Z})),(0,r.kt)("p",null,"Well design libraries borrow from the past. Herbs uses the understanding gained by major thinkers in software engineering in order to innovate."),(0,r.kt)("p",null,"Clean Architecture was created by Robert C. Martin and promoted in his book ",(0,r.kt)("a",{parentName:"p",href:"https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"},"Clean Architecture: A Craftsman\u2019s Guide to Software Structure"),". Like other software design philosophies, Clean Architecture tries to provide a methodology to be used in coding, in order to facilitate code development, allow for better maintenance, updating and less dependencies. An important goal of Clean Architecture is to provide developers with a way to organize code in a way that encapsulates business logic, but keeps it separate from the delivery mechanism."),(0,r.kt)("p",null,"Similar to Clean Architecture, the concept of Domain-driven design (DDD) was initially introduced and made popular by programmer Eric Evans in his 2004 book, ",(0,r.kt)("a",{parentName:"p",href:"https://books.google.com/books?id=hHBf4YxMnWMC&redir_esc=y"},"Domain-Driven Design: Tackling Complexity in the Heart of Software"),", domain-driven design is the expansion upon and application of the domain concept, as it applies to the development of software. It aims to ease the creation of complex applications by connecting the related pieces of the software into an ever-evolving model. "),(0,r.kt)("p",null,"Even though it is not necessary to read these books to use Herbs, reading and understanding the concepts presented there will help you to understand the principles used here and, in addition, they are highly recommended for the development of a software developer."),(0,r.kt)("p",null,"Of course, libraries from different ecosystems have been a great source of inspiration. Successes and mistakes of these efforts were taken into account: ",(0,r.kt)("a",{parentName:"p",href:"https://rubyonrails.org/"},"Rails"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.djangoproject.com"},"Django"),", ",(0,r.kt)("a",{parentName:"p",href:"https://trailblazer.to/"},"Trailblazer"),", ",(0,r.kt)("a",{parentName:"p",href:"https://hanamirb.org/"},"Hanami"),", ",(0,r.kt)("a",{parentName:"p",href:"https://cucumber.io/"},"Cucumber")," and many others. "),(0,r.kt)("h2",{id:"history"},"History"),(0,r.kt)("p",null,"Herbs was created in 2019 at ",(0,r.kt)("a",{parentName:"p",href:"https://vortx.com.br/"},"V\xf3rtx"),", a fintech with exponential growth, a small team and a huge list of demands."),(0,r.kt)("p",null,"Their architecture is based on microservices and required the creation of several services in a short period of time. As a financial institution, it was necessary for these services to be delivered with a high level of quality, observability and maintainability. It was in this scenario that Herbs was born."),(0,r.kt)("p",null,"Since then, Herbs has been used in production in more than 15 microservices there, became a open source project and is maintained by several people inside and outside V\xf3rtx."))}p.isMDXComponent=!0},44710:function(e,t,n){t.Z=n.p+"assets/images/herbsjs_clean_architecture-0aa8c7d4e0c35537ad601223c5fa6fd8.png"}}]);