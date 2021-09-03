import $ from "cash-dom";
import {initBlocksScripts} from './blocks';
import {InitTickerSwiper} from './helpers';
import {fetch as Fetch} from 'whatwg-fetch';

window.fetch = Fetch;

/**
 * Code to simulate Document Ready js execution
 */
function ready(callbackFunc) {
  if (document.readyState !== 'loading') {
    // Document is already ready, call the callback directly
    callbackFunc();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener('DOMContentLoaded', callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'complete') {
        callbackFunc();
      }
    });
  }
}

/* //////////////////////////////////  AUXILIARY FUNCTIONS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */

ready(function() {

  /**
   ============X Page Scroll Functionality X============================================
   * 1- If (the page is Scrolled Down && Offset is >= 175px )  -> hide the Header
   * 2- If (the page is Scrolled Up   && Offset is === 0px  )  -> show the whole Header
  */
  if (window.innerWidth > 768) {
    //let last_known_scroll_position = 0;
    window.addEventListener('scroll', function (ev) {
      var header = document.getElementById("masthead");
      // Setting up the direction of the page scroll
      var position = window.pageYOffset;


      // Hidding or Showing the Header
      if (position > 175) {
        if (!header.classList.contains("hidden-headerboard")) {
          header.classList.add("hidden-headerboard");
        }
      }else{
        if (header.classList.contains("hidden-headerboard")) {
          header.classList.remove("hidden-headerboard");
        }
      }

      // Updating the value of the scroll
      //last_known_scroll_position = window.scrollY;
    });

  }
  /* ==========X End of Scroll Script  X================================================ */

  /**
   ============X Toggle Modal Open / Close X============================
  */
  var navMenuDiv = document.getElementById("nav-utility");
  var navMenu = document.getElementById("nav-toggle");
  var credibilityModal = document.getElementById('credibility-modal');
  var modal__content = document.getElementById('modal__content');

  document.onclick = check;

  function check(e) {
    var target = e && e.target;
    /* Clicking outside the Modal -> Close the Modal */
    if( !checkParent(target, modal__content) ){
      if (checkParent(target, credibilityModal)) {
        if(document.body.classList.contains('modal-open')){
          closeModal();
        }
      }
    }
  }/* End of check() */

  function checkParent(t, elm) {
    while (t.parentNode) {
      if (t == elm) {
        return true;
      }
      t = t.parentNode;
    }

    return false;
  }
  /* =============X End of Modal Toggle Script  X====================== */


  /**
   ===============X Hangburger Menu Toggle Script X=======================
  */
  let toggleIcon = document.getElementById('hamburger-icon');
  toggleIcon.addEventListener('click', function(e) {
      // hide the hamburger icon and show the X
      var hamburgerIcon = document.getElementById('om-icon');
      var hamburgerXIcon = document.getElementById('cm-icon');
      hamburgerIcon.classList.toggle('hidden');
      hamburgerXIcon.classList.toggle('hidden');

      // variable for affected menu
      var mainMenu = document.getElementById('main-navigation');

      // toggle the hide class
      mainMenu.classList.toggle('hidden');
  });
  /* =============X End of Toggle Search Script  X====================== */


  /*
   ===============X  Gallery with Filter X===================================
  */
  const filterBtn = document.querySelectorAll(".btn-filter");
  const allBtn = document.getElementById("all");
  const galleryItems = document.getElementsByClassName("gallery__item");

  function filterVideos(type) {
    for (let filt of filterBtn) {
      filt.classList.remove('is-checked');
    }

    for (let item of galleryItems) {
      if (item.classList.contains(type)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    }
  }

  if ( filterBtn.length > 0 ) {
    allBtn.addEventListener("click", function () {

      for (let filt of filterBtn) {
        filt.classList.remove('is-checked');
      }
      allBtn.classList.add('is-checked');
      for (let item of galleryItems) {
        if (item.classList.contains("hidden")) {
          item.classList.remove("hidden");
        }
      }
    });

    filterBtn.forEach(item => {
      item.addEventListener('click', event => { event.preventDefault();
        var filter = item.getAttribute('data-filter');
        filterVideos(filter);
        item.classList.add('is-checked');
        allBtn.classList.remove('is-checked');
      })
    });
  }
  /* =============X End of the gallery filter script  X================= */


  /**
   ===============X Modal Script X========================================
  */
  document.querySelectorAll('.activate-modal').forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();

      //For regular modal
      var is_regular_modal = item.getAttribute('data-toggle');
      var is_js_modal = item.getAttribute('data-js') ?? null;
      var content = item.getAttribute('aria-content');
      var initForm = false;

      if (is_regular_modal !== null && is_regular_modal === 'modal'){
        var Modal_title = item.getAttribute('aria-modal-title');
        document.getElementById('svg-container').innerHTML = Modal_title;
        document.getElementById('credibility-modal').classList.add('authority-modal');
      }
      else if (is_js_modal) {
        initForm = true;
        document.getElementById('credibility-modal').classList.add('authority-modal');

        var Modal_title = item.getAttribute('aria-modal-title');
        document.getElementById('svg-container').innerHTML = Modal_title;

        const modalId = item.getAttribute('data-modal-id');
        const modalContent = $(`#${modalId}`)[0];

        content = `<div>${modalContent.innerHTML}</div>`;

      }
      else {
        //Get logo info
        document.getElementById('credibility-modal').classList.remove('authority-modal');

        var identifier = item.getAttribute('aria-identifier');
        var svg_width = item.getAttribute('aria-width');
        var svg = document.getElementById(identifier);
        var svg_clone = svg.cloneNode(true);

        //Add the logo to its wrapper
        var svg_wrapper = document.getElementById('svg-container');
        svg_wrapper.appendChild(svg_clone);
        svg_wrapper.className = '';
        svg_wrapper.classList.add(svg_width);

        //Add info to the modal
        var modalBody = document.getElementById('credModalBody');
        modalBody.classList.add('modal-body');
        modalBody.classList.add('bg-modal-cred-'+identifier);
      }

      //Adding a class to the body to apply the overflow: hidden property
      document.body.classList.add('modal-open');
      document.getElementById('credibility-modal').classList.add('modal-visible');
      document.getElementById('theContent').innerHTML = content;

      /* if (initForm) {
        const schemaForms = document.querySelector(".modal form[type=schema_form]");
        window.initSchemaForms(schemaForms);
      } */

      // Open Feedback Form
      document.querySelectorAll( ".open-feedback-form" ).forEach(item => {
        item.addEventListener('click', event => {
          document.querySelectorAll( ".open-feedback-form" ).forEach(eitem => {
            eitem.classList.remove('selected');
          });

          item.classList.add('selected');

          var feedback_label = item.getAttribute('data-message');
          var feedback_title = item.getAttribute('data-option');

          var feedback_form = document.getElementById('feedback-form');
          feedback_form.classList.remove('hidden');

          document.getElementById('feedback-title').innerHTML = feedback_label;
          document.getElementById('article_helpful_reason').value = feedback_title;
        })
      });
      //End of Feedback form

      if( document.getElementById('submit-feedback') ){
        document.getElementById('submit-feedback').addEventListener('click', e =>{
            e.preventDefault();

            var request = new XMLHttpRequest();
            request.open('POST', ajaxObject.ajax_url, true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            request.onload = function () {
                if (this.status >= 200 && this.status < 400) {
                    /* if (this.response.indexOf('already') !== -1) {
                        if (this.response.replace('already', '') === '0') {
                            likeLabel = ajaxObject.likelabel;
                        }
                        like.classList.remove('liked');
                        like.innerHTML = '<svg class="lnr lnr-heart"><use xlink:href="#lnr-heart"></use></svg> ' + likeLabel;
                    } else {
                        likeLabel = ajaxObject.unlikelabel;
                        like.classList.add('liked');
                        like.innerHTML = '<svg class="lnr lnr-heart"><use xlink:href="#lnr-heart"></use></svg> ' + likeLabel;
                    } */

                    console.log('SUCCESS');

                    // Hidding the Voting Option from the bottom of the page
                    var fbWrapper = document.getElementById('feedback-wrapper');
                    fbWrapper.classList.remove('flex');
                    fbWrapper.classList.add('hidden');

                    var fbThanks = document.getElementById('feedback-thankyou');
                    fbThanks.classList.remove('hidden');
                    fbThanks.classList.add('flex');

                    closeModal();
                } else {
                    // Response error
                    console.log('RESPONSE ERRORS');
                }
            };
            request.onerror = function() {
                // Connection error
                console.log('ERRORS');
            };
            request.send('action=processPostAjaxCall&feedback-title=' + document.getElementById('article_helpful_reason').value + '&feedback-comment=' + document.getElementById('feedback-comment').value + '&user-name=' + document.getElementById('feedback-name').value + '&user-email=' + document.getElementById('feedback-email').value);
        });

      }//End of condition


    })
  });//End of activate-modal code

  document.getElementById("close-modal").addEventListener('click', event => {
    closeModal();
  });


  function closeModal() {
    var credibility_modal = document.getElementById('credibility-modal');
    credibility_modal.classList.remove('authority-modal');
    credibility_modal.classList.remove('modal-visible');
    document.getElementById('credModalBody').className = '';
    document.getElementById('svg-container').innerHTML = '';
    document.getElementById('svg-container').className = '';
    document.getElementById('theContent').innerHTML = '';
    document.body.classList.remove("modal-open");
  }
  /* ===============X End of Modal Script X============================= */

  //Showing search spinner after Submit
  document.getElementById('main_search_form').addEventListener('submit', function(e) {
    document.getElementById('search-spinner').classList.remove('hidden');
  });


  /**
   =========X Open Feedback Form in the Modal X=================================================
  */
  document.querySelectorAll( ".open-feedback-form" ).forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();

      var feedback_form = document.getElementById('feedback-form');
      feedback_form.classList.remove('hidden');
    })
  });
  /* ===============X End of Modal Script X==================================================== */


  /**
   =========X Function to change a tumbnail of youtube by an iframe with the video X=============
  */
    ( function() {
        var videos = document.querySelectorAll( ".youtube_vimeo" );

        for (var i = 0; i < videos.length; i++) {
            var source = videos[i].dataset.image; //image url

            var image = new Image();
                image.src = source;
                image.alt = "Default image preview url: "+source;
                image.addEventListener( "load", function() {
                    videos[ i ].appendChild( image );
                }( i ), {passive: true} );

                videos[i].addEventListener( "click", function() {
                    var iframe = document.createElement( "iframe" );

                    iframe.setAttribute( "frameborder", "0" );
                    iframe.setAttribute( "allowfullscreen", "" );

                    if( this.dataset.type === 'vimeo' ){
                        iframe.setAttribute( "src", "https://player.vimeo.com/video/"+ this.dataset.embed +"?autoplay=1&color=00ADEF&byline=0&portrait=0" );
                    }else{
                        iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
                    }

                    this.innerHTML = "";
                    this.appendChild( iframe );
                }, {passive: true} );
        };

    } )();
    /* ===============X End of media Youtube|Vimeo Video script X======================= */

    /**
     =================X Script to show Video Transcript Accordion X=======================
    */
    document.addEventListener("click", function(e) {
      if (e.target && e.target.matches('.accordion-toggle')) {
        var toggle = e.target;
        var target = document.querySelector('[data-id="' + toggle.dataset.target + '"]');
        accordionToggle(toggle, target, 0);
      }
    });

    function accordionToggle(toggle, target, min) {
      const content = target.firstElementChild;
      const height = content.clientHeight;

      if (toggle.classList.contains('open')) {
        toggle.classList.remove('open');
        target.style.maxHeight = min + "px";
      } else {
        toggle.classList.add('open');
        target.style.maxHeight = height + "px";
      }
    }
    /* ===============X Script to show Video Transcript Accordion X===================== */

});
/* ================= End of ready() execution ========================================== */


/**
 * PAGE LOADED EVENTS
 */
window.addEventListener('load', function() {
  initBlocksScripts();
  InitTickerSwiper();
  window.initSchemaForms();
});
