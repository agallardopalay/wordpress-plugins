/*! (c) VentureTechSolutions */
window.isMobile = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) {window.isMobile=true;} else { window.isMobile=false;} })(navigator.userAgent||navigator.vendor||window.opera);

/*! (c) Andrea Giammarchi - ISC */
var self=this||{};try{!function(t,e){if(new t("q=%2B").get("q")!==e||new t({q:e}).get("q")!==e||new t([["q",e]]).get("q")!==e||"q=%0A"!==new t("q=\n").toString()||"q=+%26"!==new t({q:" &"}).toString()||"q=%25zx"!==new t({q:"%zx"}).toString())throw t;self.URLSearchParams=t}(URLSearchParams,"+")}catch(t){!function(t,a,o){"use strict";var u=t.create,h=t.defineProperty,e=/[!'\(\)~]|%20|%00/g,n=/%(?![0-9a-fA-F]{2})/g,r=/\+/g,i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},s={append:function(t,e){p(this._ungap,t,e)},delete:function(t){delete this._ungap[t]},get:function(t){return this.has(t)?this._ungap[t][0]:null},getAll:function(t){return this.has(t)?this._ungap[t].slice(0):[]},has:function(t){return t in this._ungap},set:function(t,e){this._ungap[t]=[a(e)]},forEach:function(e,n){var r=this;for(var i in r._ungap)r._ungap[i].forEach(t,i);function t(t){e.call(n,t,a(i),r)}},toJSON:function(){return{}},toString:function(){var t=[];for(var e in this._ungap)for(var n=v(e),r=0,i=this._ungap[e];r<i.length;r++)t.push(n+"="+v(i[r]));return t.join("&")}};for(var c in s)h(f.prototype,c,{configurable:!0,writable:!0,value:s[c]});function f(t){var e=u(null);switch(h(this,"_ungap",{value:e}),!0){case!t:break;case"string"==typeof t:"?"===t.charAt(0)&&(t=t.slice(1));for(var n=t.split("&"),r=0,i=n.length;r<i;r++){var a=(s=n[r]).indexOf("=");-1<a?p(e,g(s.slice(0,a)),g(s.slice(a+1))):s.length&&p(e,g(s),"")}break;case o(t):for(var s,r=0,i=t.length;r<i;r++){p(e,(s=t[r])[0],s[1])}break;case"forEach"in t:t.forEach(l,e);break;default:for(var c in t)p(e,c,t[c])}}function l(t,e){p(this,e,t)}function p(t,e,n){var r=o(n)?n.join(","):n;e in t?t[e].push(r):t[e]=[r]}function g(t){return decodeURIComponent(t.replace(n,"%25").replace(r," "))}function v(t){return encodeURIComponent(t).replace(e,d)}function d(t){return i[t]}self.URLSearchParams=f}(Object,String,Array.isArray)}!function(d){var r=!1;try{r=!!Symbol.iterator}catch(t){}function t(t,e){var n=[];return t.forEach(e,n),r?n[Symbol.iterator]():{next:function(){var t=n.shift();return{done:void 0===t,value:t}}}}"forEach"in d||(d.forEach=function(n,r){var i=this,t=Object.create(null);this.toString().replace(/=[\s\S]*?(?:&|$)/g,"=").split("=").forEach(function(e){!e.length||e in t||(t[e]=i.getAll(e)).forEach(function(t){n.call(r,t,e,i)})})}),"keys"in d||(d.keys=function(){return t(this,function(t,e){this.push(e)})}),"values"in d||(d.values=function(){return t(this,function(t,e){this.push(t)})}),"entries"in d||(d.entries=function(){return t(this,function(t,e){this.push([e,t])})}),!r||Symbol.iterator in d||(d[Symbol.iterator]=d.entries),"sort"in d||(d.sort=function(){for(var t,e,n,r=this.entries(),i=r.next(),a=i.done,s=[],c=Object.create(null);!a;)e=(n=i.value)[0],s.push(e),e in c||(c[e]=[]),c[e].push(n[1]),a=(i=r.next()).done;for(s.sort(),t=0;t<s.length;t++)this.delete(s[t]);for(t=0;t<s.length;t++)e=s[t],this.append(e,c[e].shift())}),function(f){function l(t){var e=t.append;t.append=d.append,URLSearchParams.call(t,t._usp.search.slice(1)),t.append=e}function p(t,e){if(!(t instanceof e))throw new TypeError("'searchParams' accessed on an object that does not implement interface "+e.name)}function t(e){var n,r,i,t=e.prototype,a=v(t,"searchParams"),s=v(t,"href"),c=v(t,"search");function o(t,e){d.append.call(this,t,e),t=this.toString(),i.set.call(this._usp,t?"?"+t:"")}function u(t){d.delete.call(this,t),t=this.toString(),i.set.call(this._usp,t?"?"+t:"")}function h(t,e){d.set.call(this,t,e),t=this.toString(),i.set.call(this._usp,t?"?"+t:"")}!a&&c&&c.set&&(i=c,r=function(t,e){return t.append=o,t.delete=u,t.set=h,g(t,"_usp",{configurable:!0,writable:!0,value:e})},n=function(t,e){return g(t,"_searchParams",{configurable:!0,writable:!0,value:r(e,t)}),e},f.defineProperties(t,{href:{get:function(){return s.get.call(this)},set:function(t){var e=this._searchParams;s.set.call(this,t),e&&l(e)}},search:{get:function(){return c.get.call(this)},set:function(t){var e=this._searchParams;c.set.call(this,t),e&&l(e)}},searchParams:{get:function(){return p(this,e),this._searchParams||n(this,new URLSearchParams(this.search.slice(1)))},set:function(t){p(this,e),n(this,t)}}}))}var g=f.defineProperty,v=f.getOwnPropertyDescriptor;try{t(HTMLAnchorElement),/^function|object$/.test(typeof URL)&&URL.prototype&&t(URL)}catch(t){}}(Object)}(self.URLSearchParams.prototype,Object);

var jQuery = window.jQuery;
window.phoneCallAttempt = function(attributes) {
	var search = window.location.search;
	var searchQuery = new URLSearchParams(search);

	var queryAttribute = attributes['urlAttribute'] || '';

	if (!searchQuery.get(queryAttribute)) {
		return;
	}

	if (isMobile && !attributes.showModalOnMobile) {
		return;
	}

	if (!isMobile && !attributes.showModalOnDesktop) {
		return;
	}

	jQuery(`#${attributes.modalID}`).toggleClass('is-mobile', window.isMobile).modal('show');
	jQuery(`#${attributes.modalID} .btn`).click(function(){
		if(dataLayer) {
			dataLayer.push({'event': 'trackEvent', 'eventCategory': 'Live Intent', 'eventAction':'Click to Call', 'eventLabel': 'Desktop'});
		}
		jQuery(`#${attributes.modalID}`).modal('hide');
	});
	setTimeout(function() {
		if (window.isMobile) {
			var phoneElement = jQuery("#phoneSection .tracking-phone-click")[0];
			var phoneNumber = jQuery(phoneElement).attr('href');
			var sanitizePhoneNumber = phoneNumber.replace(/[^\d]/g, '');

			if (!(sanitizePhoneNumber.startsWith(1) || sanitizePhoneNumber.startsWith('+1'))) {
				sanitizePhoneNumber = '+1'+sanitizePhoneNumber;
			}

			if (dataLayer) {
				dataLayer.push({'event': 'trackEvent', 'eventCategory':'Live Intent', 'eventAction':'Request Auto Callback', 'eventLabel':'Mobile'});
			}
			window.open('tel:'+sanitizePhoneNumber, '_self');
		}
	}, attributes.callTimeout);
}
