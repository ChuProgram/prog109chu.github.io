var mybutton = document.querySelector("button");


mybutton.addEventListener("click", function(event) {

  var element = document.getElementsByTagName("div");
  for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
  }

  // Let us stop the propagation of events

  event.stopPropagation();
});


addEventListener("click", function(event) {
  var dot = document.createElement("div");
  var color = document.getElementById("dotColor").value;
  var size = document.getElementById("dotSize").value;

  if (size === "small") {
    dot.style.width = "6px";
    dot.style.height = "6px";
    dot.style.borderRadius = "3px";
    
  } else if (size === "medium") {
    dot.style.width = "12px";
    dot.style.height = "12px";
    dot.style.borderRadius = "6px";
    
  } else {
    dot.style.width = "24px";
    dot.style.height = "24px";
    dot.style.borderRadius = "12px";
  }
  
  dot.className = "dot";
  dot.style.backgroundColor = color;
  dot.style.left = (event.pageX - 4) + "px";
  dot.style.top = (event.pageY - 4) + "px";
  document.body.appendChild(dot);
});
