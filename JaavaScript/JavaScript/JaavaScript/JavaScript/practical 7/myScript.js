	
	
	function printNumChars() {
	var numchar = /^[0-9a-zA-Z]+$/; 
	var address=document.getElementById("txtaddress").value;
	if(address.match(numchar)) { 
	return true; 
		} 
	
	else { 
		alert("Special characters are not allowed"); 
	return false; 
 } 
} 