<?php 
	function load($name){
		$ctrl = "./app/controller/$name.php";
		include $ctrl;
	}
?>