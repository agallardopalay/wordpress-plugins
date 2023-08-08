window.addEventListener( 'DOMContentLoaded', () => {
  // Stop the video and close the modal by removing the modal wrapper from the DOM
  const closeVideoModal = () => {
    const wrapper = document.getElementById("custom-video-lightbox__wrap");
    wrapper.parentNode.removeChild(wrapper);
  };
  // Keyboard event listener for Accessibility
  const modalKeyboardEvent = (e) => {
    if (e.key === "Tab") {
      const focus = document.activeElement;
      if(focus === firstElementFocus && e.shiftKey) {
        e.preventDefault();
        lastElementFocus.focus();
      } else if(focus === lastElementFocus && !e.shiftKey) {
        e.preventDefault();
        firstElementFocus.focus();
      }
    } else if (e.key === "Escape") {
      closeVideoModal();
    }
  };

  document.querySelectorAll('.custom-video-lightbox__play--video').forEach((d) => d.addEventListener("click", playVideos));
  const body = document.body;

  function playVideos(e) {
    initVideoPlayer(e.currentTarget.dataset.url);

    var lvideoWrap = document.createElement("DIV");
    lvideoWrap.setAttribute("id", "custom-video-lightbox__wrap");
    document.body.appendChild(lvideoWrap);

    // Adding accessibility properties to the Modal
    const wrapper = document.getElementById("custom-video-lightbox__wrap");
    wrapper.setAttribute("role", "dialog");
    wrapper.setAttribute('aria-modal', 'true');
    const modalTitleId = 'custom-video-lightbox__modalTitle';
    wrapper.setAttribute('aria-labelledby', modalTitleId);
    const modalContentId = 'custom-video-lightbox__modalContent';
    wrapper.setAttribute('aria-describedby', modalContentId);

    wrapper.classList.add("active");
    const modalTitleElement = `<h2 id="${modalTitleId}" class="custom-screen-readers-only">Lightnox video title</h2>`;
    const startModal = `<span class="custom-video-lightbox__modal--overlay"></span> <div role="document" id="${modalContentId}" class="custom-video-lightbox__content--container">${modalTitleElement}`;
    const finishModal = `</div><button class="custom-video-lightbox__button--close"><span class="custom-screen-readers-only">Click here to close the modal</span></button>`;
    
    const url = this.dataset.url;
    // Adding Youtube iframe
    if (url.indexOf("youtube") !== -1) {
      const youtubeUrl = [this.dataset.url];

      var i,
        r,
        regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;

      for (i = 0; i < youtubeUrl.length; ++i) {
        r = youtubeUrl[i].match(regExp);

        document.getElementById(
          "custom-video-lightbox__wrap"
        ).innerHTML = `${startModal}<iframe width="560" height="315" title="YouTube Video" src='https://www.youtube.com/embed/${r[1]}?rel=0&autoplay=1&mute=1&loop=1&playlist=${r[1]}' frameborder="0" allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>${finishModal}`;
      }

    // Adding Vimeo iframe
    } else if (url.indexOf("vimeo") !== -1) {
      const vimeoURL = this.dataset.url;
      const regExp = /https:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;
      const match = vimeoURL.match(regExp);

      if (match) {
        document.getElementById(
          "custom-video-lightbox__wrap"
        ).innerHTML = `${startModal}<iframe title="Vimeo" src="https://player.vimeo.com/video/${match[2]}?autoplay=1&loop=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>${finishModal}`;
      } else {
        console.error("Not a Vimeo video! please check the video ID");
      }
    }

    // Setting up the focus inside the Modal
    const focusableElements = lvideoWrap.querySelectorAll('a[href], input, button, iframe, [tabindex="0"]');
    firstElementFocus = focusableElements[0];
    lastElementFocus = focusableElements[focusableElements.length - 1];

    firstElementFocus.focus();
    window.addEventListener("keydown", modalKeyboardEvent, true);

    // Close modal when clicking on the closing icon or outside of the modal
    document.querySelectorAll('.custom-video-lightbox__modal--overlay, .custom-video-lightbox__button--close').forEach((e) => e.addEventListener('click', closeVideoModal));
  }

  // Lunch the Video lightbox
  function initVideoPlayer(){}

} );
