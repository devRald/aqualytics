(function(w, d, $) {
		var fn = function(){
			return fn;
		}

		fn.getData = function(){
			fn.initGraph();
		}

		fn.initGraph = function(){
			var data = {
				high:3,
				low:0,
			  labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00'],
			  series: [
			    {
			      data: [1, 2, 3, 5, 8, 13, 4, 6, 8, 12, 11, 5]
			    }
			  ]
			};

			/* Set some base options (settings will override the default settings in Chartist.js *see default settings*). We are adding a basic label interpolation function for the xAxis labels. */
			var options = {
			  axisX: {
			    labelInterpolationFnc: function(value) {
			      return value;
			    }
			  },
			  fullWidth:true
			};

			/* Now we can specify multiple responsive settings that will override the base settings based on order and if the media queries match. In this example we are changing the visibility of dots and lines as well as use different label interpolations for space reasons. */
			var responsiveOptions = [
			  ['screen and (min-width: 641px) and (max-width: 1024px)', {
			    showPoint: false,
			    axisX: {
			      labelInterpolationFnc: function(value) {
			        return 'Week ' + value;
			      }
			    }
			  }],
			  ['screen and (max-width: 640px)', {
			    showLine: false,
			    axisX: {
			      labelInterpolationFnc: function(value) {
			        return 'W' + value;
			      }
			    }
			  }]
			];

			/* Initialize the chart with the above settings */
			new Chartist.Line('#myChart', {
			  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			  series: [
			    [100, 9, 7, 8, 5],
			    [2, 1, 3.5, 7, 3],
			    [1, 3, 4, 5, 6]
			  ]
			}, {
				high:100,
			  fullWidth: true,
			  chartPadding: {
			    right: 3
			  }
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
