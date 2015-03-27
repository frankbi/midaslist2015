var color = d3.scale.linear()
    			.range(["#feb44f", "#feb956", "#febe5e", "#ffd27a", "#ffe291"]);

var legend = d3.select('#scale')
				.append("ul")
				.attr("class", "list-inline");

var keys = legend.selectAll("li.key")
    			.data(color.range());

keys.enter().append("li")
    .attr("class", "key")
    .style("background-color", String)
    .style("list-style-type", "none")
    .style("display", "inline-block");