
function verificar(){
    var s=document.cookie.toString();
    if(s.length<60){
         
     alert("ingrese primero");
    }else{
        alert(document.cookie);
        var f1=document.getElementById("user");
        var f2=document.getElementById("pass");
        f1.setAttribute("disabled","");
        f2.setAttribute("disabled","");
     
    }
    
}  

function crear( a, b){
var f1=document.getElementById("user");
var f2=document.getElementById("pass");
var d=new Date();
document.cookie="user="+a.value;
document.cookie="pass="+b.value;
document.cookie="expires="+d.toString();
    
    console.log(document.cookie);
   f1.setAttribute("disabled","");
   f2.setAttribute("disabled","");

}

function borrar(){
    
 
 
document.cookie="user=";
document.cookie="pass=";
document.cookie="expires=Tue May 05 2000 14:58:14 GMT-0500";
    
}