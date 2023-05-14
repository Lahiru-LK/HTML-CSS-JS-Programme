	
	function checkingForm(){
				var Gra;
				var grade=document.myform01.ENGrade.value;
				var Frm=document.myform01;
					
					if(Frm.ENGrade.value==""){
						alert("Enter Your Grade (A,B,C,D, or F)");
						Frm.ENGrade.focus();
						
					}
					
					else{
							switch(grade){
					
								case "A":
									Gra="Good job";
									break;
								case "B":
									Gra="Pretty Good";
									break;
								case "C":
									Gra="Passed";
									break;
								case "D":
									Gra="Not so good";
									break;
								case "F":
									Gra="Failed";
									break;
								default:
									alert("Enter Your Grade (A,B,C,D, or F)");
									Gra="Unknown grade";
							}
							document.write(Gra);
				}
				
	}

