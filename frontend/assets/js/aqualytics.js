(function(w, d, $) {
		var fn = function(){
			return fn;
		}

		fn.getData = function(data){
			fn.initGraph(data);
		}

		fn.initGraph = function(data){
			/* Initialize the chart with the above settings */
			new Chartist.Line('.ct-chart', data, 
			{
				high:14,
				low: 0,
				divisor:10,
				height: '300px',
			  fullWidth: true,
			  chartPadding: {
			    right: 30
			  },lineSmooth: Chartist.Interpolation.cardinal({
			    tension: 10
			  })
			});
		}

		fn.refreshGraph = function(){
			var data = {
	        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	        datasets: [{
	            label: "My First dataset",
	            fillColor: "rgba(220,220,220,0.2)",
	            strokeColor: "rgba(220,220,220,1)",
	            pointColor: "rgba(220,220,220,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(220,220,220,1)",
	            data: [65, 59, 80, 100, 56, 55, 40]
	        }, {
	            label: "My Second dataset",
	            fillColor: "rgba(151,187,205,0.2)",
	            strokeColor: "rgba(151,187,205,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: [28, 48, 40, 19, 86, 27, 90]
	        }]
	    };

	    var option = {
	        responsive: true,
	    };
	    // Get the context of the canvas element we want to select
	    var ctx = d.getElementById("myChart").getContext('2d');
	    var myLineChart = new Chart(ctx).Line(data, option);
		}

		window.Aqualytics = fn;

})(window, document, jQuery)
