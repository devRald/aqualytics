<?php 
	header("Allow-Access-Controll-Orgin:*");
	include 'vendor/Autoload.php';

	if(isset($_SERVER['PATH_INFO'])){
		$request = $_SERVER['PATH_INFO'];
	}

	if(preg_match("/^$/", $_SERVER['PATH_INFO'])){

	}
	if(preg_match("/^\/api\/v1\/phlevel$/", $_SERVER['PATH_INFO'])){
		load("Water_API_Controller");
		$api = new Water_API_Controller();
		$api->insert_details();
	}
	if(preg_match("/^$/", $_SERVER['PATH_INFO'])){
		
	}
?>