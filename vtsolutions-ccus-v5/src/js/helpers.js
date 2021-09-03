import $ from "cash-dom";
import _compact from 'lodash/compact';
import MessageBox from "message-box";
import Swiper, {Autoplay} from "swiper";
Swiper.use([Autoplay]);

/**
 *
 * @param form
 */
export const setFormIpAddressField = function(form) {

    const url = 'https://api.ipify.org?format=jsonp&callback=getIP';

    window.getIP = function(json) {
        const ip_input_element = '<input type="hidden" name="ip_address" value="' + json.ip + '" />';
        $(form).append(ip_input_element);
    }

    const script = document.createElement('script');
    script.onreadystatechange = function () {
        if (this.readyState === 'complete' || this.readyState === 'loaded') {
            this.onreadystatechange = null;
        }
    };
    script.src = url;
    document.body.appendChild(script);
}

/**
 *
 * @param form
 * @param schema
 * @returns {any}
 */
export const formToJSON = function(form, schema) {
    const str = $(form).serialize();
    let formData = str.split('&')
        .map( x =>  x.split('='))
        .map((field) => {
            const isRequired = schema.get(field[0], 'required') || false;
            const isOptional = schema.get(field[0], 'optional') || false;

            return ((isRequired || isOptional) && field[1] !== '')  ? field : null;
        });

    formData = _compact(formData)
        .reduce((acc, [key, value]) => ({
            ...acc,
            [key]: value && !isNaN(value) && Number(value) < 999999 ? Number(value) : value
        }), {});

    const filesFields = form.querySelectorAll('input[type=file]') || [];
    if (filesFields.length > 0) {
        $(filesFields).each((index, inputElement) => {
            formData['files[]'] = inputElement?.files || [];
        });
    }

    return formData;
}

/**
 *
 * @returns Object
 */
export const queryStringToObjectSval = function() {
    const pairs = window.location.search.substring(1).split("&");
    let obj = {}, pair;

    for (let i in pairs) {
        if (pairs[i] === "") continue;
        pair = pairs[i].split("=");
        obj[decodeURIComponent(pair[0].toLowerCase())] = decodeURIComponent(pair[1]);
    }

    return obj;
}

/**
 *
 * @param form
 */
export const initFormInputRange = function(form) {

    const inputRangeFields = $(form).find('[type=range]');

    $(inputRangeFields).each((index, RangeInput) => {
        RangeInput.addEventListener('input', e => {
            RangeInput.style.setProperty('--val', RangeInput.value);
        }, false);
    });

    const addRangeHtml = (rangeElement) => {
        const tooltip = document.createElement('div');
        const {value: rangeVal} = rangeElement;

        tooltip.classList.add('range-input-tooltip');

        tooltip.innerHTML = `<div class="tooltip-wrapper"><span>${rangeVal}</span></div>`;
        const oldTooltip = rangeElement.parentElement.querySelector('.range-input-tooltip');
        if (oldTooltip) {
            oldTooltip.remove();
        }
        rangeElement.parentElement.insertBefore(tooltip, rangeElement);

        return tooltip;
    }

    const updateRangeData = (rangeElement) => {

        let {value: rangeVal = 0, min = 0, max = 100} = rangeElement;
        // rangeVal = !isNaN(parseFloat(''+rangeVal)) ? 0 : +rangeVal;
        min = parseFloat(''+min) || 0;
        max = parseFloat(''+max) || 100;
        const rangePercentage = ((rangeVal-min) / (max - min)) * 100;
        const tooltipWrapper = rangeElement.tooltip;
        const tooltip = tooltipWrapper.querySelectorAll('span')[0];


        tooltip.textContent = `$${formatMoney(rangeVal,0)}`;
        tooltip.style.left = rangePercentage+"%";
        rangeElement.style.setProperty(`--percentage`, +rangePercentage);

    }

    const calculateLayout = (event) => {
        const {target}  = event;
        updateRangeData(target);
    };

    const rangeElements = $(form).find('input[type=range]');

    $(rangeElements).each((index, rangeElement) => {
        rangeElement.styleID = index;
        rangeElement.tooltip = addRangeHtml(rangeElement);
        rangeElement.addEventListener('input', calculateLayout);
        updateRangeData(rangeElement);
    });
}

