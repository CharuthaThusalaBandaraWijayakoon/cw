   	function validateForm(){
		  var name = document.forms["myForm"]["name"].value;
		  var address = document.forms["myForm"]["address"].value;
		  var email = document.forms["myForm"]["email"].value;
		  var password = document.forms["myForm"]["password"].value;
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
		  else if(password==""){
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
	
	
	
	
	
	
var chosenProducts=new Array(); //stores the product code of the item added to cart
var productAmounts=new Array(); //stores the quantity

//this function changes the input type to month and reduces the hieght of the field 
function change(x){
	x.type='month';
    x.style.height="auto";
}

//gets the number of the clothing and combines it to form the size code
function getSizes(tshirtNum){
	var clothingNumber="clothing"+tshirtNum.toString();
	return document.getElementById(clothingNumber).value;                
}

//using the product code, this function finds out the name of the item
//in the case where a clothing item is chosen, it's size is also included as part of the item name
function getProductName(productNum){
	var itemName="";
	var tshirtSize=""
	switch (productNum){
		case 1:
			itemName="Soccer Balls";
			break;
		case 2:
			itemName="Soccer Cleats";
			break;
		case 3:
			tshirtSize=getSizes(1); //calls function to get clothing size
			itemName="Soccer Uniform ("+tshirtSize+")"; 
			break;
		case 4:
			itemName="Gloves";
			break;
			
		case 5:
			itemName="Soccer Cones";
			break;
		case 6:
			tshirtSize=getSizes(2); //calls function to get clothing size
			itemName="Coaching Clothing ("+tshirtSize+")"; 
			break;      	
		case 7:
			itemName="Soccer Ladder";
			break;
		case 8:
			itemName="Stop Watch";
			break;
			
		case 9:
			tshirtSize=getSizes(3); //calls function to get clothing size
			itemName="Raferee Clothing ("+tshirtSize+")"; 
			break;
		case 10:
			itemName="Penalty Cards";
			break;
		case 11:
			itemName="Whistle";
			break;
		case 12:
			itemName="Flags";
			break;
		
		default:
			itemName="none"        
	}
	return itemName;

}

//calculates the price per item
function calculatePrice(num, amount){
	var price=getPrice(num);
	return amount*price;
                
}

function getProduct(x){
	var button="btn"+x.toString();
	var product="product"+x.toString();
	document.getElementById(button).style.backgroundColor="red"; //changes button colour to blue
	var getAmount=document.getElementById(product).value; //gets the no. of items selected 
               
	if(getAmount==0){
		alert("Please enter quantity for products"); //makes sure the user can't add to cart without choosing quantity
		return false;
	}
	else{
		chosenProducts.push(x); 
		productAmounts.push(getAmount);
		//itemcode and item quantity is added to the relevant array
	}
}
//gets the price of each item
function getPrice(x){
	var price;
	//player
	if (x<=4){
		price=10;
	}
	//Coach
	else if(x<=8){
		price=15;
	}
	//Refaree
	else{
		price=25;
	}
	return price;
}
            

function getTotal(){
	var totalAmount=0;
	//calculate price per item and adds it to the total 
	for (i=1;i<=chosenProducts.length;i++){
		var productNumber=chosenProducts[i-1];
		var productAmount=productAmounts[i-1];
		var pricePerItem=calculatePrice(productNumber, productAmount); 
		totalAmount+=pricePerItem;
	}
    
}
 function validateForm(){
		  var name = document.forms["myForm"]["name"].value;
		  var address = document.forms["myForm"]["address"].value;
		  var email = document.forms["myForm"]["email"].value;
		  var password = document.forms["myForm"]["password"].value;
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
		  else if(password==""){
		         alert("Enter your Password in the Form");
				 return false;
		  }
		  else if(tel==""){
		         alert("Enter your Contact Number in the Form");
				 return false;
		  }
		  

	
	else{
		var finalBill=getTotal(); //gets final total
		//makes sure at least one item is selected before submission
		if (finalBill!=0){
			var productName="";
			var productQuantity="";
			var bill="";
			//adds item name and quantity into one string
			for(i=1;i<=chosenProducts.length;i++){
				productName=getProductName(chosenProducts[i-1]);
				productQuantity=productAmounts[i-1].toString();
				bill= bill.concat(productName+ "          "+ productQuantity+ "\n");
		}
		//displays summary of the bill
		alert("Hi, " +name+"! \nYou have ordered the following items: \n Item                                         Amount\n"+bill+"Your final total bill is $"+finalBill);
		}
		else{
			alert('Please add items to card before placing order!');
		}
		
	}
}
//resets arrays to null           
function resetForm(){
	while (chosenProducts.length) { 
		chosenProducts.pop(); 
		productAmounts.pop() }
}