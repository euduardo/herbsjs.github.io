"use strict";(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[2011],{36742:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(63366),i=t(67294),a=t(73727),o=t(52263),u=t(13919),s=t(10412),c=(0,i.createContext)({collectLink:function(){}}),l=t(44996),f=t(18780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var n,t,v=e.isNavLink,h=e.to,m=e.href,p=e.activeClassName,b=e.isActive,g=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,k=void 0===w||w,C=(0,r.Z)(e,d),y=(0,o.Z)().siteConfig,_=y.trailingSlash,E=y.baseUrl,j=(0,l.C)().withBaseUrl,U=(0,i.useContext)(c),Z=h||m,L=(0,u.Z)(Z),O=null==Z?void 0:Z.replace("pathname://",""),N=void 0!==O?(t=O,k&&function(e){return e.startsWith("/")}(t)?j(t):t):void 0;N&&L&&(N=(0,f.applyTrailingSlash)(N,{trailingSlash:_,baseUrl:E}));var B,W=(0,i.useRef)(!1),S=v?a.OL:a.rU,A=s.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!A&&L&&null!=N&&window.docusaurus.prefetch(N),function(){A&&B&&B.disconnect()}}),[N,A,L]);var I=null!==(n=null==N?void 0:N.startsWith("#"))&&void 0!==n&&n,P=!N||!L||I;return N&&L&&!I&&!g&&U.collectLink(N),P?i.createElement("a",Object.assign({href:N},Z&&!L&&{target:"_blank",rel:"noopener noreferrer"},C)):i.createElement(S,Object.assign({},C,{onMouseEnter:function(){W.current||null==N||(window.docusaurus.preload(N),W.current=!0)},innerRef:function(e){var n,t;A&&e&&L&&(n=e,t=function(){null!=N&&window.docusaurus.prefetch(N)},(B=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.unobserve(n),B.disconnect(),t())}))}))).observe(n))},to:N||""},v&&{isActive:b,activeClassName:p}))}},13919:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return i}})},44996:function(e,n,t){t.d(n,{C:function(){return a},Z:function(){return o}});var r=t(52263),i=t(13919);function a(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,u=void 0!==o&&o,s=a.absolute,c=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,i.b)(t))return t;if(u)return n+t;var l=t.startsWith(n)?t:n+t.replace(/^\//,"");return c?e+l:l}(a,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},8802:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,t?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},18780:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var i=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=t(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(a).default}})},29964:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},42754:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});var r=t(67294),i="container_3r7W",a="animation_1FDf",o="details_jKNi",u=t(44996),s=t(36742);function c(){return r.createElement(r.Fragment,null,r.createElement("div",{className:i},r.createElement("section",{className:o},r.createElement("h3",null,"Command Line Interface"),r.createElement("p",null,"The Herbs CLI makes it easy to create and manage your herbs project directly from the terminal. CLI is essential to improve development time and is designed to get you working quickly with herbs, with an emphasis on your domain.")),r.createElement("section",{className:a},r.createElement(s.Z,{to:(0,u.Z)("docs/tutorial/new-project#with-herbs-cli")},r.createElement("img",{src:(0,u.Z)("/assets/herbs-new.gif")})))))}}}]);