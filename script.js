var body=document.getElementById('bg');
var header=document.querySelector("header");
var ceo=document.querySelector(".ceo");
var about = document.querySelector(".about");
var p = document.querySelector("p");
var h3 = document.querySelector("h3");
var button=document.querySelector(".modechanger");
var icons=document.querySelector(".icon");
// var dp=document.querySelector(".dp");

function modechange() {
	body.classList.toggle("black1");
	ceo.classList.toggle("white");
	about.classList.toggle("white");
	p.classList.toggle("white");
	h3.classList.toggle("white");
	header.classList.toggle("black");
	icons.classList.toggle("nogray");
	// dp.classList.toggle("shadow");
}

button.addEventListener("click", modechange);
