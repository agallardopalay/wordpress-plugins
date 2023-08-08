(()=>{"use strict";var e,t={694:()=>{const e=window.wp.blocks;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},t.apply(this,arguments)}const a=window.wp.element,n=(window.wp.i18n,window.React),l=window.wp.blockEditor,s=window.wp.primitives,c=(0,a.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(s.Path,{d:"M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"})),{useDispatch:r,useSelect:i}=(window.wp.components,wp.data),{createBlock:o}=wp.blocks,d=wp.blocks.getBlockTypes().map((e=>e.name)).filter((e=>"mdc/tabs"!==e)),b=JSON.parse('{"u2":"create-block/custom-tabs"}');(0,e.registerBlockType)(b.u2,{edit:function(e){let{attributes:{tabs:s=[],templates:b=[]},setAttributes:m,className:f,clientId:p}=e;const u=(0,l.useBlockProps)(),[v,x]=(0,n.useState)(0),[E,w]=(0,n.useState)(0),{replaceInnerBlocks:_}=r("core/block-editor"),{inner_blocks:h}=i((e=>({inner_blocks:e("core/block-editor").getBlocks(p)}))),k=()=>{x((e=>e+1));let e=`tab${v}`;m({tabs:[...s,{tabId:e,index:s.length,title:`Tab ${s.length} title`,description:""}]});let t={tabScreenIndex:s.length,tabId:e,index:s.length,className:"brand-tab-screen"},a=[...h,o("brand/tab",t)];N(s.length,a)},N=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[...h];w(e);const a=t.map(((t,a)=>{let n=t;return n.attributes.style={display:"none"},e==a&&(n.attributes.style={display:"block"}),n}));_(p,a,!1)};return(0,n.useEffect)((()=>{N(0),0==s.length&&k()}),[]),(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",t({},u,{className:"tab-wrap","data-tab-component":!0}),(0,a.createElement)("div",{className:f},(0,a.createElement)("div",{className:"custom-tab-bar",role:"tablist"},(0,a.createElement)("div",{className:"custom-tab-scroller"},(0,a.createElement)("div",{className:"custom-tab-scroller__scroll-area"},(0,a.createElement)("div",{className:"custom-tab-scroller__scroll-content"},s.sort(((e,t)=>e.index-t.index)).map((e=>(0,a.createElement)("button",{role:"tab","aria-selected":e.index==E,"aria-controls":e.index,id:`tab${e.index}`,tabindex:e.index,onClick:()=>N(e.index),className:e.index==E?"tab-bullet-active":"tab-bullet"},(0,a.createElement)(l.RichText,{tagName:"span",className:"custom-tab__text-label",placeholder:"Tab title",allowedFormats:["core/bold","core/italic"],value:e.title,onChange:t=>{const a=Object.assign({},e,{title:t});m({tabs:[...s.filter((t=>t.index!=e.index)),a]})}}),(0,a.createElement)("span",{isSmall:!0,className:"components-button block-editor-inserter__toggle has-icon",iconSize:24,onClick:()=>(e=>{const t=b.filter((t=>t[1].index!=e.index)).map((t=>(t[1].index>e.index&&(t[1].index-=1),t))),a=s.filter((t=>t.index!=e.index)).map((t=>(t.index>e.index&&(t.index-=1),t)));m({tabs:a,templates:t});let n=[...h];n.splice(e.index,1);const l=0==e.index?0:e.index-1;N(l,n)})(e)},"×")))))),(0,a.createElement)("div",{className:"custom-tab custom-tab-plus",role:"tab","aria-selected":"true",onClick:k},(0,a.createElement)("span",{className:"custom-tab__content"},(0,a.createElement)("span",{className:"custom-tab__icon","aria-hidden":"true"},c)),(0,a.createElement)("span",{className:"custom-tab-indicator"},(0,a.createElement)("span",{className:"custom-tab-indicator__content"})),(0,a.createElement)("span",{className:"custom-tab__ripple"})))),(0,a.createElement)("div",{id:"innerBlocks"},(0,a.createElement)(l.InnerBlocks,{allowedBlocks:d,templateLock:"all"})))))},save:function(e){let{attributes:n,className:s,clientId:c}=e;const r=l.useBlockProps.save();return(0,a.createElement)("div",t({},r,{className:"tab-wrap","data-tab-component":!0}),(0,a.createElement)("div",{className:s,id:c},(0,a.createElement)("div",{className:"custom-tab-bar",role:"tablist"},(0,a.createElement)("div",{className:"custom-tab-scroller"},(0,a.createElement)("div",{className:"custom-tab-scroller__scroll-area"},(0,a.createElement)("div",{className:"custom-tab-scroller__scroll-content"},n.tabs.sort(((e,t)=>e.index-t.index)).map((e=>(0,a.createElement)("button",{role:"tab","aria-selected":0==e.index,"aria-controls":e.index,id:`tab${e.index}`,tabindex:e.index,onClick:()=>setActiveTab(e.index),className:0==e.index?"tab-bullet-active":"tab-bullet"},(0,a.createElement)("span",{className:"custom-tab__content"},(0,a.createElement)(l.RichText.Content,{tagName:"span",className:"custom-tab__text-label",value:e.title})),(0,a.createElement)("span",{className:0==e.index?"custom-tab-indicator custom-tab-indicator--active":"custom-tab-indicator"},(0,a.createElement)("span",{className:"custom-tab-indicator__content custom-tab-indicator__content--underline"})),(0,a.createElement)("span",{className:"custom-tab__ripple"})))))))),(0,a.createElement)("div",{id:"innerBlocks"},(0,a.createElement)(l.InnerBlocks.Content,null))))}})}},a={};function n(e){var l=a[e];if(void 0!==l)return l.exports;var s=a[e]={exports:{}};return t[e](s,s.exports,n),s.exports}n.m=t,e=[],n.O=(t,a,l,s)=>{if(!a){var c=1/0;for(d=0;d<e.length;d++){a=e[d][0],l=e[d][1],s=e[d][2];for(var r=!0,i=0;i<a.length;i++)(!1&s||c>=s)&&Object.keys(n.O).every((e=>n.O[e](a[i])))?a.splice(i--,1):(r=!1,s<c&&(c=s));if(r){e.splice(d--,1);var o=l();void 0!==o&&(t=o)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[a,l,s]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={68:0,370:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var l,s,c=a[0],r=a[1],i=a[2],o=0;if(c.some((t=>0!==e[t]))){for(l in r)n.o(r,l)&&(n.m[l]=r[l]);if(i)var d=i(n)}for(t&&t(a);o<c.length;o++)s=c[o],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},a=self.webpackChunkcustom_tabs=self.webpackChunkcustom_tabs||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var l=n.O(void 0,[370],(()=>n(694)));l=n.O(l)})();