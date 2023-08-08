document.addEventListener("DOMContentLoaded", function() {
  // Getting data to set up the TOC
  const tocElement = document.getElementById('frbsf-toc');
  const tocData = tocElement?.dataset?.content;

  // When the page is loading the TOC content is not ready (Error handling)
  if (tocData) {
    // Lets get the data from the canvas "data-content" field
    const { heading, listType } = JSON.parse(tocData);
    
    // Loading the TOC
    tableOfContents('.entry-content', '#frbsf-toc', {
      heading,
      listType,
      levels: 'h2', // Change the levels used. Example:  levels: 'h2, h3'
    });
  }
});
