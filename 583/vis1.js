var svg = dimple.newSvg("#chartContainer", 700, 500);
d3.csv("netflixshowsdata.csv", function (data) {
        var myChart = new dimple.chart(svg, data);
        myChart.setBounds(95, 25, 475, 335)
        myChart.addCategoryAxis("x", ["releaseYear"]);
        myChart.addCategoryAxis("y", "userRatingScore");
        var z = myChart.addMeasureAxis("z", "userRatingScore");
        var s = myChart.addSeries(["title","rating"], dimple.plot.bubble);
        s.aggregate = dimple.aggregateMethod.max;
        z.overrideMax = 500;
        myChart.addLegend(240, 10, 330, 20, "right");
        myChart.assignColor("TV-MA", "orange", "black", 1);
        myChart.assignColor("PG", "blue", "black", 1);
        myChart.assignColor("PG-13", "purple", "black", 1);
        myChart.assignColor("TV-14", "pink", "black", 1);
        myChart.assignColor("G", "green", "black", 1);
        myChart.assignColor("R", "red", "black", 1);
        myChart.assignColor("NR", "grey", "black", 1);
        myChart.draw();
});
