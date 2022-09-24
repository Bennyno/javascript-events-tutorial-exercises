//Declare your function here
let input = document.querySelector("#hello");
input.addEventListener("click", function() {
	//your code here
	let elem = document.createElement("div");
	elem.innerHTML = "Hello World";
	document.body.appendChild(elem);	
});


