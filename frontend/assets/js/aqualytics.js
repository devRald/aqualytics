(function(w, d, $) {
		var fn = function(){
			return fn;
		}

		fn.getData = function(){
			fn.initLine();
			fn.initDoughnut();
		}

		fn.initDoughnut = function(){
			var data = {
		    labels: [
		        "Red",
		        "Blue",
		        "Yellow"
		    ],
		    datasets: [
		        {
		            data: [300, 50, 100],
		            backgroundColor: [
		                "#FF6384",
		                "#36A2EB",
		                "#FFCE56"
		            ],
		            hoverBackgroundColor: [
		                "#FF6384",
		                "#36A2EB",
		                "#FFCE56"
		            ]
		        }]
			};

			var option = {
				circumference: 1 * Math.PI,
				rotation: 1 * Math.PI,
				cutoutPercentage: 80,
				legend: {
			    display: false,
			      labels: {
			        display: false
			      }
			  }
			}

	    var ctx = d.getElementById("myPie").getContext('2d');
			var myPieChart = new Chart(ctx,{
		    type: 'doughnut',
		    data: data,
		    options: option
			});
		}

		fn.initLine = function(){
			var data = {
	        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	        datasets: [{
	            label: "Ph Level of Water",
	            fillColor: "rgba(220,220,220,0.2)",
	            borderColor: "#2196F3",
	            pointBackgroundColor: "#1976D2",
	            pointBorderColor: "#fff",
	            pointHoverBackgroundColor:"#FF5252",
	            data: [14, 3, 7, 7.9, 8, 5, 6],
	            lineTension:1
	        }]
	    };

	    var option = {
	        responsive: true,
	        hover: {
            mode: 'label'
	        }
	    };
	    // Get the context of the canvas element we want to select
	    var ctx = d.getElementById("myChart").getContext('2d');
	    var myLineChart = new Chart(ctx, {
		    type: 'line',
		    data: data,
		    options: option
			});
		}

		window.Aqualytics = fn;

})(window, document, jQuery)
