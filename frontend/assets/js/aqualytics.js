(function(w, d, $) {
		var fn = function(){
			return fn;
		}

		fn.getData = function(){
			fn.initLine();
			fn.initDoughnut();
			fn.initTemp()
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
		            data: [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
		            backgroundColor: [
		                "#ee1c25",
		                "#f26724",
		                "#f8c611",
		                "#f5ed1c",
		                "#b5d333",
		                "#84c341",
		                "#4db749",
		                "#33a94b",
		                "#22b46b",
		                "#0ab8b6",
		                "#4690cd",
		                "#3853a4",
		                "#5a51a2",
		                "#63459d",
		                "#462c83"
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
	        labels: ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM", "12AM"],
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

		fn.initTemp = function(){
			var dta = {
	        labels: ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM", "12AM"],
	        datasets: [{
	            label: "Temperature of Water",
	            fillColor: "rgba(220,220,220,0.2)",
	            borderColor: "#F44336",
	            pointBackgroundColor: "#D32F2F",
	            pointBorderColor: "#fff",
	            pointHoverBackgroundColor:"#FF5252",
	            data: [36, 23, 16, 30, 32, 29, 25],
	            lineTension:1
	        }]
	    };

	    var opt = {
	        responsive: true,
	        hover: {
            mode: 'label'
	        }
	    };
	    // Get the context of the canvas element we want to select
	    var ctx2 = d.getElementById("myTemp").getContext('2d');
	    var myTempChart = new Chart(ctx2, {
		    type: 'line',
		    data: dta,
		    options: opt
			});
		}

		window.Aqualytics = fn;

})(window, document, jQuery)
