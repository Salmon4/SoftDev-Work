var margin = {top: 10, right: 30, bottom: 30, left: 100},
    width = 1000 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

var svg = d3.select("#chart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

var render = function (e){
  d3.json("/static/data/population.json").then(function(data) {
    data = data[1]
    //console.log(data)

    var x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.date; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    var y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.value; })])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.value) })
      )
    var curtain = svg.append("rect")
      .attr('x', -1 * width)
      .attr('y', -1 * height)
      .attr('height', height)
      .attr('width', width - (width/59))
      .attr('class', 'curtain')
      .attr('transform', 'rotate(180)')
      .style('fill', '#FFFFFF')
  })
}


var transition = function(e){
  var w = d3.select("rect").attr("width")
  d3.selectAll("rect").transition()
    .duration(1000)
    .attr("width", function(d) { return w - (width/59);});
}

var renderButton = document.getElementById("render");
renderButton.addEventListener("click", render)

var transitionButton = document.getElementById("transition");
transitionButton.addEventListener("click", transition)
