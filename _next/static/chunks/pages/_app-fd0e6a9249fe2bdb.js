(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{9477:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(5893),a=r(7294);t.default=function({html:e,height:t=null,width:r=null,children:o,dataNtpc:i=""}){return(0,a.useEffect)(()=>{i&&performance.mark("mark_feature_usage",{detail:{feature:`next-third-parties-${i}`}})},[i]),(0,n.jsxs)(n.Fragment,{children:[o,e?(0,n.jsx)("div",{style:{height:null!=t?`${t}px`:"auto",width:null!=r?`${r}px`:"auto"},"data-ntpc":i,dangerouslySetInnerHTML:{__html:e}}):null]})}},7834:function(e,t,r){"use strict";let n;var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let o=r(5893),i=r(7294),l=a(r(4298));t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:r="dataLayer"}=e;return void 0===n&&(n=r),(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:`
          window['${r}'] = window['${r}'] || [];
          function gtag(){window['${r}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}');`}}),(0,o.jsx)(l.default,{id:"_next-ga",src:`https://www.googletagmanager.com/gtag/js?id=${t}`})]})},t.sendGAEvent=function(...e){if(void 0===n){console.warn("@next/third-parties: GA has not been initialized");return}window[n]?window[n].push(arguments):console.warn(`@next/third-parties: GA dataLayer ${n} does not exist`)}},3632:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let a=r(5893),o=r(6257),i=n(r(9477));t.default=function(e){let{apiKey:t,...r}=e,n={...r,key:t},{html:l}=(0,o.GoogleMapsEmbed)(n);return(0,a.jsx)(i.default,{height:n.height||null,width:n.width||null,html:l,dataNtpc:"GoogleMapsEmbed"})}},674:function(e,t,r){"use strict";let n;var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let o=r(5893),i=r(7294),l=a(r(4298));t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:r="dataLayer",auth:a,preview:s,dataLayer:u}=e;void 0===n&&(n=r);let d="dataLayer"!==r?`&l=${r}`:"",c=a?`&gtm_auth=${a}`:"",f=s?`&gtm_preview=${s}&gtm_cookies_win=x`:"";return(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:`
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${u?`w[l].push(${JSON.stringify(u)})`:""}
      })(window,'${r}');`}}),(0,o.jsx)(l.default,{id:"_next-gtm","data-ntpc":"GTM",src:`https://www.googletagmanager.com/gtm.js?id=${t}${d}${c}${f}`})]})},t.sendGTMEvent=e=>{if(void 0===n){console.warn("@next/third-parties: GTM has not been initialized");return}window[n]?window[n].push(e):console.warn(`@next/third-parties: GTM dataLayer ${n} does not exist`)}},9692:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=t.sendGTMEvent=t.GoogleTagManager=t.YouTubeEmbed=t.GoogleMapsEmbed=void 0;var a=r(3632);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return n(a).default}});var o=r(1494);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return n(o).default}});var i=r(674);Object.defineProperty(t,"GoogleTagManager",{enumerable:!0,get:function(){return i.GoogleTagManager}}),Object.defineProperty(t,"sendGTMEvent",{enumerable:!0,get:function(){return i.sendGTMEvent}});var l=r(7834);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return l.GoogleAnalytics}}),Object.defineProperty(t,"sendGAEvent",{enumerable:!0,get:function(){return l.sendGAEvent}})},1494:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let a=r(5893),o=n(r(4298)),i=r(6257),l=n(r(9477)),s={server:"beforeInteractive",client:"afterInteractive",idle:"lazyOnload",worker:"worker"};t.default=function(e){let{html:t,scripts:r,stylesheets:n}=(0,i.YouTubeEmbed)(e);return(0,a.jsx)(l.default,{height:e.height||null,width:e.width||null,html:t,dataNtpc:"YouTubeEmbed",children:null==r?void 0:r.map(e=>(0,a.jsx)(o.default,{src:e.url,strategy:s[e.strategy],stylesheets:n},e.url))})}},1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3414)}])},3414:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=r(5695),o=r.n(a);r(2605);var i=r(9692);t.default=e=>{let{Component:t,pageProps:r}=e;return(0,n.jsxs)("main",{className:o().className,children:[(0,n.jsx)(t,{...r}),(0,n.jsx)(i.GoogleAnalytics,{gaId:"G-NQ78ZVKXEN"})]})}},2605:function(){},5695:function(e){e.exports={style:{fontFamily:"'__polySans_de6e4f', '__polySans_Fallback_de6e4f'"},className:"__className_de6e4f"}},4298:function(e,t,r){e.exports=r(2892)},6257:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=t.GoogleMapsEmbed=t.GoogleAnalytics=void 0;var n=r(3494);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return n.GoogleAnalytics}});var a=r(4248);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return a.GoogleMapsEmbed}});var o=r(2239);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return o.YouTubeEmbed}})},3494:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=void 0;let o=a(r(9426)),i=r(7058);t.GoogleAnalytics=e=>{var t=n(e,[]);return(0,i.formatData)(o.default,t)}},4248:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleMapsEmbed=void 0;let o=a(r(7395)),i=r(7058);t.GoogleMapsEmbed=e=>{var t=n(e,[]);return(0,i.formatData)(o.default,t)}},2239:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=void 0;let o=a(r(8420)),i=r(7058);t.YouTubeEmbed=e=>{var t=n(e,[]);return(0,i.formatData)(o.default,t)}},7058:function(e,t){"use strict";function r(e,t,r=!1){return t?Object.keys(e).filter(e=>r?!t.includes(e):t.includes(e)).reduce((t,r)=>(t[r]=e[r],t),{}):{}}function n(e,t,r,n){let a=n&&Object.keys(n).length>0?new URL(Object.values(n)[0],e):new URL(e);return t&&r&&t.forEach(e=>{r[e]&&a.searchParams.set(e,r[e])}),a.toString()}function a(e,t,r,a,o){var i;if(!t)return`<${e}></${e}>`;let l=(null===(i=t.src)||void 0===i?void 0:i.url)?Object.assign(Object.assign({},t),{src:n(t.src.url,t.src.params,a,o)}):t,s=Object.keys(Object.assign(Object.assign({},l),r)).reduce((e,t)=>{let n=null==r?void 0:r[t],a=l[t],o=null!=n?n:a,i=!0===o?t:`${t}="${o}"`;return o?e+` ${i}`:e},"");return`<${e}${s}></${e}>`}Object.defineProperty(t,"__esModule",{value:!0}),t.formatData=t.createHtml=t.formatUrl=void 0,t.formatUrl=n,t.createHtml=a,t.formatData=function(e,t){var o,i,l,s,u;let d=r(t,null===(o=e.scripts)||void 0===o?void 0:o.reduce((e,t)=>[...e,...Array.isArray(t.params)?t.params:[]],[])),c=r(t,null===(l=null===(i=e.html)||void 0===i?void 0:i.attributes.src)||void 0===l?void 0:l.params),f=r(t,[null===(u=null===(s=e.html)||void 0===s?void 0:s.attributes.src)||void 0===u?void 0:u.slugParam]),g=r(t,[...Object.keys(d),...Object.keys(c),...Object.keys(f)],!0);return Object.assign(Object.assign({},e),{html:e.html?a(e.html.element,e.html.attributes,g,c,f):null,scripts:e.scripts?e.scripts.map(e=>Object.assign(Object.assign({},e),{url:n(e.url,e.params,d)})):null})}},9426:function(e){"use strict";e.exports=JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}')},7395:function(e){"use strict";e.exports=JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}')},8420:function(e){"use strict";e.exports=JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}')}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[9774,179],function(){return t(1118),t(9090)}),_N_E=e.O()}]);