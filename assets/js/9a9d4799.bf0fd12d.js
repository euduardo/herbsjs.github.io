"use strict";(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[773],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},16414:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"create-entity",title:"2. Creating Entities",sidebar_label:"2. Creating Entities",slug:"/tutorial/create-entity"},s=void 0,u={unversionedId:"tutorial/create-entity",id:"tutorial/create-entity",isDocsHomePage:!1,title:"2. Creating Entities",description:"Introduction to the Entity concept",source:"@site/docs/tutorial/create-entity.md",sourceDirName:"tutorial",slug:"/tutorial/create-entity",permalink:"/docs/tutorial/create-entity",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/tutorial/create-entity.md",version:"current",frontMatter:{id:"create-entity",title:"2. Creating Entities",sidebar_label:"2. Creating Entities",slug:"/tutorial/create-entity"},sidebar:"sidebar",previous:{title:"1. New Project",permalink:"/docs/tutorial/new-project"},next:{title:"3. Generating Repositories",permalink:"/docs/tutorial/repository"}},c=[{value:"Introduction to the Entity concept",id:"introduction-to-the-entity-concept",children:[]},{value:"User Entity",id:"user-entity",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction-to-the-entity-concept"},"Introduction to the Entity concept"),(0,a.kt)("p",null,"Entities are the natural place for abstractions from your domain. Usually big things like User, Order, Contract Agreement, Shopping Cart, Schedule, etc are entities."),(0,a.kt)("p",null,"Entities have properties (fields), actions (methods) and often is uniquely identified by an ID."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/entity/getting-started#whats-an-entity"},"Getting Started - What's and Entity")," to know more.")),(0,a.kt)("p",null,"For this project the most basic entity is the User. The CLI generates it out-of-the-box, so let's understand how it works:"),(0,a.kt)("h2",{id:"user-entity"},"User Entity"),(0,a.kt)("h4",{id:"entity-name"},"Entity name"),(0,a.kt)("p",null,"First, let's understand how is set the name for the entity:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// src/domain/entities/user.js\nconst { entity, field } = require('@herbsjs/herbs')\n\n// The entity name is first argument of `entity()`\nconst User = entity('User', {})\n")),(0,a.kt)("h4",{id:"entity-fields"},"Entity fields"),(0,a.kt)("p",null,"Now, we're going to see the fields for the User entity:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"id"),": The unique identifier for the user."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"nickname"),': The nickname for the user like "user123".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"password"),": The user's access password.")),(0,a.kt)("p",null,"Within the entity fields properties, we have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name"),(0,a.kt)("li",{parentName:"ul"},"type"),(0,a.kt)("li",{parentName:"ul"},"default value (optionally)"),(0,a.kt)("li",{parentName:"ul"},"validation (optionally)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// src/domain/entities/user.js\nconst { entity, field } = require('@herbsjs/herbs')\n\n// The second argument is an object with the fields.\nconst User = entity('User', {\n    // The key is the field name.\n    // The value is the object type of\n    // the field using the `field()`.\n\n    id: field(Number),\n\n    // Both the fields \"nickname\" and \"password\" are texts, therefore we are using `String`.\n    nickname: field(String),\n    password: field(String),\n})\n")),(0,a.kt)("p",null,"The types of fields are Scalar types, there are some of them:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Number"),": double-precision 64-bit binary format IEEE 754 value"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"String"),": a UTF\u201016 character sequence"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Boolean"),": true or false"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Date"),": represents a single moment in time in a platform-independent format.")),(0,a.kt)("h4",{id:"entity-fields-default-value"},"Entity fields default value"),(0,a.kt)("p",null,"The CLI gives you the base, but you can go further."),(0,a.kt)("p",null,"May be interesting to have default values for some fields."),(0,a.kt)("p",null,"Just for exemple, imagine that we have a field ",(0,a.kt)("inlineCode",{parentName:"p"},"score")," to store some kind of points to the user, we want this to be a number and to start with 0 as default value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// src/domain/entities/user.js\nconst { entity, field } = require('@herbsjs/herbs')\n\nconst User = entity('User', {\n    id: field(Number),\n    nickname: field(String),\n    password: field(String),\n\n    // Here we set the field. After the type we also pass an optional object with the key default as 0.\n    score: field(Number, {\n        default: 0\n    }),\n})\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Learn more about ",(0,a.kt)("a",{parentName:"p",href:"/docs/entity/features#default-value"},"default values"),".")),(0,a.kt)("h4",{id:"entity-fields-validation"},"Entity fields validation"),(0,a.kt)("p",null,"Once we have the fields set, we may want to implement validation to them"),(0,a.kt)("p",null,"The validation is passed as an ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," and it can have different kinds of parameters, such as presence, length and numericality. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// src/domain/entities/user.js\nconst { entity, field } = require('@herbsjs/herbs')\n\nconst User = entity('User', {\n    id: field(Number, {\n        validation: {\n            // The field MUST be present\n            presence: true,\n            numericality: {\n                // Must be greater than 0\n                greaterThan: 0,\n                // Cannot be a float\n                onlyInteger: true\n            }\n        }\n    }),\n    nickname: field(String, {\n        validation: {\n            presence: true,\n            // Here, the nickname MUST have 3 letters at least\n            length: { minimum: 3 },\n        }\n    }),\n    password: field(String),\n})\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Learn more about ",(0,a.kt)("a",{parentName:"p",href:"/docs/entity/validation"},"validations with Herbs"),".")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Feel free to implement more fields and add different kinds of validation to it."),(0,a.kt)("p",null,"Now that we have the User entity, we are ready to go and use it, let's move on to Use Cases."))}p.isMDXComponent=!0}}]);