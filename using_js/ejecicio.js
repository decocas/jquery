function myName(){
    var n=document.getElementById("nombre");
    
    if( n.value.length>2 && n.value!=" " ){
        window.alert("valor valido");
        return true;
    }else{
        window.alert("valor invalido");
        n.setAttribute("disable","");
        n.setAttribute("hidden","");
        return false;
    }
}
function myAge(){
    var age=document.getElementById("edad");
    if(age.value <18){
        window.alert("valor invalido");
    age.setAttribute("disable","");
    age.setAttribute("hidden","");
    return false;
    }
    return true;
}

function esH() {
    
var g=document.getElementById("H");
if(g.value=="Hombre"){
   var novo=document.createElement("option");//crea etiqueta
   var txt=document.createTextNode("empleado");//texto dentro de la etiqeta
   var novo1=document.createElement("option");
   var txt1=document.createTextNode("desempleado");
   var novo2=document.createElement("option");
   var txt2=document.createTextNode("temporal");
    //novo.setAttribute("value","1");
    //novo.setAttribute("label","empleado")
    novo.appendChild(txt);//anexar el texto detro de la etiqueta
    novo1.appendChild(txt1);
    novo2.appendChild(txt2);
   var parent=document.getElementById("job");
    
   parent.appendChild(novo);//anexar hijo al nodo padre
   parent.appendChild(novo2);
   parent.appendChild(novo1);
return true;               
}

                
  }

  function esM(){
    var g=document.getElementById("M");
    if(g.value=="Mujer"){
        var novo=document.createElement("option");//crea etiqueta
var txt=document.createTextNode("ama de casa");//texto dentro de la etiqeta
var novo1=document.createElement("option");
var txt1=document.createTextNode("desempleada");
var novo2=document.createElement("option");
var txt2=document.createTextNode("temporal");
var novo3=document.createElement("option");
var txt3=document.createTextNode("empleada");

//novo.setAttribute("value","1");
//novo.setAttribute("label","empleado")
novo.appendChild(txt);//anexar el texto detro de la etiqueta
novo1.appendChild(txt1);
novo2.appendChild(txt2);
novo3.appendChild(txt3)
var parent=document.getElementById("job");

parent.appendChild(novo);//anexar hijo al nodo padre
parent.appendChild(novo2);
parent.appendChild(novo1);
parent.appendChild(novo3);
   return true; }
    
  }
  function revisar(){
      if(myAge() && myName() && (esH()  || esM())){
         window.alert("info enviada");
      }else{
          console.log("info con error");
      }
  }