export const initFormInputRadio = function(form) {
    const radioInput = $(form).find('[type=radio]');

    if (!radioInput) {
        return false;
    }

    $(radioInput).each(function(index, radioButton) {
        const id = $(radioButton).attr('id');
        const label = $(form).find(`label[for=${id}]`);

        if (label) {
            const newId = `radio-${new Date().getTime()}-${index}`;
            $(radioButton).attr('id', newId);
            $(label).attr('for', newId);
        }
    });
}

export const schemaFields = {
    'en-ca': {
        first_name: 'First Name',
        last_name: 'Last Name',
        primary_phone: 'Phone Number',
        email: 'Email',
        postal_code: 'Postal Code',
        province: 'Province',
        payment_status: 'Payment Status',
        language: 'Language',
        newsletter_opt_in: 'Newsletter',
        files: "Files",
        city: "City",
        collegeOrUniversity: "College or University",
    },
    fr: {
        first_name: 'Le Nom',
        last_name: 'Nom de Famille',
        primary_phone: 'Le Téléphone',
        email: 'Email',
        postal_code: 'Le code postal',
        province: 'La province',
        payment_status: 'Le statut de vos paiements',
        language: 'La langue préférée',
        newsletter_opt_in: 'Boletin informativo',
        files: "Les Fichiers",
        city: "Ville",
        collegeOrUniversity: "Collège ou université",
    },
    es: {
        first_name: 'Nombre',
        last_name: 'Apellido',
        primary_phone: 'Teléfono',
        email: 'Correo Electrónico',
        postal_code: 'Código Postal',
        province: 'Se requiere',
        payment_status: 'Estado de pago',
        language: 'Este campo',
        newsletter_opt_in: 'Bulletin',
        files: "Archivos",
        city: "Ciudad",
        collegeOrUniversity: "Colegio o universidad",
    }
}

export const messageBox = new MessageBox({
    initialLanguage: 'en-ca',
    messages: {
        'en-ca': {
            other: '{{label}}',
            required: '{{label}} is required',
            minString: '{{label}} is not valid',
            maxString: '{{label}} is not valid',
            minNumber: '{{label}} is not valid',
            maxNumber: '{{label}} is not valid',
            minNumberExclusive: '{{label}} is not valid',
            maxNumberExclusive: '{{label}} is not valid',
            minDate: '{{label}} is not valid',
            maxDate: '{{label}} is not valid',
            badDate: '{{label}} is not valid',
            minCount: 'You must specify at least {{minCount}} values',
            maxCount: 'You cannot specify more than {{maxCount}} values',
            noDecimal: '{{label}} is not valid',
            notAllowed: '{{label}} is not valid',
            expectedType: '{{label}} is not valid',
            keyNotInSchema: '{{name}} is not valid',
            regEx: '{{label}} is not valid',
            match: '{{label}} not matching',
        },
        fr: {
            other: '{{label}}',
            required: '{{label}} est requis',
            minString: '{{label}} est invalide',
            maxString: '{{label}} est invalide',
            minNumber: '{{label}} est invalide',
            maxNumber: '{{label}} est invalide',
            minNumberExclusive: '{{label}} est invalide',
            maxNumberExclusive: '{{label}} est invalide',
            minDate: '{{label}} est invalide',
            maxDate: '{{label}} est invalide',
            badDate: '{{label}} est invalide',
            minCount: 'You must specify at least {{minCount}} values',
            maxCount: 'You cannot specify more than {{maxCount}} values',
            noDecimal: '{{label}} est invalide',
            notAllowed: '{{label}} est invalide',
            expectedType: '{{label}}est invalide',
            keyNotInSchema: '{{name}} est invalide',
            regEx: '{{label}} est invalide',
            match: '{{label}} not matching',
        },
        es: {
            other: '{{label}}',
            required: '{{label}} es requerido',
            minString: '{{label}} no es válido',
            maxString: '{{label}} no es válido',
            minNumber: '{{label}} no es válido',
            maxNumber: '{{label}} no es válido',
            minNumberExclusive: '{{label}} no es válido',
            maxNumberExclusive: '{{label}} no es válido',
            minDate: '{{label}} no es válido',
            maxDate: '{{label}} no es válido',
            badDate: '{{label}} no es válido',
            minCount: 'Debes especificar al menos {{minCount}} valores',
            maxCount: 'No puede especificar más de {{maxCount}} valores',
            noDecimal: '{{label}} no es válido',
            notAllowed: '{{label}} no es válido',
            expectedType: '{{label}} no es válido',
            keyNotInSchema: '{{name}} no es válido',
            regEx: '{{label}} no es válido',
            match: '{{label}} no coincide',
        }
    }
});

