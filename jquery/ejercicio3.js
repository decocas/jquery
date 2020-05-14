$(document).ready(function () {
    $("button").click(function () { 
        //e.preventDefault();
        
        $("button").html("ver menos");
        $("p").toggle(1000);
        $("button").html("ver mas");
              
        }); 
});