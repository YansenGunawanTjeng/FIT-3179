var brush2 = "brush2.json";
vegaEmbed("#bar_chart", brush2).then(function(result) {
// Access the Vega view instance
(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);