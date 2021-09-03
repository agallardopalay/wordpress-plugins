"use strict";!function(){function e(e){e=e.data;"function"==typeof window[e.func]&&window[e.func].call(null,e.message)}function X(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return;return JSON.stringify(e)===JSON.stringify({})}function o(o){var t,r,e,n,a,l={},i=window.location.href,s=window.location.hostname,c="Consolidated Credit",d="EN",p="585226",y="15",f="20",u=!0,m=!0,h="f6f6f6",w="013c73",O="287dad",g="939393",b="246f87",C="E8730F",P="ffffff",j="ffffff",S="ffffff",T="ffffff",v="ced6dd",E=["01-01-2020","02-17-2020","05-25-2020","06-03-2020","06-03-2020","09-07-2020","10-12-2020","11-26-2020","12-25-2020"],_="null",N=["9:00-17:00"],x=["8:00-16:00"],L=["8:00-12:00","13:00-16:00"],k=["9:00-17:00"],A=["8:00-11:30","13:00-17:30"],I="null",F=new URLSearchParams(window.location.search).get("pid"),B="",H="",R="",D="",J="",M={parent_id_not_found:!0};window.callbackScheduler.info.map(function(e){var t,o;return Object.prototype.hasOwnProperty.call(e,"parent_id")&&(o=e.parent_id,t=/^[A-Za-z]+[\w\-\:\.]*$/.test(o)&&o.length<20,o=document.getElementById(e.parent_id),t&&o&&(l=e.parent_id,delete M.parent_id_not_found),!t&&o&&(M.parent_id=!0,delete M.parent_id_not_found)),Object.prototype.hasOwnProperty.call(e,"affIdTitle")&&(c=e.affIdTitle),Object.prototype.hasOwnProperty.call(e,"language")&&(d="EN"===e.language||"ES"===e.language?e.language:"EN"),Object.prototype.hasOwnProperty.call(e,"drops_campaign_id")&&(p=e.drops_campaign_id.toString()),Object.prototype.hasOwnProperty.call(e,"timeLaps")&&(y=e.timeLaps.toString()),Object.prototype.hasOwnProperty.call(e,"numberOfDays")&&(f=e.numberOfDays.toString()),Object.prototype.hasOwnProperty.call(e,"twocolumn")&&(u=e.twocolumn),Object.prototype.hasOwnProperty.call(e,"bordered")&&(m=e.bordered),Object.prototype.hasOwnProperty.call(e,"formBackgroundColor")&&(h=e.formBackgroundColor.substring(1)),Object.prototype.hasOwnProperty.call(e,"fontColor")&&(w=e.fontColor.substring(1)),Object.prototype.hasOwnProperty.call(e,"calendarColorON")&&(O=e.calendarColorON.substring(1)),Object.prototype.hasOwnProperty.call(e,"calendarColorOFF")&&(g=e.calendarColorOFF.substring(1)),Object.prototype.hasOwnProperty.call(e,"calendarColorHOVER")&&(b=e.calendarColorHOVER.substring(1)),Object.prototype.hasOwnProperty.call(e,"calendarColorACTIVE")&&(C=e.calendarColorACTIVE.substring(1)),Object.prototype.hasOwnProperty.call(e,"calendarColorLines")&&(P=e.calendarColorLines.substring(1)),Object.prototype.hasOwnProperty.call(e,"btnCTANormalColor")&&(j=e.btnCTANormalColor.substring(1)),Object.prototype.hasOwnProperty.call(e,"btnCTAHoveredColor")&&(S=e.btnCTAHoveredColor.substring(1)),Object.prototype.hasOwnProperty.call(e,"btnCTAFontColor")&&(T=e.btnCTAFontColor.substring(1)),Object.prototype.hasOwnProperty.call(e,"fieldsBorderColor")&&(v=e.fieldsBorderColor.substring(1)),Object.prototype.hasOwnProperty.call(e,"daysOff")&&(E=e.daysOff),Object.prototype.hasOwnProperty.call(e,"sun")&&(_=e.sun),Object.prototype.hasOwnProperty.call(e,"mon")&&(N=e.mon),Object.prototype.hasOwnProperty.call(e,"tue")&&(x=e.tue),Object.prototype.hasOwnProperty.call(e,"wed")&&(L=e.wed),Object.prototype.hasOwnProperty.call(e,"thu")&&(k=e.thu),Object.prototype.hasOwnProperty.call(e,"fri")&&(A=e.fri),Object.prototype.hasOwnProperty.call(e,"sat")&&(I=e.sat),Object.prototype.hasOwnProperty.call(e,"pidinfo")&&(F=e.pidinfo),Object.prototype.hasOwnProperty.call(e,"source")&&(B=e.source),Object.prototype.hasOwnProperty.call(e,"firstname")&&(H=e.firstname),Object.prototype.hasOwnProperty.call(e,"lastname")&&(R=e.lastname),Object.prototype.hasOwnProperty.call(e,"phone")&&(D=e.phone),Object.prototype.hasOwnProperty.call(e,"email")&&(J=e.email),!1}),console.log(M),X(M)&&(n="https://fam.debt.com/signin",a={url:s,pid:"4654656"},t=function(e){var t=document.createElement("iframe");document.getElementById(l).appendChild(t),t.frameBorder="0",t.scrolling="no",t.title="Consolidated Credit Callback Scheduler",t.id="callbackScheduler",t.sandbox="allow-forms allow-scripts allow-same-origin allow-popups",t.src="https://resources.venturetechsolutions.com/iframes/callback-scheduler?pageUrl="+i+"&pageDomain="+s+"&ip_address="+o+"&company="+c+"&language="+d+"&pidinfo="+F+"&drops_campaign_id="+p+"&token="+e.token+"&timeLaps="+y+"&numberOfDays="+f+"&twocolumn="+u+"&bordered="+m+"&formBackgroundColor="+h+"&fontColor="+w+"&calendarColorON="+O+"&calendarColorOFF="+g+"&calendarColorHOVER="+b+"&calendarColorACTIVE="+C+"&calendarColorLines="+P+"&btnCTANormalColor="+j+"&btnCTAHoveredColor="+S+"&btnCTAFontColor="+T+"&fieldsBorderColor="+v+"&daysOff="+JSON.stringify(E)+"&sun="+JSON.stringify(_)+"&mon="+JSON.stringify(N)+"&tue="+JSON.stringify(x)+"&wed="+JSON.stringify(L)+"&thu="+JSON.stringify(k)+"&fri="+JSON.stringify(A)+"&sat="+JSON.stringify(I)+"&source="+B+"&firstname="+H+"&lastname="+R+"&phone="+D+"&email="+J,document.getElementById("dcomLoadingDivForm").style.display="none"},(r=window.XMLHttpRequest?new XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP")).open("POST",n),r.onreadystatechange=function(){var e;3<r.readyState&&200===r.status&&(e=JSON.parse(r.responseText),t(e))},r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("Content-Type","application/json;charset=UTF-8"),r.send(JSON.stringify(a))),M.parent_id_not_found&&console.warn("We couldn't find a div with the same ID you provided at the form widget config block parameter parent_id, please make sure that both IDs are exactly the same."),X(M)||M.parent_id_not_found||(e=l,n=M,(a=document.createElement("h4")).id="errorMessage",a.style.fontSize="30px",a.style.color="red",a.style.textAlign="center",a.style.fontFamily="Arial",a.appendChild(document.createTextNode("Please check the form parameters")),document.getElementById(e).appendChild(a),console.log("errors:",n)),q(!u)}function t(){var e=document.createElement("script");e.src="https://ewc.debt.com/cdn/iframe/iframeResizer.min.js",e.id="resizerScript",e.type="text/javascript",document.body.appendChild(e)}function q(e){var t="#callbackScheduler{ width: 100%; min-width: 100%; min-height: "+(0<arguments.length&&void 0!==e&&e?"1500px":"900px")+"; } @media all and (max-width: 919px) {#callbackScheduler{min-height: 1500px;}",o=document.getElementById(callbackScheduler.info[0].parent_id),e=document.createElement("style");e.id="dcomStyles",o.parentNode.insertBefore(e,o),e.type="text/css",e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function r(t){(function e(){setTimeout(function(){void 0!==window.iFrameResize?o(t):e()},10)})()}var n;window.addEventListener?window.addEventListener("message",e,!1):window.attachEvent&&window.attachEvent("onmessage",e,!1),window.callbackScheduler.info[0]&&document.getElementById(window.callbackScheduler.info[0].parent_id)?(function(){var e=document.createElement("div");e.id="dcomLoadingDivForm";var t=new Image(50,50);t.src="https://www.debt.com/wp-content/themes/Dcom/images/loading.gif",t.id="dcomLoadingSpinner",t.alt="loading";var o=document.createElement("h4");o.id="dcomLoadingText",o.appendChild(document.createTextNode("Please wait")),e.appendChild(t),e.appendChild(o),o.style.fontSize="20px",o.style.fontFamily="Open Sans, sans-serif",o.style.marginTop="5px",(o=document.getElementById(window.callbackScheduler.info[0].parent_id)).style.position="relative",e.style.position="absolute",e.style.height="100px",e.style.top="50%",e.style.left="50%",e.style.transform="translate(-50%,-50%)",e.style.textAlign="center",o.appendChild(e)}(),(n=window.XMLHttpRequest?new XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange=function(){var e;3<n.readyState&&200===n.status&&(e=JSON.parse(n.responseText),t(),q(),r(e.ip)),3<n.readyState&&200!==n.status&&(t(),q(),r("FAILED TO DETECT IP"))},n.open("GET","https://api.ipify.org?format=json",!0),n.send(null)):console.warn("We couldn't find a div with the same ID you provided at the form widget config block parameter parent_id, please make sure that both IDs are exactly the same.")}();