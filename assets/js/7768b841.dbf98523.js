"use strict";(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[5959],{36742:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(63366),i=n(67294),o=n(73727),a=n(52263),u=n(13919),s=n(10412),c=(0,i.createContext)({collectLink:function(){}}),l=n(44996),f=n(18780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var t,n,v=e.isNavLink,h=e.to,b=e.href,m=e.activeClassName,p=e.isActive,g=e["data-noBrokenLinkCheck"],Z=e.autoAddBaseUrl,E=void 0===Z||Z,k=(0,r.Z)(e,d),w=(0,a.Z)().siteConfig,C=w.trailingSlash,_=w.baseUrl,y=(0,l.C)().withBaseUrl,j=(0,i.useContext)(c),N=h||b,U=(0,u.Z)(N),O=null==N?void 0:N.replace("pathname://",""),B=void 0!==O?(n=O,E&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0;B&&U&&(B=(0,f.applyTrailingSlash)(B,{trailingSlash:C,baseUrl:_}));var L,S=(0,i.useRef)(!1),A=v?o.OL:o.rU,x=s.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!x&&U&&null!=B&&window.docusaurus.prefetch(B),function(){x&&L&&L.disconnect()}}),[B,x,U]);var P=null!==(t=null==B?void 0:B.startsWith("#"))&&void 0!==t&&t,W=!B||!U||P;return B&&U&&!P&&!g&&j.collectLink(B),W?i.createElement("a",Object.assign({href:B},N&&!U&&{target:"_blank",rel:"noopener noreferrer"},k)):i.createElement(A,Object.assign({},k,{onMouseEnter:function(){S.current||null==B||(window.docusaurus.preload(B),S.current=!0)},innerRef:function(e){var t,n;x&&e&&U&&(t=e,n=function(){null!=B&&window.docusaurus.prefetch(B)},(L=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(L.unobserve(t),L.disconnect(),n())}))}))).observe(t))},to:B||""},v&&{isActive:p,activeClassName:m}))}},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},44996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(52263),i=n(13919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,u=void 0!==a&&a,s=o.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+l:l}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},72389:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),i=n(9913);function o(){return(0,r.useContext)(i._)}},82924:function(e,t,n){var r=n(67294).createContext(void 0);t.Z=r},85350:function(e,t,n){var r=n(67294),i=n(82924);t.Z=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,o=e.split(/[#?]/)[0],a="/"===o||o===r?o:(i=o,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(o,a)}},18780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var o=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},29964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},17478:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(67294),i=n(86010),o="heroBanner_39TN",a="getStarted_17Kk",u="buttons_2mX_",s="versionInfo_2dB7",c=n(36742),l=n(44996),f=n(67472),d=n(91262),v=n(85350),h=function(){return r.createElement(d.Z,{fallback:r.createElement("img",{alt:"herbsjs logo",src:"img/logo-herbsjs.png"})},(function(){var e=(0,v.Z)().isDarkTheme?"img/logo-herbsjs-douradoebranco.png":"img/logo-herbsjs.png",t=(0,l.Z)(e);return r.createElement("img",{src:t})}))},b=function(e){var t=e.version;return r.createElement("header",{className:(0,i.Z)("hero",o)},r.createElement("div",{className:"container"},r.createElement(h,null),r.createElement("h4",null,"UNLOCK YOUR DOMAIN"),r.createElement("div",{className:u},r.createElement(c.Z,{className:(0,i.Z)("button button--outline button--primary button--lg",a),to:(0,l.Z)("docs/")},"Get started")," ",r.createElement(c.Z,{className:(0,i.Z)("button button--primary button--lg",a),to:"https://github.com/herbsjs"},r.createElement(f.Z,{fontSize:"small"})," Start")),r.createElement("div",{className:s},t&&r.createElement("p",null,"Last stable version ",r.createElement("a",{href:"https://github.com/herbsjs/herbs/releases/tag/v"+t,rel:"noopener noreferrer",target:"_blank"}," ",t," ")))))}},86010:function(e,t,n){function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);