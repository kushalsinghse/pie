google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['apps', 'top'],
          ['facebook', 20],
          ['youtube',  9],
          ['google',  4],
          ['google map', 3],
          ['instagram',    2]
        ]);

        var options = {
          title: 'top apps'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }