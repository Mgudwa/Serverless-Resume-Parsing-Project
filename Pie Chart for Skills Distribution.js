const pieCtx = document.getElementById('skillsPieChart').getContext('2d');
new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['AWS', 'Python', 'Linux'], // Example labels
    datasets: [{
      data: [5, 4, 3], // Example data
      backgroundColor: ['#1E90FF', '#32CD32', '#FFA500'],
    }]
  }
});
