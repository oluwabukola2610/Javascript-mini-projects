// Create a "close" button and append it to each list item
var tasklist = document.getElementsByTagName("li");
var i;
for (i = 0; i < tasklist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  tasklist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI' ) {
    e.target.classList.toggle('checked');
     document.querySelector('.close').textContent = `<i class="las la-chevron-circle-down"></i>`
    //  document.getElementsByClassName("close").remove()
  }

}, false);


function addTask() {
    var li = document.createElement("li");
    var inputValue = document.querySelector(".text-input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.querySelector(".list-items").appendChild(li);
    }
    document.querySelector(".text-input").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }