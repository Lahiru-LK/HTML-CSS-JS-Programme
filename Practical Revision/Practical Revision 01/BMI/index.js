function FindBMI(){

    var weightin = document.getElementById("weightin").value;
    var heightin = document.getElementById("heightin").value;


    var BMIval = weightin / (heightin*heightin) ;
    var stateName;

    


    if (BMIval < 60 && BMIval >29 ) {
       
        stateName="Obese";

        $(document).ready (function () {
            $("#obese").fadeIn("slow");
            $(".output").fadeIn("slow");
            $("#over").hide();
            $("#normal").hide();
           
            
        });
    }
    
    else if (BMIval <= 29 && BMIval >24 ) {
        
        stateName="Over weight";
        
        $(document).ready(function() {
            $("#over").fadeIn("slow")
            $("#obese").hide();
            $("#normal").hide();
           
        });
    }

    else if (BMIval <= 24 && BMIval >19 ) {
        
        stateName="Normal";
        
        $(document).ready(function() {
            $("#normal").fadeIn("slow");
            $("#obese").hide();
            $("#over").hide();
           
        });
    }


    else if (BMIval <= 19 || BMIval >=60 ) {
        
        stateName="Out of range";
        
        $(document).ready(function() {
            $("#obese").fadeOut();
            $("#over").fadeOut();
            $("#normal").fadeOut();

        
        });
    }



    document.getElementById("BMIvalue").innerHTML=  Math.round(BMIval * 100) / 100;
    document.getElementById("state").innerHTML= stateName;

}


$(document).ready(function () {
    $("#reset").click(function () {
      $(".output").fadeOut();
      $("img").fadeOut();
    });
  });
  


