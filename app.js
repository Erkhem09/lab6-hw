// define
var too1 = document.getElementsByTagName('input')[0];
var toiRog = document.getElementsByTagName('input')[1];
var hariu;
var result1 = document.querySelector('.hariult');
// check
console.log(too1);
console.log(toiRog);
// uildel
function hariu1(){
    for(var i=1; i<=toiRog.value; i++){
        if(i == toiRog.value){  
            hariu = too1.value * toiRog.value;
            
        }
    }
    result1.innerText = "Хариу: " + hariu;
   
}
function clear1(){
    too1.innerText = "";
    toiRog.innerText = "";
    result1.innerText = "Хариу:"
}
