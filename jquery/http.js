$(document).ready(function () {
    
    var s=$("#id").val();
    $("div").load("https://jsonplaceholder.typicode.com/users", "username="+s, function (response, status, request) {
        console.log(response,status,request)
        $(this).css({"color":"green",
                       "font-family":"tahoma" }); // dom element
        
    });
});