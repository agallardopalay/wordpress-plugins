
document.addEventListener("DOMContentLoaded", function() {
  const doughnutChart = document.getElementById('custom-doughnut-chart');
  const chartContent = doughnutChart?.dataset?.content;

  // When the page is loading the dataset content is not ready (Error handling)
  if (chartContent) {
    // Lets get the data from the canvas "data-content" field
    const data = JSON.parse(chartContent);
    // Hide the doughnut's legend
    const option = {
      plugins: {
        legend: {
          display: false
        },
      },
    };
  
    new Chart(doughnutChart, {
      type: 'doughnut',
      data,
      options: option,
    });
  }
});
