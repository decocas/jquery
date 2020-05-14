$(document).ready(function(){
$("h1").hover(function(){
    alert($(this).html());
    $(this).toggle();
    
}) ; //aqui termina la funcion

$("button").click(function () { 
   
    $("#parrafo").html("ahora es otra cosa");
});
$( "h1").css({"color":"red", "font-family":"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"});
  

});