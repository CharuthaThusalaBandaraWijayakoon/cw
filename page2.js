function validateForm(){
		  var name = document.forms["myForm"]["name"].value;
		  var address = document.forms["myForm"]["address"].value;
		  var email = document.forms["myForm"]["email"].value;
		  var passwords = document.forms["myForm"]["passwords"].value;
		  var tel = document.forms["myForm"]["tel"].value;
		  
		  if(name==""){
		         alert("Enter your Full Name in the Form");
				 return false;
		  }
		  else if(address==""){
		         alert("Enter your Personal Address in the Form");
				 return false;
		  }
		  else if(email==""){
		         alert("Enter your Email in the Form");
				 return false;
		  }
		  else if(passwords==""){
		         alert("Enter your Password in the Form");
				 return false;
		  }
		  else if(tel==""){
		         alert("Enter your Contact Number in the Form");
				 return false;
		  }
		  else{
		         alert("Dear "+name+", Thank you...");
	      }
	}	     
	
	
