var svg = dimple.newSvg("#chartContainer", 590, 400);
d3.csv("netflixshowsdata.csv", function (data) {
       var myChart = new dimple.chart(svg, data);
       myChart.setBounds(65, 30, 505, 330);
       myChart.addCategoryAxis("x", ["rating"]);
       myChart.addMeasureAxis("y", "userRatingScore");
       myChart.addMeasureAxis("z", "userRatingSize");
       myChart.addSeries("rating", dimple.plot.bubble);
       myChart.addLegend(70, 10, 510, 20, "right");
       myChart.draw();
});
