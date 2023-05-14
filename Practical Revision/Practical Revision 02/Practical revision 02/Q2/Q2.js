function myfunction2() {
	
	var name=document.getElementById("fnam").value;
	var Gender=document.getElementById("Gen").value;
	
	if(name=="" || name==null){
		alert("Emptiness of the textboxes ");
	}
	else{
		
		if (Gender=="male"){
			alert("Welcome Mr."+name);
			
		}
		else{(Gender=="female")
			alert("Welcome Ms."+name);
		}
	}
	
}