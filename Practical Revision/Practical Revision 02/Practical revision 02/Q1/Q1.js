function myfunction() {
	
	var x=document.getElementById("nam").value;
	var z=document.getElementById("bird").value;
	var newdate= new Date();
	var age=newdate.getFullYear()-z;
	

	if (x == "" || z=="") {
		alert("Emptiness of the textboxes must be checked");
   
  }else{
	  	alert("Hi "+x+",Your age is " +age);

  }
	
	
}