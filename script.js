var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
btn1.addEventListener("click", threenFives);
btn2.addEventListener("click", fibonacci);

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

function fibonacci() {
	var even = 0;
	var textNode = document.createTextNode("Solution to problem 2 is: ");
	var fib1 = 1;
	var fib2 = 0;
	for (var i=1; i<4000000;){
		i = fib1 + fib2;
		fib2 = fib1;
		fib1 = i;
		//alert("i:" + i + " fib1:" + fib1 + " fib2:" + fib2);
		if (i%2===0){
			even += i;
		}
	}
	textNode.textContent += even;
	btn2.textContent = "";
	btn2.appendChild(textNode);
}