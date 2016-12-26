(function(w, d, $) {
		var myTempChart,myLineChart;

		var fn = function(){
			fn.updateMeter(7);
			return fn;
		}

		fn.getData = function(){
			fn.initLine();
			fn.initDoughnut();
			fn.initTemp()
		}

		fn.updateTemperature = function(temp){
			$("span.deg").text(temp);
			fn.addDataTemp(temp)
		}

		fn.updateMeter = function(level){
			level = parseInt(level);
			level = Math.ceil(level);
			fn.addData(level);
			var needle = $("img.needle");
			needle.removeClass(function(index,css){
				return (css.match (/wlevel-\d{1,2}/g) || []).join(' ');
			})
			switch(level){
				case 1:
					needle.addClass("wlevel-0");
					break; 
				case 2:
					needle.addClass("wlevel-1");
					break; 
				case 3:
					needle.addClass("wlevel-2");
					break;
				case 4:
					needle.addClass("wlevel-3");
					break;
				case 5:
					needle.addClass("wlevel-4");
					break;
				case 6:
					needle.addClass("wlevel-5");
					break;
				case 7:
					needle.addClass("wlevel-6");
					break;
				case 8:
					needle.addClass("wlevel-7");
					break;
				case 9:
					needle.addClass("wlevel-8");
					break;
				case 10:
					needle.addClass("wlevel-9");
					break;
				case 11:
					needle.addClass("wlevel-10");
					break;
				case 12:
					needle.addClass("wlevel-11");
					break;
				case 13:
					needle.addClass("wlevel-12");
					break;
				case 14:
					needle.addClass("wlevel-13");
					break;

			}
		}

		fn.initDoughnut = function(){
			var data = {
		    labels: [
		        "pH level 1",
		        "pH level 2",
		        "pH level 3",
		        "pH level 4",
		        "pH level 5",
		        "pH level 6",
		        "pH level 7",
		        "pH level 8",
		        "pH level 9",
		        "pH level 10",
		        "pH level 11",
		        "pH level 12",
		        "pH level 13",
		        "pH level 14",
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
				tooltips: false,
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
	        labels: ["","","","","","",""],
	        datasets: [{
	            label: "Ph Level of Water",
	            fillColor: "rgba(220,220,220,0.2)",
	            borderColor: "#2196F3",
	            pointBackgroundColor: "#1976D2",
	            pointBorderColor: "#fff",
	            pointHoverBackgroundColor:"#FF5252",
	            data: [7,7,7,7,7,7,7],
	            lineTension:0
	        }]
	    };

	    var option = {
	        responsive: true,
	        hover: {
            mode: 'label'
	        },
	        scales:
	        {
	            xAxes: [{
	                display: false
	            }]
	        }
	    };
	    // Get the context of the canvas element we want to select
	    var ctx = d.getElementById("myChart").getContext('2d');
	    myLineChart = new Chart(ctx, {
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
	            data: [25, 25, 25, 25, 25, 25, 25],
	            lineTension:0
	        }]
	    };

	    var opt = {
	        responsive: true,
	        hover: {
            mode: 'label'
	        },
	        scales:
	        {
	            xAxes: [{
	                display: false
	            }]
	        }
	    };
	    // Get the context of the canvas element we want to select
	    var ctx2 = d.getElementById("myTemp").getContext('2d');
	    myTempChart = new Chart(ctx2, {
		    type: 'line',
		    data: dta,
		    options: opt
			});
		}

		fn.addData = function(data){
			if(myLineChart!=null||myLineChart!=undefined){
				if(myLineChart.data.datasets[0].data.length<7){
					myLineChart.data.datasets[0].data.push(data);
				}else{
					myLineChart.data.datasets[0].data.push(data);
					myLineChart.data.datasets[0].data.shift(data);
				}
				myLineChart.update();
			}
		}

		fn.addDataTemp = function(data){
			if(myTempChart!=null||myTempChart!=undefined){
				if(myTempChart.data.datasets[0].data.length<7){
					myTempChart.data.datasets[0].data.push(data);
				}else{
					myTempChart.data.datasets[0].data.push(data);
					myTempChart.data.datasets[0].data.shift(data);
				}
				myTempChart.update();
			}
		}

		window.Aqualytics = fn;

})(window, document, jQuery)
