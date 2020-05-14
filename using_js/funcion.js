function myF(){
var a="esto es una alerta";
alert(a);
//String s=a.trim();
const semana=["lun","mar","mie","jue","vie","sab","dom"];
semana.forEach(element => console.log(element));
alert(semana.pop());
console.log(navigator.appCodeName, location.port );
var f=prompt("ingressar");
confirm(f);

} 

function Cookie(){
    var a=document.cookie="user=Choto;expires=Thu, 18 Dec 2020 12:00:00 UTC";
window.alert(a);
}