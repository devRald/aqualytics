<?php 
	class Water extends Model{
		function __construct(){
			parent::__construct();
		}

		function insert_data($d){
			$insert = parent::insert("water_data",$d);
			if($insert){
				return true;
			}else{
				return false;
			}
		}
	}
?>