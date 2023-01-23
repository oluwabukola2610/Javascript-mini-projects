const colors = ["green", "red","blue","indigo" ,"rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', changeColor)
function changeColor(){
    //get randomcolor brtween 0-6
    document.body.style.backgroundColor = colors[getRandomColor()]
    color.textContent = colors[getRandomColor()]
}
function getRandomColor(){
return Math.floor(Math.random()*colors.length)
}