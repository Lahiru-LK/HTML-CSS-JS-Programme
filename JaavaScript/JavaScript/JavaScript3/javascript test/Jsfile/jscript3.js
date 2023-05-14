var Height,kBMI,cBMI,mass,than;

mass=prompt("Kasun mass : ");
Height=prompt("Kasun height : ");
kBMI=Number(mass/(Height*Height));
//alert("Kasun BMI "+kBMI);



mass=prompt("Chamal mass : ");
Height=prompt("Chamal height : ");
cBMI=Number(mass/(Height*Height));
//alert("Chamal BMI "+cBMI);

alert("kasun has a higher BMi than chamal");
/*
if(kBMI>cBMI){
	alert("True");
	}
else{
	alert("False");
	}
*/

than=kBMI>cBMI;
alert(than);