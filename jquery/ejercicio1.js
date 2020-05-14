/*$(document).ready(function () {
    console.log("Estamos Listos");//#1
    window.alert("documento listo");    
    
});*/
/*$(document).ready(function () {  //#2
    $("body").append("<p>segundo paaraafo</p>");

});*//*
$(document).ready(function () {
    $("p").each(function (i) {

        // element == this
        if(i==0){$(this).css("color","red")}
        if(i==1){$(this).css("color","blue")}
        if(i==2){$(this).css("color","green")}
        if(i==3){$(this).css("color","yellow")}
              
    });
});*/ //#3

$(document).ready(function () {
    $("button").click(function () { 
    $("a").attr("href", "https://www.youtube.com/");
        
    });
});