export const testData = {
    ckm_subid: "96589",
    ckm_subid_2: "",
    ckm_subid_3: "",
    ckm_subid_4: "",
    ckm_subid_5: "",
    country: "ca",
    language: "en",
    language_secondary: "es",
    debtamount: "38000",
    email: "bencheciigor@gmail.com",
    first_name: "Igor",
    last_name: "Bencheci",
    payment_status: "Behind",
    pid: "96589",
    primary_phone: "3022600740",
    province: "ON",
    utm_campaign: "campaignName",
    utm_medium: "medium",
    utm_source: "source",
};

export const getAnalyticsIds = function() {
    let ga_tracking_id = '';
    let ga_client_id = '';

    let tracker = null;

    if (typeof ga !== 'undefined' && typeof ga === 'function') {

        ga(function() {
            tracker = ga.getAll()[0];
            const localStorageTrackingID = localStorage.getItem('tracking_id');

            if (typeof localStorageTrackingID !== 'undefined') {
                ga_tracking_id = localStorageTrackingID;
            }
            else {
                ga_tracking_id = tracker.get('trackingId');
            }

            ga_client_id = tracker.get('clientId');
        });
    }

    return {
        ga_tracking_id,
        ga_client_id
    }
}

export const fetchTickerData = function() {

    const {tickerAction = '', ajax_url = '', settings = {}} = ajaxObject;

    if ($('#ticker-box').length > 0) {
      const formData = new FormData();
      formData.append('action', tickerAction);
      formData.append('lang', settings?.language ?? 'en');

      Fetch(ajax_url, {
        method: 'POST',
        body: formData
      })
          .then(response => response.json())
          .then(response => {
            $("#ticker-box").addClass("visible-ticker");
            $("#dynamic_ticker").html(response.html);
            InitTickerSwiper();
          })
          .catch(error => {
            console.log("error", error);
          });
    }
}

export const InitTickerSwiper = function(){
    const swiperOptions = {
        direction: "vertical",
        speed: 1000,
        loop: true,
        items: 1,
        mouseDrag: false,
        autoplay: {
            delay: 3000,
        },
    };

    $("#ticker-box").addClass("visible-ticker");
    $('#ticker-body .swiper-container').each((index, swiperHtmlElement) => {
        const swiper = new Swiper(swiperHtmlElement, swiperOptions);
    });
}

/**
 *
 * @param number
 * @param decPlaces
 * @param decSep
 * @param thouSep
 * @returns {string}
 */
function formatMoney(number, decPlaces, decSep, thouSep) {
    decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
        decSep = typeof decSep === "undefined" ? "." : decSep;
    thouSep = typeof thouSep === "undefined" ? "," : thouSep;
    var sign = number < 0 ? "-" : "";
    var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
    var j = (j = i.length) > 3 ? j % 3 : 0;

    return sign +
        (j ? i.substr(0, j) + thouSep : "") +
        i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
        (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
}
