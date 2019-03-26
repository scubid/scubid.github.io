var svg = dimple.newSvg("#chartContainer2", 590, 400);
d3.csv("netflixshowsdata.csv", function (data) {
       var myChart = new dimple.chart(svg, data);
       myChart.setBounds(95, 25, 475, 335)
       myChart.addCategoryAxis("x", ["rating"]);
       myChart.addCategoryAxis("y", "userRatingScore");
       var z = myChart.addMeasureAxis("z", "userRatingScore");
       var s = myChart.addSeries(["title","rating"], dimple.plot.bubble);
       s.aggregate = dimple.aggregateMethod.max;
       z.overrideMax = 200;
       myChart.addLegend(240, 10, 330, 20, "right");
       myChart.draw();
});
