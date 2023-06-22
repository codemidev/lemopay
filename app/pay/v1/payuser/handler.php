<?php

/*
 * Project Name: LemoPay
 * Author : Julius R. Ochai
 * Description: Marchant Payment API validation 
 */


/*
//Api Key validation class
//checks if the api key is a from vaild user
//retuns true 
 */


class LemoPayMarch {


	//api key hash
	public $key = "testvalue";

	//Key validation function
	
  function checkKey($key){



	  $this->key = $key;
	  if ( $this->key == true)
	  {
		  function api_ckeck()
		  {
			  function srch($key)
			  {
				  //Search Database
				  //includes connection snippet
				  //return true if data is present on the database 
				  //Connection
				  include 'conv.php';

				  //Sql connection snpiet
				  //Check Hash Value 
				  //if hash  function matches, the pay endpoint is called with supplied parameters
				  //required parameter :
				  //customer name
				  //email
				  //amount
				  //description
				  //action
				  $tokn = md5($this->key);
				  //Get unique hash from server

				  if($tokn == md5($uniqkey)
				  {
					  echo "Working";
				  }
				  else {
					  return false;
				  }




				  
			  }

			  if($this->key){

				  return true
			  }
		  }
	  }


if(api_chek()==true){
	echo "Payment in progress...";
}
else {
	echo "Invalid api key";
}
}

}

?>
