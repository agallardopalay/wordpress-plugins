(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a(228)},226:function(e,t,a){},227:function(e,t,a){},228:function(e,t,a){"use strict";a.r(t);a(101);var n=a(0),o=a.n(n),r=a(96),s=a.n(r),l=a(36),i=a(37),m=a(98),d=a(97),u=a(99),c=a(25),h=a.n(c),p=function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,null,[{key:"removeMoneyTrash",value:function(e){return e.replace("$","").replace(",","")}},{key:"cleanNumberInput",value:function(e){return/^-?\d*[.,]?\d*$/.test(e)}},{key:"valueIsInteger",value:function(e){return/^\d*$/.test(e)&&!/^0\d+$/.test(e)}},{key:"formatMoney",value:function(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}},{key:"getDateFromNumberOfMonths",value:function(e,t){function a(e,t){return 1===e?t.one:t.other}var n=e%12,o=Math.floor(e/12),r=[];return o&&r.push(o+" "+a(o,{en:{one:"year",other:"years"},es:{one:"a\xf1o",other:"a\xf1os"},ca:{one:"year",other:"years"},fr:{one:"year",other:"years"}}[t])),n&&r.push(n+" "+a(n,{en:{one:"month",other:"months"},es:{one:"mes",other:"meses"},ca:{one:"month",other:"months"},fr:{one:"month",other:"months"}}[t])),r.join({en:" and ",es:" y "}[t])}},{key:"roundTo",value:function(e,t){var a=!1;void 0===t&&(t=0),e<0&&(a=!0,e*=-1);var n=Math.pow(10,t);return e=parseFloat((e*n).toFixed(11)),e=(Math.round(e)/n).toFixed(2),a&&(e=(-1*e).toFixed(2)),e}},{key:"countDecimalPlaces",value:function(e){var t=""+e,a=t.indexOf(".");return a>=0?t.length-a-1:0}}]),e}(),y={en:{sectionTitletext:"Find out how much you could save",sectionSubtitletext:"Just tell us how much you owe, in total, and we\u2019ll estimate your new consolidated monthly payment.",inputDebtLabel:"Debt Amount",inputDebtPlaceholder:"Enter Amount",monthtext:"month",perMonth:"per month",monthPluralText:"months",yearText:"year",yearPluralText:"years",debtInputError:"Debt Amount should be greather than 0.",btnAriaLabel:"Get Your Savings Results",btnTitle:"See Savings",youCanSaveText:"YOU CAN SAVE!",timePayFullText:"Time to Pay in Full:",totalInterestText:"Total Interest",totalCostandIntrestText:"Total cost, including interest",ctaLabel:"Get Started Today",callText:"Call",nowText:"now",dontwait1:"Don\u2019t want to wait to get the help you need?",dontwait2:"See if you qualify and sign up without delay, so you can start getting relief today.",credUWText:"Member of United Way\u2019s Chairman\u2019s Circle",withThisDebtText:"With this amount of debt, you\u2019d save around",dmpComparisonText:"On our Debt Management Program (DMP)",forQualifiedHelpedText:"For qualified program applicants, our counseling team negotiates with your creditors for reduced payments, reduced and eliminated interest and to stop penalties.",withDMPText:"With a DMP",onlyMinimumPaymentsText:"Minimum Payments Only",newDMPText:"New DMP Payment",estimatedMonthlySavingsText:"Estimated Savings",timeSavedText:"Time Saved",overallSaving:"Overall Savings",savedText:"Saved",totalAmountSaved:"Total amount saved",youSaveText:"You Save",loadingText:"Loading...",disclaimer:"* This DMP estimate compares paying your minimum credit card debt payments on your own vs. the potential benefit of using a Debt Management Plan through completion. IT\u2019S NOT AN ACTUAL QUOTE. The DMP Estimate is based on 2.15% of your balance owed. Actual interest rates will vary by consumer and creditor \u2013 yours could be higher or lower. Consolidated Credit might be able to reduce your interest rates and late fees allowing you to pay off your credit card debt quicker (since more payments are applied to your principal balances, saving you lots of money in the long run). To complete the program, you must make on-time payments each month. Late or missed payments may cause your program to be canceled and in that event, this estimate would not apply to you."},es:{sectionTitletext:"Vea cu\xe1nto m\xe1s usted puede ahorrar",sectionSubtitletext:"D\xedganos cu\xe1nto es el monto total de sus deudas, y nosotros le prepararemos un estimado de cu\xe1nto ser\xe1n sus pagos si consolida sus deudas.",inputDebtLabel:"Deuda",inputDebtPlaceholder:"Entre su Deuda",monthtext:"mes",perMonth:"por mes",monthPluralText:"meses",yearText:"a\xf1o",yearPluralText:"a\xf1os",debtInputError:"El valor de su deuda debe ser mayor que 0.",btnAriaLabel:"Obtenga los resultados de ahorro",btnTitle:"Calcular Ahorros",youCanSaveText:"USTED PUEDE AHORRAR!",timePayFullText:"Tiempo para Pagar:",totalInterestText:"Total de Intereses",totalCostandIntrestText:"Costo total con intereses incluidos",ctaLabel:"Comience Hoy",callText:"LL\xe1manos",nowText:"hoy",dontwait1:"\xbfNo quieres esperar para obtener la ayuda que necesitas?",dontwait2:"Vea si califica e inscr\xedbase sin demora para que pueda comenzar a recibir alivio de su deuda hoy.",credUWText:"Miembro del C\xedrculo del Presidente de United Way",credBBBText:"Consolidted Credit tiene una calificaci\xf3n A+ con el Better Business Bureau",withThisDebtText:"Con esta deuda, ud. podr\xe1 ahorrar alrededor de",dmpComparisonText:"Con nuestro Programa de Manejo de Deudas (DMP)",forQualifiedHelpedText:"Para las personas que califiquen al programa, nuestro equipo de consejer\xeda negociar\xe1 con sus acreedores para reducir los pagos o eliminar los intereses y parar las penalidades por pagos atrasados.",withDMPText:"Con el Programa (DMP)",onlyMinimumPaymentsText:"Pagos M\xednimos Solamente",newDMPText:"Nuevos pagos con DMP",estimatedMonthlySavingsText:"Estimado de Ahorros Mensuales",timeSavedText:"Tiempo Ahorrado",overallSaving:"Ahorro Estimado",savedText:"Ahorrados",totalAmountSaved:"Cantidad total ahorrado",youSaveText:"Ud. Ahorra",loadingText:"Cargando...",disclaimer:"* Este c\xe1lculo compara el pago de su deuda de tarjeta de cr\xe9dito por su cuenta frente al beneficio potencial de utilizar un Plan de gesti\xf3n de deuda hasta su finalizaci\xf3n. NO ES UNA CITA REAL. La estimaci\xf3n se basa en el 2.15% de su saldo adeudado. Las tasas de inter\xe9s reales variar\xe1n seg\xfan el consumidor y el acreedor; el suyo podr\xeda ser mayor o menor. Consolidated Credit podr\xeda reducir sus tasas de inter\xe9s y cargos por pagos atrasados, lo que le permite cancelar su deuda de tarjeta de cr\xe9dito m\xe1s r\xe1pidamente (ya que se aplican m\xe1s pagos a sus saldos de principal, lo que le ahorra mucho dinero a largo plazo). Para completar el programa, debe hacer pagos puntuales cada mes. Los pagos atrasados o perdidos pueden causar que su programa sea cancelado y en ese caso, este estimado no se aplica a usted."},ca:{sectionTitletext:"Find out how much you could save",sectionSubtitletext:"Just tell us how much you owe, in total, and we\u2019ll estimate your new consolidated monthly payment.",inputDebtLabel:"Debt Amount",inputDebtPlaceholder:"Enter Amount",monthtext:"month",perMonth:"per month",monthPluralText:"months",yearText:"year",yearPluralText:"years",debtInputError:"Debt Amount should be greather than 0.",btnAriaLabel:"Get Your Savings Results",btnTitle:"See Savings",youCanSaveText:"YOU CAN SAVE!",timePayFullText:"Time to Pay in Full:",totalInterestText:"Total Interest",totalCostandIntrestText:"Total cost, including interest",ctaLabel:"Get Started Today",callText:"Call",nowText:"now",dontwait1:"Don\u2019t want to wait to get the help you need?",dontwait2:"See if you qualify and sign up without delay, so you can start getting relief today.",credUWText:"Member of United Way\u2019s Chairman\u2019s Circle",credBBBText:"Consolidated Credit Carries an A+ rating by the Better Business Bureau",withThisDebtText:"With this amount of debt, you\u2019d save around",dmpComparisonText:"On our Debt Management Program (DMP)",forQualifiedHelpedText:"For qualified program applicants, our counselling team negotiates with your creditors for reduced payments, reduced or eliminated interest and to stop penalties.",withDMPText:"With a DMP",onlyMinimumPaymentsText:"Minimum Payments Only",newDMPText:"New DMP Payment",estimatedMonthlySavingsText:"Estimated Monthly Savings",timeSavedText:"Time Saved",overallSaving:"Overall Savings",savedText:"Saved",totalAmountSaved:"Total amount saved",youSaveText:"You Save",loadingText:"Loading...",disclaimer:"* This DMP estimate compares paying your minimum credit card debt payments on your own vs. the potential benefit of using a Debt Management Plan through completion. IT\u2019S NOT AN ACTUAL QUOTE. The DMP Estimate is based on 2.50% of your balance owed. Actual interest rates will vary by consumer and creditor \u2013 yours could be higher or lower. Consolidated Credit might be able to reduce your interest rates and late fees allowing you to pay off your credit card debt quicker (since more payments are applied to your principal balances, saving you lots of money in the long run). To complete the program, you must make on-time payments each month. Late or missed payments may cause your program to be cancelled and in that event, this estimate would not apply to you."},fr:{sectionTitletext:"Find out how much you could save",sectionSubtitletext:"Just tell us how much you owe, in total, and we\u2019ll estimate your new consolidated monthly payment.",inputDebtLabel:"Debt Amount",inputDebtPlaceholder:"Enter Amount",monthtext:"Month",perMonth:"per month",monthPluralText:"months",yearText:"year",yearPluralText:"years",debtInputError:"Debt Amount should be greather than 0.",btnAriaLabel:"Get Your Savings Results",btnTitle:"See Savings",youCanSaveText:"YOU CAN SAVE!",timePayFullText:"Time to Pay in Full:",totalInterestText:"Total Interest",totalCostandIntrestText:"Total cost, including interest",ctaLabel:"Get Started Today",callText:"Call",nowText:"now",dontwait1:"Don\u2019t want to wait to get the help you need?",dontwait2:"See if you qualify and sign up without delay so you can start getting relief today.",credUWText:"Member of United Way\u2019s Chairman\u2019s Circle",credBBBText:"Consolidated Credit Carries an A+ rating by the Better Business Bureau",withThisDebtText:"With this amount of debt, you\u2019d save around",dmpComparisonText:"On our Debt Management Program (DMP)",forQualifiedHelpedText:"For qualified program applicants, our counseling team negotiates with your creditors for reduced payments, reduced or eliminated interest and to stop penalties.",withDMPText:"With A DMP",onlyMinimumPaymentsText:"Minimum Payments Only",newDMPText:"New DMP Payment",estimatedMonthlySavingsText:"Estimated Monthly Savings",timeSavedText:"Time Saved",overallSaving:"Overall Savings",savedText:"Saved",totalAmountSaved:"Total amount saved",youSaveText:"You Save",loadingText:"Loading...",disclaimer:"* This DMP estimate compares paying your minimum credit card debt payments on your own vs. the potential benefit of using a Debt Management Plan through completion. IT\u2019S NOT AN ACTUAL QUOTE. The DMP Estimate is based on 2.50% of your balance owed. Actual interest rates will vary by consumer and creditor \u2013 yours could be higher or lower. Consolidated Credit might be able to reduce your interest rates and late fees allowing you to pay off your credit card debt quicker (since more payments are applied to your principal balances, saving you lots of money in the long run). To complete the program, you must make on-time payments each month. Late or missed payments may cause your program to be cancelled and in that event, this estimate would not apply to you."}};a(226);var g=function(e){var t=e.id,a=e.label,n=e.value,r=e.placeholder,s=e.errorMsg,l=e.errorOccur,i=e.onChange;return o.a.createElement("div",{id:"div4".concat(t),className:"bp-input-group"},o.a.createElement("div",{className:"mb-3 mt-3"},o.a.createElement("label",{htmlFor:t,className:"sr-only"},a),o.a.createElement("div",{className:"input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text",id:"inputGroupPrepend"},o.a.createElement("i",{className:"fal fa-dollar-sign"}))),o.a.createElement("input",{id:t,name:t,className:"form-control",placeholder:r,value:n,onChange:i}),o.a.createElement("span",{className:"error",style:{display:l?"block":"none"}},s))))},b=(a(227),function(e){function t(e){var a,n;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handlerDebtChange=function(e){var t=p.removeMoneyTrash(e.target.value);p.valueIsInteger(t)&&t<1e6&&a.setState({debt:t,tableResults:[],debtManagementResults:null})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.debt,n="ca"===a.props.lan||"fr"===a.props.lan?"2.5":"3";if(t){var o="https://calculator-api-bk.debt.com/api/v1",r=o+"/validatePayments/"+t+"/18/"+n+"/25",s=o+"/getPayments/"+t+"/18/"+n+"/25",l=o+"/debtmanagement/"+t+"/8/1";a.setState({loading:!0,tableResults:[],debtManagementResults:null},function(){h.a.get(r).then(function(e){e.data.payments?h.a.all([h.a.get(s),h.a.get(l)]).then(h.a.spread(function(e,t){var n=a.state.phoneNumber;document.getElementsByClassName("tracking-phone").length?n=document.getElementsByClassName("tracking-phone")[0].innerText:document.getElementsByClassName("ShowPhoneNumber").length&&(n=document.getElementsByClassName("ShowPhoneNumber")[0].innerText),document.getElementsByClassName("notracking-phone").length&&(n=document.getElementsByClassName("notracking-phone")[0].innerText),a.setState({tableResults:e.data,debtManagementResults:t.data,phoneNumber:n,apiError:!1,loading:!1})})).catch(function(e){console.log(e),a.setState({tableResults:[],debtManagementResults:null,loading:!1})}):a.setState({tableResults:[],debtManagementResults:null,apiError:!0,loading:!1})}).catch(function(e){return console.log(e),a.setState({tableResults:[],debtManagementResults:null,loading:!1}),{success:!1}})})}},a.calculateSaving=function(){var e=a.state,t=e.tableResults,n=e.debtManagementResults,o=0;return t.length&&n&&(o=parseFloat(t[0].minimumPayment)-parseFloat(n.monthlyPayment),o=p.roundTo(o,2)),o},a.renderResult=function(){var e,t=a.state,n=t.debt,r=t.tableResults,s=t.debtManagementResults,l=parseInt(r[r.length-1].month)-parseInt(s.numberOfMonths),i=parseFloat(s.totalAmountPaid),m=parseFloat(r[r.length-1].totalInterest)+parseFloat(n);e=p.roundTo(m-i,2);var d=a.calculateSaving();return!(l<=0||e<=0)&&o.a.createElement("table",{className:"dmp-table-result"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{className:"text-right td-left"},a.translations.onlyMinimumPaymentsText),o.a.createElement("td",{className:"text-left td-right"},"$",r.length?p.formatMoney(r[0].minimumPayment):0,r.length&&1===p.countDecimalPlaces(r[0].minimumPayment)&&"0",r.length&&0===p.countDecimalPlaces(r[0].minimumPayment)?".00":"","/ ",a.translations.monthtext)),o.a.createElement("tr",null,o.a.createElement("td",{className:"text-right td-left"},a.translations.newDMPText,"*"),o.a.createElement("td",{className:"text-left td-right"},"$",null!==s?p.formatMoney(s.monthlyPayment):0," / ",a.translations.monthtext)),o.a.createElement("tr",null,o.a.createElement("td",{className:"text-right td-left"},o.a.createElement("strong",null,a.translations.estimatedMonthlySavingsText)),o.a.createElement("td",{className:"text-left td-right"},o.a.createElement("strong",null,"$ ",r.length?p.formatMoney(d):0,r.length&&1===p.countDecimalPlaces(d)&&"0",r.length&&0===p.countDecimalPlaces(d)?".00":""," / ",a.translations.monthtext))),o.a.createElement("tr",null,o.a.createElement("td",{className:"text-right td-left"},a.translations.timeSavedText),o.a.createElement("td",{className:"text-left td-right"},p.getDateFromNumberOfMonths(l,a.props.lan))),o.a.createElement("tr",{className:"bg-color-lightblue overall-row-result"},o.a.createElement("td",{className:"text-right td-left"},a.translations.overallSaving),o.a.createElement("td",{className:"text-left td-right"},"$",p.formatMoney(e)))))},a.translations=(n=a.props.lan,y[n]),a.state={debt:"-",phoneNumber:e.phoneNumber,loading:!1,tableResults:[],debtManagementResults:null,apiError:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"renderSpiner",value:function(){return o.a.createElement("div",{className:"lds-ring"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}},{key:"render",value:function(){var e=this.state,t=e.tableResults,a=e.debtManagementResults;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"dmp-calc-heading"},o.a.createElement("h2",{className:"fancy-title color-white mb-4"},o.a.createElement("span",{className:"color-white"},this.translations.sectionTitletext)),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-8 offset-md-2"},o.a.createElement("p",null,this.translations.sectionSubtitletext)))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4 offset-md-4"},o.a.createElement("form",{name:"formDebt",id:"dmp_v3_comparison",noValidate:"novalidate",onSubmit:this.handleSubmit.bind(this)},o.a.createElement(g,{id:"dmpV3InputID",label:this.translations.inputDebtLabel,value:"-"!==this.state.debt?p.formatMoney(this.state.debt):"",placeholder:this.translations.inputDebtPlaceholder,errorOccur:Number(this.state.debt)<1||Number(this.state.debt)>999999||""===this.state.debt?1:0,errorMsg:this.translations.debtInputError,onChange:this.handlerDebtChange}),o.a.createElement("div",{className:"text-center"},o.a.createElement("button",{id:"dmpSubmitDebt",type:"submit",className:"btn btn-primary pl-4 pr-4","aria-label":this.translations.btnAriaLabel,disabled:Number(this.state.debt)<1||Number(this.state.debt)>999999||""===this.state.debt||"-"===this.state.debt?1:0},this.translations.btnTitle))))),o.a.createElement("div",{className:"loader-spiner-dmp",style:{display:this.state.loading?"block":"none"}},this.renderSpiner(),o.a.createElement("p",null,this.translations.loadingText)),o.a.createElement("div",{id:"debtV3ResultWrap",className:null!==a?"active":""},o.a.createElement("div",{className:"dmp-bg dmp-nobg"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col text-center"},o.a.createElement("div",{className:"dmp-cred-logos"},o.a.createElement("div",{className:"logos-parent cred-uw-parent"},o.a.createElement("span",{className:"sprite cred-uw","aria-label":this.translations.credUWText,title:this.translations.credUWText}),o.a.createElement("span",{className:"sr-only"},this.translations.credUWText)),o.a.createElement("div",{className:"logos-parent cred-bbb-parent"},o.a.createElement("span",{className:"sprite cred-bbb","aria-label":this.translations.credBBBText,title:this.translations.credBBBText}),o.a.createElement("span",{className:"sr-only"},this.translations.credBBBText))),o.a.createElement("div",{className:"savings-head"},this.translations.youCanSaveText),o.a.createElement("p",null,this.translations.withThisDebtText),o.a.createElement("div",{className:"savings-per-month"},"$",t.length?p.formatMoney(this.calculateSaving()):0,t.length&&1===p.countDecimalPlaces(this.calculateSaving())&&"0",t.length&&0===p.countDecimalPlaces(this.calculateSaving())?".00":""," ",this.translations.perMonth),o.a.createElement("p",null,o.a.createElement("strong",null,this.translations.dmpComparisonText)),o.a.createElement("div",{className:"dmp-quilify-help-text"},this.translations.forQualifiedHelpedText),o.a.createElement("div",{className:"row justify-content-center no-gutters debt-analyzer-results text-center"},null!==a?this.renderResult():"")),o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{id:"debtSavings",className:"text-center"},o.a.createElement("div",{className:"dmp-lead-button ml-0 p-0"},this.props.ctaOpenModal?o.a.createElement("a",{id:"dmpFormStart",href:this.props.ctaID,"data-toggle":"modal",className:"btn btn-primary"},this.translations.ctaLabel," ",o.a.createElement("i",{className:"far fa-arrow-circle-right"})):o.a.createElement("a",{href:this.props.ctaID,className:"btn btn-primary"},this.translations.ctaLabel," ",o.a.createElement("i",{className:"far fa-arrow-circle-right"}))),o.a.createElement("div",{className:"text-center mt-2"},this.translations.dontwait1,o.a.createElement("br",null),o.a.createElement("strong",{className:"bigstrong"},this.translations.callText," ",o.a.createElement("a",{className:"bigPhoneBlock no-tracking-phone-click",href:"tel:+1".concat(this.state.phoneNumber)},o.a.createElement("span",{className:"tracking-phone"},this.state.phoneNumber))," ",this.translations.nowText,"!"),o.a.createElement("br",null),this.translations.dontwait2)),o.a.createElement("div",{className:"disclaimer"},this.translations.disclaimer))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));!function(e){e.VTDMP_V3_Calculator={init:function(e){var t=e.selector,a=void 0===t?"vtDMP_V3calc":t,n=e.lan,r=void 0===n?"en":n,l=e.ctaID,i=void 0===l?"#LeadForm":l,m=e.ctaOpenModal,d=void 0===m||m,u=e.phoneNumber,c=void 0===u?"1-800-320-9929":u,h=o.a.createElement(b,{lan:r,ctaID:i,ctaOpenModal:d,phoneNumber:c});s.a.render(h,document.getElementById(a))}}}(window),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[100,1,2]]]);
//# sourceMappingURL=main.e89e081a.chunk.js.map