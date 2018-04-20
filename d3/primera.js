//aquí debes trabajar con datos de un arreglo o un objeto, incluido directamente en la variable data.
var data;
 var jugadores = [
    {name:'Mas de 3000 jugadores',deaths:40},
    {name:'Cerca de 2000 jugadores',deaths:180},
    {name:'Cerca de 1000 jugadores',deaths:300},
    {name:'Menos de 1000 jugadores',deaths:980}
  ];

var w = 450;
var h = 450;
d3.select(".dataviz-primera")
	.append("svg")
	.attr("width", w)
	.attr("height", h )
	.style("background","black");

 d3.selectAll('circle')
    .data(jugadores)
    .attr('fill','darkred')
    .attr('r', function(d) {
      return d.deaths / 15;
    })

 d3.selectAll('text')
    .data(jugadores)
    .attr('fill','antiquewhite')                      
    .text(function(d) {
      return ". " + d.name;
    });