	
	
	
	function MultiplyCalculate(){
			
			var check=document.myform02;
			
			
			if(isNaN(check.Frtnume.value)==true || isNaN(check.Scdnume.value)==true)
			{	
				confirm("Please enter only number")	;
				
				if(isNaN(check.Frtnume.value)==true){
					check.Frtnume.focus();
				}
				else{
					check.Scdnume.focus();
					}
			}
			
			else{
				var fnum=document.myform02.Frtnume.value;
				var snum=document.myform02.Scdnume.value;
			
				var totam=fnum*snum;
				var totamulty=Math.round(totam*100)  / 100;
				
				var texts="The Result is : ";
				document.getElementById("caloutput").innerHTML=texts+totamulty;
			}
	} 
	
	function DivideCalculate(){
			var check=document.myform02;
			
			if(isNaN(check.Frtnume.value)==true || isNaN(check.Scdnume.value)==true)
			{	
				confirm("Please enter only number")	;
				
				if(isNaN(check.Frtnume.value)==true){
					check.Frtnume.focus();
				}
				else{
					check.Scdnume.focus();
					}
			}
			
			else{
				var fnum=document.myform02.Frtnume.value;
				var snum=document.myform02.Scdnume.value;
			
				var totad=fnum/snum;
				var totadivid=Math.round(totad*100) / 100;
			
				var texts="The Result is : ";
				document.getElementById("caloutput").innerHTML=texts+totadivid;
			}
	} 