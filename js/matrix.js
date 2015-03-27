

d3.json("data/valid.json", function(data) {


    var width = 900,
        height = 4100,
        chart_padding_top = 50,
        chart_padding_right = 100,
        // chart_padding_bottom = 100,
        chart_padding_left = 120,
        text_space_padding = 8,
        id = "#chart";


    for (var i = 0; i < data.length; i++) {

        var row_length = data[i].rankings.length;

        var cell_width = Math.floor((width - chart_padding_right - chart_padding_left) / row_length);
        var cell_height = 40; // cell_width;

        var y_coord = (i * cell_height) + chart_padding_top;

        for (var j = 0; j < data[i].rankings.length; j++) {

            var x_coord = (j * cell_width) + chart_padding_left;

            data[i].rankings[j].w = cell_width;
            data[i].rankings[j].h = cell_height;

            data[i].rankings[j].x = x_coord;
            data[i].rankings[j].y = y_coord;

        }

    }


    var color = d3.scale.linear()
                .domain([100, 0])
                // .range(["#004C80", "#007ACC", "#0099FF", "#33ADFF", "#4DB8FF", "#CCEBFF", "#E6F5FF"]);
                .range(colorbrewer.YlOrRd[3]);

    var grid = d3.select(id)
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("class", "chart");

    var row = grid.selectAll(".row")
                .data(data)
              .enter().append("svg:g")
                .attr("class", "row");

    row.append("text")
        .text(function(d) { return d.name; })
        .attr("font-size", "15")
        .attr("text-anchor", "end")
        .attr("x", function(d) {
            return d.rankings[0].x - text_space_padding;
        })
        .attr("y", function(d) {
            return d.rankings[0].y + (cell_height / 2);
        })
        .attr("dy", "0.35em");


    var labels = ["2015", "2014", "2013", "2012", "2011", "2009", "2008", "2007", "2006", "2005"];

    var x = d3.scale.ordinal()
            .domain(labels)
            .rangeBands([chart_padding_left, (width - text_space_padding - chart_padding_right) + 8]); // WUT

    var xAxis = d3.svg.axis()
        .scale(x)
        .tickSize([])
        .orient("top");

    grid.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0, " + chart_padding_top + ")")
        .call(xAxis)
      .selectAll("text")
        .attr("x", 23)
        .attr("y", 2)
        .attr("font-size", 15)
        .attr("dy", "0em")
        .attr("transform", "rotate(-90)");


    /* Source and credits */
    // grid.append("text")
    //     .text("Forbes Media")
    //     .attr("class", "credits")
    //     .attr("x", chart_padding_left)
    //     .attr("y", height - 25);

    // grid.append("text")
    //     .text("Source: Forbes, TrueBridge Capital Partners")
    //     .attr("class", "credits")
    //     .attr("x", width - chart_padding_right - 210)
    //     .attr("y", height - 25);


    var tooltip = d3.select(id)
                    .append("div")
                    .attr("id", "tooltip")
                    .style("position", "absolute")
                    .style("z-index", "10")
                    .style("visibility", "hidden");


    var col = row.selectAll(".cell")
                .data(function(d) { return d.rankings; })
              .enter().append("svg:rect")
                .attr("width", function(d) { return d.w; })
                .attr("height", function(d) { return d.h; })
                .attr("x", function(d) { return d.x; })
                .attr("y", function(d) { return d.y; })
                .attr("year", function(d) { return d.year; })
                .on("mousemove", function(d, col, row) {

                    if (d.rank != -1) {
                        tooltip.style("visibility", "visible");
                        tooltip.transition()
                            .duration(100)      
                            .style("opacity", .9); 

                        tooltip.html(function() {
                                var source = $("#tooltip-template").html();
                                var template = Handlebars.compile(source);
                                return template(d);
                            })
                            .style("left", (d3.event.pageX) + 30 + "px")
                            .style("top", (d3.event.pageY) + "px");
                    }

                })
                .on("mouseout", function() {
                    tooltip.style("visibility", "hidden");
                })
                .on("dblclick", function(d) {
                    window.open("http://forbes.com/profile/" + d.url);
                })
                .on("click", function(d) {
                    console.log(d);
                })
                .attr("fill", function(d) {
                    if (d.rank == -1) return "#E6E6E6";
                    return color(d.rank);
                });


});



