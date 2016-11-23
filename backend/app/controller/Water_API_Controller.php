<?php
	class Water_API_Controller extends Controller{
		function __construct(){
			$this->load_model("Water");
		}

		function insert_details(){
			$id = $_POST['id'];
			$ph = $_POST['ph'];
			$temp = $_POST['temperature'];
			if($this->water->insert_data(array("device_id"=>$id,"ph_level"=>$ph,"temperature"=>$temp))){

			}else{

			}
		}
	}
?>