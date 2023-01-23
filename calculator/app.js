let inputDisplay = document.getElementById('input-display');

let calculate = function(number){
    inputDisplay.value += number
}

let result= function(){
   try {
    inputDisplay.value = eval(inputDisplay.value)
   } catch (error) {
    document.getElementById("input-display").value = "Error";
    document.getElementById("input-display").style.color = "red";
   } 
}
//to clear
let reset = function(){
    inputDisplay.value = "0";
    document.getElementById("input-display").style.color = "black";
}
let delet = function(){
    inputDisplay.value = inputDisplay.value.slice(0,-1)
}