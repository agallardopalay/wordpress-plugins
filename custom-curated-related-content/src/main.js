window.addEventListener("load", (event) => {
  var hiddenArticles = document.querySelectorAll(".custom-curated-related-content-article.hidden");
  var btn = document.querySelector(".custom-view-more-btn");
  if(btn) {
    btn.addEventListener("click", function () {
      if(hiddenArticles) {
        hiddenArticles.forEach((element) => {
          element.classList.add('visible');
        });

        btn.classList.add('hidden');
      }
    });
  }
});
