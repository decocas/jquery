$(document).ready(function () {
    $("button").click(function () { 
      /* $.ajax({
           type: "get",
           url: "https://jsonplaceholder.typicode.com/posts",
           data: "data",
           dataType: "json",
           success: function (res) {
               console.log(res);https://jsonplaceholder.typicode.com/photos
           }
       });*/var input=$("input").val();
       $.get("https://jsonplaceholder.typicode.com/photos")
       .done(function (data, textStatus, jqXHR) {

        var array=data;
        console.log(array, textStatus,input);
        for (const key in array) {
            if (array[key].id==input) {
                var s=data[key].thumbnailUrl;
                var a=JSON.stringify(array[key].id);
                var b=JSON.stringify(array[key].title);
                var c=JSON.stringify(array[key].albumId);
              
                document.getElementById("pie").innerHTML=
                "<div class='table-responsive-xs'>"
                +"<div class='row d-flex justify-content-center'>"
                +"<div class='shadow-xl p-3 mb-10 bg-light rounded'>"
                +"<table class='table table-hover table-bordered '>"
                
                +"<thead> <tr> <th scope='col'>ID</th>"
               +"<th scope='col'>Album</th><th scope='col'>title</th>"
                
                +"<tbody><tr><th scope='row-md-3'>"+a+"</th><td>"+c+"</td><td>"+b+"</td>"
                 + "</tr>"
                 +"</tbody></table></div></div></div>";   
                 var img=document.createElement("img");
              document.getElementById("pie").append(img);
              img.setAttribute("src",s);           
                  
            }
                 
        }
         
     
    });

       
    });

           
});