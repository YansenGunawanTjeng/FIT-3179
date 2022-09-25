var code = "code.json";
vegaEmbed("#bar_chart", code).then(function(result) {
// Access the Vega view instance
(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
