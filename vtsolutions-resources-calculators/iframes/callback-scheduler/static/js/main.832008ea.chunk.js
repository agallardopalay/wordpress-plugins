(this["webpackJsonpcallback-scheduler"]=this["webpackJsonpcallback-scheduler"]||[]).push([[0],{127:function(e,t,a){e.exports=a(248)},224:function(e,t,a){},245:function(e,t,a){},248:function(e,t,a){"use strict";a.r(t);a(128);var n=a(1),r=a.n(n),o=a(70),l=a.n(o),i=(a(224),a(17)),s=a(72),c=a(32),d=a(33),u=a(27),m=a(49),p=a(48),g=a(50),f=a(117),h=a(119),b=a.n(h),y=a(0),v=a(34),x=a(120),E=a.n(x),C=(a(241),a(250)),T=a(251),w=a(125),O=a(252),k=a(253),S=(a(242),a(121)),P=a(51),U={label:{EN:{name:"First Name",lastname:"Last Name",phone:"Phone Number",email:"Email Address",state:"State",timezone:"Time Zone",calendar:"Date and Time",tcpa:"*Telephone Consumer Protection Ad (TCPA) copy here.",thankyoutitle:"Thank you ",thankyoumesage:"A Certified Credit Counselor will be calling you at",thankyoumesage2:"They\u2019ll complete your free debt and budget analysis, then discuss the best options for getting out of debt with you. If you qualify to enroll in a debt management program, your counselor can also help you enroll immediately."},ES:{name:"Nombre",lastname:"Apellido",phone:"N\xfamero Telef\xf3nico",email:"Correo Electr\xf3nico",state:"Estado",timezone:"Zona Horaria",calendar:"Fecha y Hora",tcpa:"*Telephone Consumer Protection Ad (TCPA) copy here.",thankyoutitle:"Gracias ",thankyoumesage:"Un asesor de cr\xe9dito certificado lo llamar\xe1 al",thankyoumesage2:"Ellos completar\xe1n su an\xe1lisis gratuito de deuda y presupuesto, luego discutir\xe1n con usted las mejores opciones para salir de la deuda. Si califica para inscribirse en un programa de gesti\xf3n de deudas, su consejero tambi\xe9n puede ayudarlo a inscribirse de inmediato."}},inputsError:{EN:{name:"The First Name field must be letters only.",lastname:"The Last Name field must be letters only.",phone:"Invalid Phone number.",email:"Invalid Email address.",state:"The State is required.",calendar:"The Calendar is required.",tcpa:"This field is required."},ES:{name:"Su Nombre debe contener solo letras.",lastname:"Sus Apellidos deben contener solo letras",phone:"El n\xfamero de tel\xe9fono es inv\xe1lido.",email:"El correo electr\xf3nico es inv\xe1lido.",state:"El campo Estado es requerido.",calendar:"Es requerido seleccionar al menos una fecha.",tcpa:"Este campo es requerido."}},cta:{EN:{btnTitle:"BOOK NOW"},ES:{btnTitle:"RESERVAR"}}},N={EN:["sun","mon","tue","wed","thu","fri","sat"],ES:["dom","lun","mar","mie","jue","vie","sab"]},A=a(126),D=function(){function e(){Object(c.a)(this,e)}return Object(d.a)(e,null,[{key:"getUrlParameter",value:function(e){var t=String(e).replace(/[[]/,"\\[").replace(/[\]]/,"\\]"),a=new RegExp("[\\?&]".concat(t,"=([^&#]*)")).exec(window.location.search);return null!==a&&decodeURIComponent(a[1].replace(/\+/g," "))}},{key:"getWorkingHorus",value:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=e,o=[],l=60*t,i=[" AM"," PM"];a=n?60*a+2*e:60*a+e;for(var s=0;l<a;s+=1){var c=Math.floor(l/60),d=l%60,u="0".concat(d).slice(-2);o[s]=(""+(12===c?12:c%12)).slice(-2)+":"+u+i[Math.floor(c/12)],l+=r}return o}},{key:"getWorkingDays",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15,t=new Date,a=[],n=0;n<e;n+=1){var r=t.getDate(),o=t.getMonth()+1,l=t.getFullYear();r<10&&(r="0"+r),o<10&&(o="0"+o);var i=o+"-"+r+"-"+l;a[n]=i,t.setDate(t.getDate()+1)}return a}},{key:"getCurrentDate",value:function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1;return t<10&&(t="0"+t),a<10&&(a="0"+a),a+"-"+t+"-"+e.getFullYear()}},{key:"decodeProvidedHours",value:function(e){for(var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,n={sun:null,mon:[],tue:[],wed:[],thu:[],fri:[],sat:null},r=0,o=Object.entries(e);r<o.length;r++){var l=Object(A.a)(o[r],2),i=l[0],s=l[1];if(null!==s&&"null"!==s){var c="string"==typeof s?[s]:s;"string"===typeof s&&(c=s.split(",")),n[i]=c.map((function(e){var n=e.split("-"),r=n[0].split(":"),o=Number(r[0]),l=n[1].split(":"),i=Number(l[0]);return t.getWorkingHorus(a,o,i,!1)})),n[i]=[].concat.apply([],n[i])}}return n}},{key:"getCurrentHour",value:function(e){var t=(this.isDST(new Date)?{"GMT-0700":"-7","GMT-0600":"-6","GMT-0500":"-5","GMT-0400":"-4","GMT-0800":"-8","GMT-0900":"-9"}:{"GMT-0800":"-8","GMT-0700":"-7","GMT-0600":"-6","GMT-0500":"-5","GMT-0900":"-9","GMT-1000":"-10"})[e],a=new Date,n=a.getTime()+6e4*a.getTimezoneOffset(),r=new Date(n+36e5*t).toLocaleString().split(", ")[1].split(" "),o=r[1],l=r[0].split(":");return"".concat(l[0],":").concat(l[1]," ").concat(o)}},{key:"convertHourTo24Format",value:function(e){var t=e.split(" ")[1],a=e.split(":"),n=parseInt(a[0],10);return"AM"===t||12===n?n:n+12}},{key:"changeDateFormat",value:function(e){var t=e.replace(/-/g,"/"),a="".concat(t," 08:00:00");return new Date(a)}},{key:"getQueryStringValue",value:function(e){return new URLSearchParams(window.location.search).get(e)}},{key:"getTimeZoneStringValue",value:function(){return(new Date).toString().match(/([A-Z]+[+-][0-9]+)/)[1]}},{key:"isDST",value:function(e){var t=new Date(e.getFullYear(),0,1).getTimezoneOffset(),a=new Date(e.getFullYear(),6,1).getTimezoneOffset();return Math.max(t,a)!==e.getTimezoneOffset()}},{key:"getDiference",value:function(e,t){var a=e.split(" ")[0].split(":")[1],n=this.convertHourTo24Format(e),r=this.isDST(new Date),o=3;(r&&"GMT-0600"===t||!r&&"GMT-0700"===t)&&(o=2),(r&&"GMT-0500"===t||!r&&"GMT-0600"===t)&&(o=1),(r&&"GMT-0800"===t||!r&&"GMT-0900"===t)&&(o=4),(r&&"GMT-0900"===t||!r&&"GMT-1000"===t)&&(o=5);var l=n+o,i=l>=12?"PM":"AM";return"".concat(l>12?l-12:l,":").concat(a," ").concat(i)}}]),e}(),I=(a(245),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={listOpen:!1,selected:0},n.close=n.close.bind(Object(u.a)(n)),n}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(){var e=this;setTimeout((function(){e.state.listOpen?window.addEventListener("click",e.close):window.removeEventListener("click",e.close)}),0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.close)}},{key:"close",value:function(e){this.setState({listOpen:!1})}},{key:"selectItem",value:function(e){this.setState({listOpen:!1},this.props.onSelect(e,this.props.name))}},{key:"toggleList",value:function(){this.setState((function(e){return{listOpen:!e.listOpen}}))}},{key:"render",value:function(){var e=this,t=this.state.listOpen,a=this.props.list.filter((function(e){return e.selected}))[0].title;return r.a.createElement("div",{className:"dd-wrapper"},r.a.createElement("div",{className:"dd-header",onClick:function(){return e.toggleList()}},r.a.createElement("div",{className:"dd-header-title"},r.a.createElement("span",null,a)),t?r.a.createElement(y.b.Provider,{value:{className:"selectIcon"}},r.a.createElement(v.d,null)):r.a.createElement(y.b.Provider,{value:{className:"selectIcon"}},r.a.createElement(v.a,null))),t&&r.a.createElement("ul",{className:"dd-list",onClick:function(e){return e.stopPropagation()}},this.props.list.map((function(t){return r.a.createElement("li",{className:t.selected?"dd-list-item selected":"dd-list-item",key:t.id,onClick:function(){return e.selectItem(t.id)}},r.a.createElement("span",null,t.title))}))))}}]),a}(n.Component));function F(){var e=Object(g.a)(["\n    height: 470px;\n    overflow: auto;\n\n    h3 {\n        margin: 5px 0;\n        color: ","; /* #013c73 */\n        font-size: 15px;\n        font-weight: 600;\n        text-align: center;\n        text-transform: uppercase;\n    }\n\n    p {\n        margin: 0;\n        color: #666666;\n        font-size: 17px;\n        font-weight: 700;\n        text-align: center;\n    }\n\n    ul {\n        margin: 0;\n        padding: 0;\n        li {\n            list-style: none;\n        }\n    }\n\n    .btnDay {\n        padding: 0;\n        width: 150px;\n        height: 50px;\n        color: #ffffff;\n        cursor: pointer;\n        font-size: 13px;\n        border-radius: 0;\n        font-weight: bold;\n        border: 1px solid ",";\n        transition: all 0.3s ease-out 0s;\n\n        &.btnOFF {\n            background-color: ",";\n            cursor: unset;\n        }\n        &.btnON {\n            background-color: ",";\n            &:hover {\n                background-color: ",";\n                transition: all 0.3s ease-out 0s;\n            }\n        }\n        &.btnACTIVE {\n            background-color: ",";\n        }\n    }\n\n    .BrainhubCarousel__customArrows {\n        position: absolute;\n        top: 32px;\n        z-index: 9999;\n        cursor: pointer;\n        pointer-events: auto;\n\n        .carouselIcons {\n            width: 30px;\n            height: 30px;\n        }\n        .carouselIcons {\n            color: ",";\n        }\n\n        &.BrainhubCarousel__arrow--disable {\n            cursor: not-allowed;\n\n            .carouselIcons {\n                color: #939393;\n            }\n        }\n\n        &.BrainhubCarousel__custom-arrowLeft {\n            left: 25px;\n            @media all and (max-width: 768px) {\n                left: 10px;\n            }\n        }\n\n        &.BrainhubCarousel__custom-arrowRight {\n            right: 40px;\n\n            @media all and (max-width: 768px) {\n                right: 15px;\n            }\n        }\n\n        @media only screen and (min-width: 920px) and (max-width: 1024px) {\n            top: 65px;\n        }\n\n        @media only screen and (max-width: 550px) {\n            top: 65px;\n        }\n    }\n\n    .form-error {\n        color: red;\n        font-size: 15px;\n    }\n"]);return F=function(){return e},e}function M(){var e=Object(g.a)(["\n    background: #ffffff;\n    padding: 20px 15px;\n\n    @media all and (max-width: 550px) {\n        padding: 33px 15px 20px;\n    }\n\n    border-radius: ",";\n\n    -webkit-box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.1);\n    -moz-box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.1);\n    box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.1);\n\n    .arrow {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        z-index: 9999;\n    }\n    .arrow span {\n        opacity: 0;\n        width: 20px;\n        height: 20px;\n        margin: -7px;\n        display: block;\n        transform: rotate(45deg);\n        border-bottom: 5px solid ",";\n        border-right: 5px solid ",";\n        animation: animate 2s 4;\n    }\n    .arrow span:nth-child(2) {\n        -webkit-animation-delay: -0.2s;\n        animation-delay: -0.2s;\n    }\n    .arrow span:nth-child(3) {\n        -webkit-animation-delay: -0.4s;\n        animation-delay: -0.4s;\n    }\n    @-webkit-keyframes animate {\n        0% {\n            opacity: 0;\n            transform: rotate(45deg) translate(-20px, -20px);\n        }\n        50% {\n            opacity: 1;\n        }\n        100% {\n            opacity: 0;\n            transform: rotate(45deg) translate(20px, 20px);\n        }\n    }\n    @keyframes animate {\n        0% {\n            opacity: 0;\n            transform: rotate(45deg) translate(-20px, -20px);\n        }\n        50% {\n            opacity: 1;\n        }\n        100% {\n            opacity: 0;\n            transform: rotate(45deg) translate(20px, 20px);\n        }\n    }\n"]);return M=function(){return e},e}function j(){var e=Object(g.a)(["\n    .container {\n        background: ",";\n        padding-top: 2.5rem;\n        -webkit-box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.1);\n        -moz-box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.1);\n        box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.1);\n\n        max-width: 1140px;\n    }\n\n    .col-md-5 {\n        padding-right: 20px;\n        padding-left: 40px;\n    }\n    .col-md-7 {\n        padding-right: 40px;\n        padding-left: 25px;\n    }\n    .checkbox-wrapper {\n        padding-left: 47px;\n\n        label {\n            font-size: 14px;\n            padding-right: 35px;\n        }\n\n        input {\n            width: 17px;\n            height: 17px;\n            margin-top: 4px;\n            margin-left: -23px;\n            border: 1px solid ",";\n            border-radius: ",";\n        }\n    }\n\n    input.form-control {\n        height: 50px;\n        border: 1px solid ",";\n        border-radius: ",";\n    }\n\n    .dd-header {\n        border-radius: ",";\n        border: 1px solid ",";\n    }\n\n    label {\n        font-size: 17px;\n        margin-bottom: 0;\n        color: ",";\n    }\n\n    .timezone-label {\n        color: ",";\n        float: right;\n        padding-right: 5px;\n\n        @media only screen and (min-width: 920px) and (max-width: 1024px) {\n            float: none;\n            display: block;\n        }\n\n        @media only screen and (max-width: 550px) {\n            float: none;\n            display: block;\n            padding-left: 15px;\n        }\n    }\n\n    button.btn {\n        color: ",";\n        background-color: ",";\n        border-color: ",";\n        border-radius: ",";\n        margin: 20px 35px 50px;\n        padding: 15px 60px;\n        font-size: 19px;\n        font-weight: bold;\n        -webkit-box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.1);\n        -moz-box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.1);\n        box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.1);\n\n        &:hover {\n            background-color: ",";\n            border-color: ",";\n        }\n\n        @media all and (max-width: 768px) {\n            margin: 25px;\n            padding: 15px 45px;\n        }\n    }\n\n    small.text-muted {\n        color: #bd2130 !important;\n        font-size: 90%;\n    }\n\n    @media all and (max-width: 767px) {\n        .col-md-5 {\n            padding-left: 15px;\n        }\n        .col-md-7 {\n            padding-right: 15px;\n        }\n\n        .checkbox-wrapper {\n            padding-left: 25px;\n\n            label {\n                padding-right: 0;\n            }\n        }\n    }\n\n    @media all and (max-width: 550px) {\n        .cus-calendar-wrapper {\n            padding: 0;\n        }\n\n        .date-time-label {\n            padding-left: 15px;\n        }\n    }\n"]);return j=function(){return e},e}var G=P.a.div(j(),(function(e){return e.styles.formBackgroundColor}),(function(e){return e.styles.fieldsBorderColor}),(function(e){return e.styles.bordered?".25rem":"0"}),(function(e){return e.styles.fieldsBorderColor}),(function(e){return e.styles.bordered?".25rem":"0"}),(function(e){return e.styles.bordered?".25rem":"0"}),(function(e){return e.styles.fieldsBorderColor}),(function(e){return e.styles.fontColor}),(function(e){return e.styles.calendarColorON}),(function(e){return e.styles.btnCTAFontColor}),(function(e){return e.styles.btnCTANormalColor}),(function(e){return e.styles.btnCTANormalColor}),(function(e){return e.styles.bordered?".25rem":"0"}),(function(e){return e.styles.btnCTAHoveredColor}),(function(e){return e.styles.btnCTAHoveredColor})),L=P.a.div(M(),(function(e){return e.bordered?"4px":"0"}),(function(e){return e.arrowColor}),(function(e){return e.arrowColor})),z=P.a.div(F(),(function(e){return e.styles.fontColor}),(function(e){return e.styles.calendarColorLines}),(function(e){return e.styles.calendarColorOFF}),(function(e){return e.styles.calendarColorON}),(function(e){return e.styles.calendarColorHOVER}),(function(e){return e.styles.calendarColorACTIVE}),(function(e){return e.styles.calendarColorACTIVE})),Z=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a),(e=t.call(this)).handleCalendarClick=function(t,a,n){for(var r=e.state.calendarAvailability,o=Object(s.a)(r),l=0,i=0;i<o.length;i+=1)if(o[i].ID===t)for(var c=0;c<o[i].hours.length;c+=1)o[i].hours[c].title===a?(o[i].hours[c].status="ACTIVE"===o[i].hours[c].status?"ON":"ACTIVE","ACTIVE"===o[i].hours[c].status&&(l=1)):o[i].hours[c].status="OFF"===o[i].hours[c].status?"OFF":"ON";else for(var d=0;d<o[i].hours.length;d+=1)o[i].hours[d].status="OFF"===o[i].hours[d].status?"OFF":"ON";var u="";1===l&&(u=n),e.setState({selectedDate:u,calendarAvailability:o})},e.handleSelectState=function(t,a){e.setState((function(e){return{usaStates:e.usaStates.map((function(e){return e.id===t?Object.assign(e,{selected:!0}):Object.assign(e,{selected:!1})}))}})),e.setState(Object(i.a)({},a,t))},e.handleTimeZoneSelect=function(t,a){e.setState((function(e){return{usaTimeZones:e.usaTimeZones.map((function(e){return e.id===t?Object.assign(e,{selected:!0}):Object.assign(e,{selected:!1})}))}})),e.setState(Object(i.a)({},a,t),(function(){return e.fillingOutStateAvailability()}))},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;switch(n){case"phone":var o;if(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(r))e.setState((o={},Object(i.a)(o,n,r),Object(i.a)(o,"".concat(n,"Error"),!1),o));else e.setState(Object(i.a)({},"".concat(n,"Error"),!0));break;case"email":var l;if(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r.toLowerCase()))e.setState((l={},Object(i.a)(l,n,r),Object(i.a)(l,"".concat(n,"Error"),!1),l));else e.setState(Object(i.a)({},"".concat(n,"Error"),!0));break;default:var s;if(/[a-zA-Z]+/g.test(r)||""===r)if(!1===/\d/g.test(r))e.setState((s={},Object(i.a)(s,n,r),Object(i.a)(s,"".concat(n,"Error"),!1),s));else e.setState(Object(i.a)({},"".concat(n,"Error"),!0));else e.setState(Object(i.a)({},"".concat(n,"Error"),!0))}e.setState(Object(i.a)({},n,r))},e.handleFormSubmit=function(){var t=D.isDST(new Date),a=e.state,n=a.pageUrl,r=a.pidinfo,o=a.drops_campaign_id,l=a.firstname,i=a.lastname,s=a.phone,c=a.email,d=a.selectedDate,u=a.selectedTimeZone,m=a.tcpa,p="";if(t&&"GMT-0400"===u||!t&&"GMT-0500"===u){p=new Date(d).getTime()}else{console.log("Selected date str: ",d);var g=d.split(" "),f="".concat(g[1]," ").concat(g[2]),h=D.getDiference(f,u),y="".concat(g[0]," ").concat(h);p=new Date(y).getTime(),console.log("Result of Diference: ",y),console.log("Result of Diference Timestamp: ",p)}b.a.post("https://drops-dashboard-bk.debt.com/api/v1/lead?apikey=3SBqDxOk7UMUeIhhvZ2lmdJ1qvSaImrA",{referrer_url:n,name:l,last_name:i,phone:s,mapi_lead_id:"AB123",pid:r,CakeID:"TETEGVEVE",email:c,drops_campaign_id:o,tcpa:m,request_time:p,time_zone:u},{headers:{Authorization:"Api-Key 3SBqDxOk7UMUeIhhvZ2lmdJ1qvSaImrA"}}).then((function(t){200===t.status?e.setState({formSent:!0}):console.log(t)}))},e.handleCheckboxCchange=function(t){e.setState({tcpa:t.target.checked})},e.getTimeZoneLabel=function(){var t=e.state,a=t.lang,n=t.selectedTimeZone,r=t.usaTimeZones.filter((function(e){return e.id===n}))[0].title;return"EN"===a?"*Showing ".concat(r," times"):"Mostrando tiempos en ".concat(r)};var n=D.isDST(new Date);return e.state={pageUrl:D.getUrlParameter("pageUrl"),pageDomain:D.getUrlParameter("pageDomain"),ip_address:D.getUrlParameter("ip_address"),token:D.getUrlParameter("token"),source:D.getUrlParameter("source"),company:D.getUrlParameter("company")||"Consolidated Credit",lang:D.getUrlParameter("language")||"EN",pidinfo:D.getUrlParameter("pidinfo")||"",drops_campaign_id:D.getUrlParameter("drops_campaign_id")||"",workHours:D.getUrlParameter("timeLaps")?D.getWorkingHorus(Number(D.getUrlParameter("timeLaps")),8,18,!1):D.getWorkingHorus(15,8,18,!1),workDays:D.getUrlParameter("numberOfDays")?D.getWorkingDays(D.getUrlParameter("numberOfDays")):D.getWorkingDays(20),daysOff:D.getUrlParameter("daysOff")?JSON.parse(D.getUrlParameter("daysOff")):["09-24-2020","10-19-2020","10-23-2020","10-30-2020"],timeOff:D.decodeProvidedHours({sun:!1!==D.getUrlParameter("sun")&&"null"!==D.getUrlParameter("sun")?JSON.parse(D.getUrlParameter("sun")):null,mon:!1!==D.getUrlParameter("mon")&&"null"!==D.getUrlParameter("mon")?JSON.parse(D.getUrlParameter("mon")):["9:00-17:00"],tue:!1!==D.getUrlParameter("tue")&&"null"!==D.getUrlParameter("tue")?JSON.parse(D.getUrlParameter("tue")):["8:00-16:00"],wed:!1!==D.getUrlParameter("wed")&&"null"!==D.getUrlParameter("wed")?JSON.parse(D.getUrlParameter("wed")):["8:00-12:00","13:00-16:00"],thu:!1!==D.getUrlParameter("thu")&&"null"!==D.getUrlParameter("thu")?JSON.parse(D.getUrlParameter("thu")):["9:00-17:00"],fri:!1!==D.getUrlParameter("fri")&&"null"!==D.getUrlParameter("fri")?JSON.parse(D.getUrlParameter("fri")):["8:00-11:30","13:00-17:30"],sat:!1!==D.getUrlParameter("sat")&&"null"!==D.getUrlParameter("sat")?JSON.parse(D.getUrlParameter("sat")):null},D.getUrlParameter("timeLaps")?Number(D.getUrlParameter("timeLaps")):15),calendarAvailability:[],selectedDate:null,usaStates:[{id:"none",title:D.getUrlParameter("language")&&"ES"===D.getUrlParameter("language")?"Seleccione su Estado":"Select your state",selected:!0}],selectedState:null,usaTimeZones:[{id:n?"GMT-0700":"GMT-0800",title:"PACIFIC",selected:!0},{id:n?"GMT-0600":"GMT-0700",title:"MOUNTAIN",selected:!1},{id:n?"GMT-0500":"GMT-0600",title:"CENTRAL",selected:!1},{id:n?"GMT-0400":"GMT-0500",title:"EASTERN",selected:!1},{id:n?"GMT-0800":"GMT-0900",title:"ALASKA",selected:!1},{id:n?"GMT-0900":"GMT-1000",title:"HAWAII",selected:!1}],selectedTimeZone:D.getTimeZoneStringValue(),firstname:D.getUrlParameter("firstname")||"",lastname:D.getUrlParameter("lastname")||"",phone:D.getUrlParameter("phone")||"",email:D.getUrlParameter("email")||"",nameError:!1,lastnameError:!1,phoneError:!1,emailError:!1,timeout:6e5,isTimedOut:!1,tcpa:!1,twocolumn:"true"===D.getUrlParameter("twocolumn")||!1,formSent:!1,styles:{bordered:"true"===D.getUrlParameter("bordered")||!1,formBackgroundColor:D.getUrlParameter("formBackgroundColor")?"#".concat(D.getUrlParameter("formBackgroundColor")):"#f6f6f6",fontColor:D.getUrlParameter("fontColor")?"#".concat(D.getUrlParameter("fontColor")):"#555555",calendarColorHOVER:D.getUrlParameter("calendarColorHOVER")?"#".concat(D.getUrlParameter("calendarColorHOVER")):"#246f87",calendarColorON:D.getUrlParameter("calendarColorON")?"#".concat(D.getUrlParameter("calendarColorON")):"#2F90AF",calendarColorOFF:D.getUrlParameter("calendarColorOFF")?"#".concat(D.getUrlParameter("calendarColorOFF")):"#E8E8E8",calendarColorACTIVE:D.getUrlParameter("calendarColorACTIVE")?"#".concat(D.getUrlParameter("calendarColorACTIVE")):"#e61b17",calendarColorLines:D.getUrlParameter("calendarColorLines")?"#".concat(D.getUrlParameter("calendarColorLines")):"#ffffff",btnCTANormalColor:D.getUrlParameter("btnCTANormalColor")?"#".concat(D.getUrlParameter("btnCTANormalColor")):"#527E3E",btnCTAHoveredColor:D.getUrlParameter("btnCTAHoveredColor")?"#".concat(D.getUrlParameter("btnCTAHoveredColor")):"#6c9b57",btnCTAFontColor:D.getUrlParameter("btnCTAFontColor")?"#".concat(D.getUrlParameter("btnCTAFontColor")):"#ffffff",fieldsBorderColor:D.getUrlParameter("fieldsBorderColor")?"#".concat(D.getUrlParameter("fieldsBorderColor")):"#26748b"}},e.idleTimer=null,e.onAction=e.onAction.bind(Object(u.a)(e)),e.onActive=e.onActive.bind(Object(u.a)(e)),e.onIdle=e.onIdle.bind(Object(u.a)(e)),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fillingOutStateAvailability();var e=(new Date).toString().match(/([A-Z]+[+-][0-9]+)/)[1];this.setState((function(t){return{usaTimeZones:t.usaTimeZones.map((function(t){var a=t;return a.id===e?a.selected=!0:a.selected=!1,a}))}}))}},{key:"onAction",value:function(){this.setState({isTimedOut:!1})}},{key:"onActive",value:function(){this.setState({isTimedOut:!1})}},{key:"onIdle",value:function(){this.state.isTimedOut||(this.fillingOutStateAvailability(),this.idleTimer.reset(),this.setState({isTimedOut:!0}))}},{key:"fillingOutStateAvailability",value:function(){var e=this.state,t=e.workDays,a=e.workHours,n=e.daysOff,r=e.timeOff,o=e.selectedTimeZone;console.log("Original TimeOff: ",D.getUrlParameter("wed")),console.log("Parsed TimeOff: ",JSON.parse(D.getUrlParameter("wed"))),console.log("Conbined: ",r);for(var l=[],i=D.getCurrentDate(),c=D.getCurrentHour(o),d=D.convertHourTo24Format(c),u=!1,m=0;m<t.length;m+=1){var p={ID:t[m],hours:[]};u=n.includes(t[m]);for(var g=0;g<a.length;g+=1){var h={ID:"".concat(t[m]," ").concat(a[g]),title:a.length===g+1?a[g]:"".concat(a[g]," - ").concat(a[g+1]),status:"ON"};if(u)h.status="OFF";else{var b=D.changeDateFormat(t[m]),y=r[N.EN[Number(b.getDay())]];if(null!=y&&y.includes(a[g])||(h.status="OFF"),i===t[m])d+3>=D.convertHourTo24Format(a[g])&&(h.status="OFF")}p.hours[g]=h}l[m]=p}var v=Object(f.a)(),x=this.state.usaStates,E=Object(s.a)(x);v.map((function(e){return E.push({id:e.abbreviation,title:"".concat(e.abbreviation," | ").concat(e.name),selected:!1})})),this.setState({calendarAvailability:l,usaStates:E,selectedDate:null})}},{key:"render",value:function(){var e=this,t=this.state,a=t.company,n=t.lang,o=t.firstname,l=t.nameError,i=t.lastname,s=t.lastnameError,c=t.phone,d=t.phoneError,u=t.email,m=t.emailError,p=t.tcpa,g=t.usaStates,f=t.selectedState,h=t.usaTimeZones,b=t.selectedDate,x=t.twocolumn,P=t.styles,A=t.calendarAvailability,F=t.formSent;return r.a.createElement(G,{styles:P},r.a.createElement(C.a,{style:{display:F?"none":"block"}},r.a.createElement(T.a,null,r.a.createElement(w.a,{xs:12,sm:12,md:x?5:12},r.a.createElement(O.a,{id:"apptScheduler"},r.a.createElement(O.a.Group,{controlId:"formName"},r.a.createElement(O.a.Label,null,U.label[n].name,":"),r.a.createElement(O.a.Control,{name:"firstname",type:"text",value:o,onChange:this.handleChange}),r.a.createElement(O.a.Text,{className:"text-muted"},l&&U.inputsError[n].name)),r.a.createElement(O.a.Group,{controlId:"formLastName"},r.a.createElement(O.a.Label,null,U.label[n].lastname,":"),r.a.createElement(O.a.Control,{name:"lastname",type:"text",value:i,onChange:this.handleChange}),r.a.createElement(O.a.Text,{className:"text-muted"},s&&U.inputsError[n].lastname)),r.a.createElement(O.a.Group,{controlId:"formPhoneNumber"},r.a.createElement(O.a.Label,null,U.label[n].phone,":"),r.a.createElement(O.a.Control,{name:"phone",type:"text",value:c,onChange:this.handleChange}),r.a.createElement(O.a.Text,{className:"text-muted"},d&&U.inputsError[n].phone)),r.a.createElement(O.a.Group,{controlId:"formEmail"},r.a.createElement(O.a.Label,null,U.label[n].email,":"),r.a.createElement(O.a.Control,{name:"email",type:"email",value:u,onChange:this.handleChange}),r.a.createElement(O.a.Text,{className:"text-muted"},m&&U.inputsError[n].email)),r.a.createElement(O.a.Group,{controlId:"formState"},r.a.createElement(O.a.Label,null,U.label[n].state,":"),r.a.createElement(I,{id:"formState",name:"selectedState",list:g,onSelect:this.handleSelectState}),r.a.createElement(O.a.Text,{className:"text-muted"},"none"===f&&U.inputsError[n].state)),r.a.createElement(O.a.Group,{controlId:"formTimeZone"},r.a.createElement(O.a.Label,null,U.label[n].timezone,":"),r.a.createElement(I,{id:"formTimeZone",name:"selectedTimeZone",list:h,onSelect:this.handleTimeZoneSelect})))),r.a.createElement(w.a,{xs:12,sm:12,md:x?7:12,className:"cus-calendar-wrapper"},r.a.createElement(S.a,{ref:function(t){return e.idleTimer=t},element:document,onActive:this.onActive,onIdle:this.onIdle,onAction:this.onAction,debounce:250,timeout:this.state.timeout}),r.a.createElement(O.a.Label,{className:"date-time-label"},U.label[n].calendar,":"),r.a.createElement(O.a.Label,{className:"timezone-label"},this.getTimeZoneLabel()),r.a.createElement(L,{bordered:P.bordered,arrowColor:P.calendarColorACTIVE},r.a.createElement("div",{className:"arrow"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement(z,{styles:P},r.a.createElement(E.a,{itemWidth:150,slidesPerPage:4,addArrowClickHandler:!0,arrowLeft:r.a.createElement(y.b.Provider,{value:{className:"carouselIcons"}},r.a.createElement(v.b,null)),arrowRight:r.a.createElement(y.b.Provider,{value:{className:"carouselIcons"}},r.a.createElement(v.c,null))},A.map((function(t){var a=D.changeDateFormat(t.ID);return r.a.createElement("div",{key:t.ID,className:"dayContainer"},r.a.createElement("h3",null,N[n][a.getDay()]),r.a.createElement("p",null,t.ID),r.a.createElement("ul",null,t.hours.map((function(a){return r.a.createElement("li",{key:a.ID},r.a.createElement("button",{className:"btnDay ".concat("OFF"===a.status?"btnOFF":"ACTIVE"===a.status?"btnACTIVE":"btnON"),onClick:function(){return e.handleCalendarClick(t.ID,a.title,a.ID)},disabled:"OFF"===a.status},"OFF"!==a.status?a.title:r.a.createElement("span",null,"\xa0")))}))))}))))),r.a.createElement(O.a.Text,{className:"text-muted"},""===b&&U.inputsError[n].calendar))),r.a.createElement(T.a,null,r.a.createElement(w.a,{className:"mt-3 checkbox-wrapper"},r.a.createElement(O.a.Check,{id:"tcpa",type:"checkbox",label:"EN"===n?"By clicking on the Submit and requesting a call back, you acknowledge and agree that you are providing express written consent that ".concat(a," or its affiliated service providers to contact you at the phone number provided above by telephone, Text messages, SMS, MMS, as well as through an auto dialer and prerecorded messages, even if your telephone number is currently listed on any internal, corporate, state or federal Do-Not-Call list. You may unsubscribe at any time by responding as directed in the text message. If you choose not to consent, please do not proceed to click submit. Consent is not required as a condition to utilize ").concat(a," services and you are under no obligation to purchase anything."):"Al hacer clic en Enviar y solicitar una devoluci\xf3n de llamada, usted reconoce y acepta que est\xe1 proporcionando un consentimiento expreso por escrito para que ".concat(a," o sus proveedores de servicios afiliados se comuniquen con usted al n\xfamero de tel\xe9fono proporcionado anteriormente, por tel\xe9fono, mensajes de texto, SMS, MMS, as\xed como a trav\xe9s de un marcador autom\xe1tico y mensajes pregrabados, incluso si su n\xfamero de tel\xe9fono figura actualmente en alguna lista interna, corporativa, estatal o federal de No llamar. Puede darse de baja en cualquier momento respondiendo como se indica en el mensaje de texto. Si elige no dar su consentimiento, no haga clic en enviar. No se requiere el consentimiento como condici\xf3n para utilizar los servicios de ").concat(a," y no tiene la obligaci\xf3n de comprar nada."),checked:p,onChange:this.handleCheckboxCchange}))),!p&&r.a.createElement(T.a,null,r.a.createElement(w.a,{className:"checkbox-wrapper"},r.a.createElement("small",{className:"text-muted form-text pl-4"},U.inputsError[n].tcpa))),r.a.createElement(T.a,null,r.a.createElement(w.a,{style:{textAlign:"center"}},r.a.createElement(k.a,{variant:"primary",type:"submit",disabled:""===o||l||""===i||s||""===c||d||""===u||m||""===b||null===b||null===f||"none"===f||!p,onClick:this.handleFormSubmit},U.cta[n].btnTitle)))),r.a.createElement(C.a,{style:{display:F?"block":"none"}},r.a.createElement(T.a,{style:{padding:30}},r.a.createElement(w.a,null,r.a.createElement("h3",null,"".concat(U.label[n].thankyoutitle," ").concat(o,"!")),r.a.createElement("p",null,"".concat(U.label[n].thankyoumesage," ").concat(c," ").concat("EN"===n?"on":"el"," ").concat(b,". ").concat(U.label[n].thankyoumesage2))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[127,1,2]]]);
//# sourceMappingURL=main.832008ea.chunk.js.map