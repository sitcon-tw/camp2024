(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2974:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3578)}])},5637:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return u}});let o="refresh",l="navigate",a="restore",i="server-patch",s="prefetch",c="fast-refresh",u="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4907:function(e,t,n){"use strict";function getDomainLocale(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),n(5199),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6097:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let r=n(1351),o=r._(n(959)),l=n(8538),a=n(1479),i=n(4472),s=n(5462),c=n(6009),u=n(6940),f=n(8338),d=n(6142),p=n(4907),m=n(3499),g=n(5637),h=new Set;function prefetch(e,t,n,r,o,l){if(!l&&!(0,a.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(h.has(l))return;h.add(l)}let i=l?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(i).catch(e=>{})}function formatStringOrUrl(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let x=o.default.forwardRef(function(e,t){let n,r;let{href:i,as:h,children:x,prefetch:v=null,passHref:b,replace:_,shallow:j,scroll:y,locale:N,onClick:w,onMouseEnter:k,onTouchStart:C,legacyBehavior:O=!1,...T}=e;n=x,O&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let I=o.default.useContext(u.RouterContext),E=o.default.useContext(f.AppRouterContext),S=null!=I?I:E,P=!I,M=!1!==v,A=null===v?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:R,as:L}=o.default.useMemo(()=>{if(!I){let e=formatStringOrUrl(i);return{href:e,as:h?formatStringOrUrl(h):e}}let[e,t]=(0,l.resolveHref)(I,i,!0);return{href:e,as:h?(0,l.resolveHref)(I,h):t||e}},[I,i,h]),F=o.default.useRef(R),U=o.default.useRef(L);O&&(r=o.default.Children.only(n));let H=O?r&&"object"==typeof r&&r.ref:t,[D,K,V]=(0,d.useIntersection)({rootMargin:"200px"}),z=o.default.useCallback(e=>{(U.current!==L||F.current!==R)&&(V(),U.current=L,F.current=R),D(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[L,H,R,V,D]);o.default.useEffect(()=>{S&&K&&M&&prefetch(S,R,L,{locale:N},{kind:A},P)},[L,R,K,N,M,null==I?void 0:I.locale,S,P,A]);let B={ref:z,onClick(e){O||"function"!=typeof w||w(e),O&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,n,r,l,i,s,c,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,a.isLocalURL)(n)))return;e.preventDefault();let navigate=()=>{let e=null==s||s;"beforePopState"in t?t[l?"replace":"push"](n,r,{shallow:i,locale:c,scroll:e}):t[l?"replace":"push"](r||n,{forceOptimisticNavigation:!f,scroll:e})};u?o.default.startTransition(navigate):navigate()}(e,S,R,L,_,j,y,N,P,M)},onMouseEnter(e){O||"function"!=typeof k||k(e),O&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),S&&(M||!P)&&prefetch(S,R,L,{locale:N,priority:!0,bypassPrefetchedCheck:!0},{kind:A},P)},onTouchStart(e){O||"function"!=typeof C||C(e),O&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),S&&(M||!P)&&prefetch(S,R,L,{locale:N,priority:!0,bypassPrefetchedCheck:!0},{kind:A},P)}};if((0,s.isAbsoluteUrl)(L))B.href=L;else if(!O||b||"a"===r.type&&!("href"in r.props)){let e=void 0!==N?N:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,p.getDomainLocale)(L,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);B.href=t||(0,m.addBasePath)((0,c.addLocale)(L,e,null==I?void 0:I.defaultLocale))}return O?o.default.cloneElement(r,B):o.default.createElement("a",{...T,...B},n)}),v=x;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let r=n(959),o=n(1197),l="function"==typeof IntersectionObserver,a=new Map,i=[];function useIntersection(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!l,[u,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(l){if(c||u)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},i.push(n),a.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!u){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,u,d.current]);let m=(0,r.useCallback)(()=>{f(!1)},[]);return[p,u,m]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3578:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return App}});var r=n(1527),o=n(2868),l=n.n(o);n(6071);var a=n(9858),i=n.n(a),s=n(8440),c=n.n(s),u=n(959),f=n(6245),d=n.n(f);function NavItem(e){let{href:t,children:n,setIsNavOpen:o}=e;return(0,r.jsx)(d(),{href:t,className:"text-white hover:opacity-80 font-medium text-lg border-b-[1px] border-blue-50 py-4 lg:border-0",onClick:()=>o(!1),scroll:!t.startsWith("/#"),children:n})}function Nav(){let[e,t]=(0,u.useState)(!1),n=[{href:"/coc",text:"行為準則"},{href:"/teams",text:"籌備團隊"}];return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"fixed top-0 left-0 right-0 z-[999999999999999]",children:[(0,r.jsxs)("nav",{className:"bg-opacity-80 bg-gradient-to-b from-[#060A11] to-[#0C142020] py-3 px-6 lg:py-2 lg:px-10 flex items-center justify-between shadow-2xl transition-all h-[4rem] lg:h-auto lg:bg-[linear-gradient(90deg,rgba(12,20,32,1)_0%,rgba(50,84,134,1)_60%,rgba(12,20,32,1)_100%)]",children:[(0,r.jsx)(d(),{href:"/",className:"font-bold",children:(0,r.jsx)("img",{src:"/2024/icon/logo.svg",className:"h-10",alt:"Logo"})}),(0,r.jsxs)("div",{className:"flex flex-row gap-4",children:[(0,r.jsx)("div",{className:"hidden mr-3 space-x-4 text-right lg:flex",children:n.map((e,n)=>(0,r.jsx)(NavItem,{href:e.href,setIsNavOpen:t,children:e.text},n))}),(0,r.jsx)("div",{className:"flex-1 my-auto",children:(0,r.jsx)("div",{className:"flex mx-auto my-auto",children:(0,r.jsx)("a",{className:"bg-gradient-to-b from-[#78C2FF] to-[#9C7DFF] rounded-full p-1 cursor-not-allowed",target:"_blank",children:(0,r.jsx)("p",{className:"bg-white text-base lg:text-lg font-medium text-[#1E3D6C] lg:px-8 lg:py-1 py-0.5 px-4 rounded-full h-auto",children:"報名截止"})})})}),(0,r.jsx)("button",{onClick:()=>t(!e),className:"text-white font-['Anicons_Regular'] text-xl transition-all lg:hidden",style:{fontVariationSettings:e?'"TIME" 100':'"TIME" 1'},children:"A"})]})]}),(0,r.jsx)("div",{className:"lg:hidden",children:(0,r.jsx)("div",{className:"w-[100vw] h-[100dvh] absolute top-0 m-auto bg-[#0E1826] lg:hidden overflow-hidden -z-10 transition-all pt-16",style:{pointerEvents:e?"auto":"none",right:e?"0":"-100vw"},id:"mobile-nav",children:(0,r.jsx)("div",{className:"flex flex-col justify-between px-10 py-4 space-y-4",children:n.map((e,n)=>(0,r.jsx)(NavItem,{href:e.href,setIsNavOpen:t,children:e.text},n))})})})]})})}function Footer(){return(0,r.jsx)("div",{className:" bg-[linear-gradient(#172941,#161426)]",children:(0,r.jsxs)("div",{className:"container flex flex-col gap-8 py-8 lg:flex-row",children:[(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("div",{className:"font-bold",children:"學生計算機年會"}),(0,r.jsx)("div",{children:"Students' Information Technology Conference"}),(0,r.jsx)("div",{className:"mt-8 font-bold",children:"聯繫我們"}),(0,r.jsxs)("div",{children:["合作聯繫：",(0,r.jsx)("a",{href:"mailto:contact@sitcon.org",className:"link",children:"contact@sitcon.org"}),(0,r.jsx)("br",{}),"報名事宜：",(0,r.jsx)("a",{href:"mailto:ask@sitcon.camp",className:"link",children:"ask@sitcon.camp"})]})]}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("div",{className:"font-bold",children:"社群媒體"}),(0,r.jsx)("div",{className:"flex flex-row flex-wrap gap-4",children:[{title:"Facebook",icon:"/2024/icon/facebook.svg",link:"https://sitcon.org/facebook"},{title:"Flickr",icon:"/2024/icon/flickr.svg",link:"https://sitcon.org/flickr"},{title:"Instagram",icon:"/2024/icon/instagram.svg",link:"https://sitcon.org/instagram"},{title:"Telegram",icon:"/2024/icon/telegram.svg",link:"https://sitcon.org/telegram"},{title:"Twitter",icon:"/2024/icon/twitter.svg",link:"https://sitcon.org/twitter"},{title:"YouTube",icon:"/2024/icon/youtube.svg",link:"https://sitcon.org/youtube"},{title:"Plurk",icon:"/2024/icon/plurk.svg",link:"https://sitcon.org/plurk"}].map(e=>(0,r.jsx)("a",{href:e.link,target:"_blank",className:"hover:opacity-80",children:(0,r.jsx)("img",{src:e.icon,className:"inline-block w-5 h-5 invert",alt:e.title+" Icon"})},e.title))}),(0,r.jsx)("div",{className:"mt-8 font-bold",children:"歷年網站"}),(0,r.jsx)("div",{className:"flex flex-row flex-wrap gap-2",children:[2023,2021,2019,2017,2016,2015,2014].map(e=>(0,r.jsx)("a",{href:"https://sitcon.camp/".concat(e),target:"_blank",className:"link",children:e},e))})]})]})})}function App(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:"SITCON 夏令營 2024"}),(0,r.jsx)("meta",{name:"author",content:"SITCON"}),(0,r.jsx)("meta",{name:"keywords",content:"SITCON,SITCON Camp"}),(0,r.jsx)("meta",{name:"description",property:"og:description",content:"SITCON 夏令營 2024 將於陽明交通大學光復校區舉辦，以「拉麵加點 source，麵向開源界」為主軸。正如同拉麵的麵條和配料可以隨個人喜好自由搭配組合，在程式設計中也可以讓每個人根據自己的想法和需求，選用不同的程式模組和元件，打造獨一無二的作品。透過兩者結合，傳達開源及資訊的無限可能性，在動手實作的過程中，激發創意靈感，發掘個人興趣所在，進而體會開源的樂趣與價值。"}),(0,r.jsx)("meta",{property:"og:title",name:"twitter:title",content:"SITCON 夏令營 2024"}),(0,r.jsx)("meta",{property:"og:site_name",content:"SITCON"}),(0,r.jsx)("meta",{property:"og:url",content:"https://sitcon.camp/2024/"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:image",name:"twitter:image",content:"https://sitcon.camp/2024/og.png"}),(0,r.jsx)("meta",{property:"og:locale",content:"zh_TW"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:description",content:"SITCON 夏令營 2024 將於陽明交通大學光復校區舉辦，以「拉麵加點 source，麵向開源界」為主軸。正如同拉麵的麵條和配料可以隨個人喜好自由搭配組合，在程式設計中也可以讓每個人根據自己的想法和需求，選用不同的程式模組和元件，打造獨一無二的作品。透過兩者結合，傳達開源及資訊的無限可能性，在動手實作的過程中，激發創意靈感，發掘個人興趣所在，進而體會開源的樂趣與價值。"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@sitcontw"})]}),(0,r.jsxs)("div",{className:l().className,children:[(0,r.jsx)(Nav,{}),(0,r.jsx)(t,{...n}),(0,r.jsx)(Footer,{})]}),(0,r.jsx)(i(),{id:"gtm",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n                  })(window,document,'script','dataLayer','".concat("GTM-NKHHNVV","');\n                  ")}}),(0,r.jsx)(i(),{id:"pancake",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:'\n                  // console.log("%c美味的蓬蓬鬆餅都在這裡！%c https://pancake.tw ", "background-color: #13AA13; color: white; padding: 5px;", "background-color: #f2f2f2; color: white; padding: 5px;");\n                  console.log("%c既然你看到這裡了，那趕快去報名 SITCON Camp！", "font-size: 40px; background-color: yellow; color: red;");\n                  '}})]})}},6071:function(){},2868:function(e){e.exports={style:{fontFamily:"'__Inter_0f401e', '__Inter_Fallback_0f401e'",fontStyle:"normal"},className:"__className_0f401e"}},8440:function(e,t,n){e.exports=n(7823)},6245:function(e,t,n){e.exports=n(6097)},9858:function(e,t,n){e.exports=n(3839)}},function(e){var __webpack_exec__=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return __webpack_exec__(2974),__webpack_exec__(2314)}),_N_E=e.O()}]);