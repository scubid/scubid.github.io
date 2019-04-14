var margin = {top: 20, right: 160, bottom: 50, left: 50};

var width = 960 - margin.left - margin.right,
    height = 550 - margin.top - margin.bottom;

var svg = d3.select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

var parseYear = d3.timeFormat("%Y");

d3.csv("netflixshowsdata.csv", function (data) {

    // Add X axis
    var x = d3.scaleLinear()
        .domain(d3.extent(data, function(d) { return d.releaseYear; }))
        .range([ 0, width ]);

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([55, 100])
        .range([ height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));

    // Add the x Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // text label for the x axis
    svg.append("text")
        .attr("transform",
            "translate(" + (width/2) + " ," +
            (height + margin.top + 20) + ")")
        .style("text-anchor", "middle")
        .text("Release Year");

    // Add the y Axis
    svg.append("g")
        .call(d3.axisLeft(y));

    // text label for the y axis
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("User Rating Score");

    // Color scale: give me a specie name, I return a color
    var color = d3.scaleOrdinal()
        .domain(["TV-Y", "TV-Y7","G", "PG", "PG-13", "TV-14", "TV-MA", "R", "NR" ])
        .range([ "#EFB605", "#E58903", "#E01A25", "#C20049", "#991C71", "#66489F", "#2074A0", "#10A66E", "#7EB852"])

    var circleGroup = div.append("g")
        .attr("class", "circleWrapper");

    // Highlight the species that is hovered
    // Reference: https://www.d3-graph-gallery.com/graph/scatter_grouped_highlight.html
    var highlight = function(d){

        selected = d.rating;

        d3.selectAll(".dot")
            .transition()
            .duration(200)
            .style("fill", "lightgrey")
            .attr("r", 3);

        d3.selectAll("." + selected)
            .transition()
            .duration(200)
            .style("fill", color(selected))
            .attr("r", 7);
    };

    // Highlight the specie that is hovered
    var doNotHighlight = function(){
        d3.selectAll(".dot")
            .transition()
            .duration(200)
            .style("fill", "lightgrey")
            .attr("r", 5 )
    };

    svg.append('g')
        .selectAll("title")
        .data(data.sort(function(a,b) { return b.userRatingScore > a.userRatingScore; })) //Sort so the biggest circles are below
        .enter().append("circle")
        .attr("class", "title")
        .style("opacity", 0.7)
        .style("fill", function(d) {return color(d.rating);})
        .attr("cx", function(d) {return x(d.releaseYear);})
        .attr("cy", function(d) {return y(d.userRatingScore);})
        .attr("data-legend",function(d) { return d.name})
        .attr("r", 10)
        .attr('isSelected', false)
        .on("mouseover", function(d) {
            div.transition()
                .duration(200)
                .style("opacity", .9);
            div.html("Title: " + (d.title) + "<br/>" + "User Rating: " + d.userRatingScore
            + "<br/>" + "Release Year: " + d.releaseYear + "<br/>" + "Rating: " + d.rating)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
        .on("mouseout", function(d) {
            div.transition()
                .duration(500)
                .style("opacity", 0);
        })
        .on("click", function (d) {
        if (d3.select(this).attr('isSelected') == "false") {
            d3.select(this).attr('isSelected', true);
            d3.select(d.rating).attr('isSelected', true);
            highlight()
        } else {
            d3.select(this).attr('selected', false);
            doNotHighlight()
        }

    });
});
