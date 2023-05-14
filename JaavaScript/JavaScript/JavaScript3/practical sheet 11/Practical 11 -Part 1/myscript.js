
function check_form(){
		
		var form1=document.myForm;
		if(form1.age.value=="" || form1.fullName.value==""){
			alert("Please fill all the fields");	
			if(form1.fullName.value=="")
				{
				form1.fullName.focus();
				
				}
				else
				{
					form1.age.focus();
					
				}
			
		}
		else{
				alert("Thanks for fillig the form "+form1.fullName.value);
			}
	}
	
function age_onblur(){
	
	var myAge=document.myForm.age;
	if (isNaN(myAge.value)==true){
		confirm("please entere a valide age");
	}
}

