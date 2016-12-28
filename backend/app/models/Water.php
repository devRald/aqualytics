<?php 
	class Water extends Model{
		function __construct(){
			parent::__construct();
		}

		/* insert models */
		function create_log(){
			$data = parent::insert(TBL_LOG, array("device_id"=>$_POST["device"],"ph_level"=>$_POST["ph"],"temperature"=>$_POST["temperature"]));

			if($data){
				return true;
			}	else{
				return false;
			}		
		}

		function create_user(){
			$data = parent::insert(TBL_USER, array("email"=>$_POST["email"],"firstname"=>$_POST["firstname"],"lastname"=>$_POST["lastname"],"user_type"=>"user"));

			if($data){
				return $this->get_user(parent::get_insert_id());
			}else{
				return false;
			}
		}

		function create_device(){
			$data = parent::insert(TBL_DEVICE, array("address"=>$_POST["address"],"lat"=>$_POST["latitude"],"lng"=>$_POST["longitude"],"user_id"=>$_POST["user_id"]));

			if($data){
				return $this->get_device(parent::get_insert_id());
			}else{
				return false;
			}
		}

		function create_notif(){
			$data = parent::insert(TBL_NOTIF, array("category"=>$_POST["category"],"title"=>$_POST["title"],"description"=>$_POST["desc"],"device_id"=>$_POST["id"]));

			if($data){
				return $this->get_notif(parent::get_insert_id());
			}else{
				return false;
			}
		}

		/* end insert models */

		/* update models */
		function update_notif($id){
			$data = parent::update(TBL_NOTIF,array("status"=>"read"),"id=$id");
			if($data){
				return true;
			}else{
				return false;
			}	
		}

		function update_user($id){
			$data = parent::update(TBL_USER,array("email"=>$_POST["email"],"firstname"=>$_POST["firstname"],"lastname"=>$_POST["lastname"]),"id=$id");
			if($data){
				return $this->get_user($id);
			}else{
				return false;
			}	
		}

		/* end update models */

		/* get models */
		
		function get_user_login($user,$pass){
			$data = parent::select("*")->from("users")->where("email='$user' and password='$pass'")->get();
			if($data){
				$data = $data[0];
				if($data["user_type"]=="user"){
					$data["devices"] = parent::select("device_id, address, lat, lng")->from("device")->where("user_id=".$data["id"])->get();
				}else{
					$data["devices"] = parent::select("device_id, address, lat, lng")->from("device")->get();
				}
				return $data;
			}else{
				return 0;
			}
		}

		function get_user($id){
			$data = parent::select("*")->from("users")->where("id=$id")->get_first_row();
			if($data){
				$data["devices"] = $this->get_devices_count($data["id"]);
				return $data;
			}else{
				return null;
			}
		}

		function get_users(){
			$data = parent::select("*")->from("users")->where("user_type!='admin'")->order_by("id","DESC")->get();
			if($data){
				foreach ($data as $value) {
					$value["devices"] = $this->get_devices_count($value["id"]);
					$new_data[] = $value;
				}
				return $new_data;
			}else{
				return 0;
			}
		}

		function get_devices_count($id){
			$data = parent::select("*")->from("device")->where("user_id=$id")->get_count();
			if($data){
				return $data;
			}else{
				return 0;
			}			
		}

		function get_user_device_list($id){
			$data = parent::select("*")->from(TBL_DEVICE)->where("user_id=$id")->get();
			if($data){
				foreach ($data as $value) {
					$rows[] = array("device_id"=>$value["device_id"],"address"=>$value["address"],"lat"=>$value["lat"],"lng"=>$value["lng"]);
				}
				return $rows;
			}else{
				return null;
			}
		}

		function get_logs($id,$page,$offset){
			$data["results"] = parent::select("DATE(date_created) as `date`, TIME(date_created) as `time`,ph_level,temperature")->from(TBL_LOG)->where("device_id=$id")->order_by("id","DESC")->limit($page,$offset)->get();
			$res = parent::select("COUNT(id) as total")->from(TBL_LOG)->where("device_id=$id")->get_first_row();
			$data["max_page"] = ceil($res["total"] / 10);
			return $data;
		}

		function get_notifs($id){
			$data = parent::select("notif.id, DATE(notif.date_created) as date, TIME(notif.date_created) as time, notif.category, notif.title, notif.description, notif.status, notif.device_id, device.address, device.user_id")->from(TBL_NOTIF)->join(TBL_DEVICE,"notif.device_id=device.device_id")->where("device.user_id=$id AND status IN ('unread', 'read')")->order_by("FIELD(status, 'unread', 'read'),date_created","DESC")->get();
			return $data;
		}

		function get_notif($id){
			$data = parent::select("id,DATE(notif.date_created) as date, TIME(notif.date_created) as time, notif.category, notif.title, notif.description, notif.status, notif.device_id")->from(TBL_NOTIF)->where("id=$id")->get_first_row();
			return $data;
		}

		function get_avg($id,$type,$date){
			switch ($type) {
				case 'day':
					$data = parent::select("AVG(ph_level) as ph,AVG(turbidity) as turbidity,AVG(temperature) as temperature")->from("water_data")->where("device_id = $id and DAY(date_created)=".get_date($type,$date))->get();
					break;
				case 'month':
					$data = parent::select("AVG(ph_level) as ph,AVG(turbidity) as turbidity,AVG(temperature) as temperature")->from("water_data")->where("device_id = $id and MONTH(date_created)=" . get_date($type,$date))->get();
					break;
				case 'year':
					$data = parent::select("AVG(ph_level) as ph,AVG(turbidity) as turbidity,AVG(temperature) as temperature")->from("water_data")->where("device_id = $id and YEAR(date_created)=". get_date($type,$date))->get();
					break;
			}

			return $data[0];
		}

		/* end get models */
	}
?>