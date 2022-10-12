var map = "mapchart.json";
vegaEmbed("#bar_chart", map).then(function(result) {
// Access the Vega view instance
(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
