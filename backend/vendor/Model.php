<?php
	class Model{
		protected $conn;
		private $sql;
		function __construct(){
			$this->conn = new mysqli(HOST,USERNAME,PASSWORD,DATABASE);
		}

		function select($fields){
			if(gettype($fields)=="string"){
				$this->sql = "SELECT $fields ";
			}else{
				foreach ($fields as $value) {
					$field = $value . ", ";
				}
				$field = substr($field, 0, strlen($field) - 2);
				$this->sql = "SELECT $field ";
			}

			return $this;
		}

		function from($table){
			$this->sql .= "FROM $table ";
			return $this;
		}

		function where($where){
			if(gettype($where)=="string"){
				$this->sql .= "WHERE $where ";
				return $this;
			}
		}

		function join($table,$on,$custom=""){
			$this->sql .= "INNER JOIN $table ON $on ";
			if($custom!=null){
				$this->sql = str_replace("INNER", $custom, $this->sql_string);
			}
			return $this;
		}

		function custom_where($where){
			$this->sql .= "$where ";
		}

		function limit($page,$offset){
			$page = $page - 1;
			$this->sql .= "LIMIT $page,$offset ";
			return $this;
		}

		function order_by($field,$order = "ASC"){
			if(gettype($field)=="string"){
				$this->sql .= "ORDER BY $f $order ";	
				return $this;
			}else{
				foreach ($field as $value) {
					$f = "$value, ";
				}
				$f = substr($f, 0, strlen($f) - 2);
				$this->sql .= "ORDER BY $f $order";
				return $this;
			}
		}

		function get_insert_id(){
			return mysqli_insert_id($this->conn);
		}

		function insert($table,$insert){
			$str = "INSERT INTO $table SET ";
			foreach ($insert as $key => $value) {
				$str .= "$key = '$value', ";
			}
			$str = substr($str, 0, strlen($str) - 2);
			$this->conn->query($str);
			if($this->conn->affected_rows > 0){
				return true;
			}else{
				return false;
			}
		}

		function update($table,$insert,$where){
			$str = "UPDATE $table SET ";
			foreach ($insert as $key => $value) {
				$str .= "$key = '$value', ";
			}
			$str = substr($str, 0, strlen($str) - 2);
			$str.= " WHERE $where";

			$result = mysqli_query($this->conn,$str);
			if(mysqli_affected_rows($this->conn) > 0){
				echo 'naupdate';
			}
		}

		function delete($table,$where){
			$str = "DELETE FROM $table WHERE $where";
			$result = mysqli_query($this->conn,$str);
			if(mysqli_affected_rows($this->conn) > 0){
				echo 'nadelete';
			}	
		}

		function get($table="",$fields="",$where="",$order="",$limit=""){
			if(!empty($table)){
				$this->sql = "SELECT * FROM $table";
			}
			$result = $this->conn->query($this->sql);
			if($result->num_rows > 0){
				while($data = $result->fetch_assoc()){
					$row[] = $data;
				}
				return $row;
			}else{
				return null;
			}
		}

		function print(){
			echo $this->sql;
		}
	}
?>