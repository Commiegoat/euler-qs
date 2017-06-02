var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", threenFives);

function threenFives() {
	var sum = 0;
  var textNode = document.createTextNode("Solution to problem 1 is: ");
  for (i=0;i<1000;i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  textNode.textContent += sum;
  btn1.textContent = "";
  btn1.appendChild(textNode);  
}