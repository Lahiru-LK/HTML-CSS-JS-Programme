
/*
		
	function myclick(){
		var savemark=document.getElementById("marks").value;
		var grade;
		
		if(savemark>90){
			grade="A";
			}
		else if(savemark>=65){
			grade="B";
			}
		else if(savemark>=45){
			grade="C";
			}
		else if(savemark>35){
			grade="D";
			}
		else{
			grade="F";
			}
		alert("Resal is : "+grade);
		document.getElementById("output").innerHTML=grade;
	}*/
	
	
	function myclick(){
		var savemark=document.getElementById("marks").value;
		var grade;

		switch(savemark){
			case '1':
				grade="good";
				break;
				
			case '2':
				grade="bad";
				break;
			
		}

		alert("Resal is : "+grade);
		document.getElementById("output").innerHTML=grade;
	}		
