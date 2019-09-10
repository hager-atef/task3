var test=document.querySelector(".test");

var lightboxcontainer=document.querySelector(".lightbox-container");
var wClose=document.querySelector("#wClose");

test.addEventListener("click",function() {

	lightboxcontainer.classList.add("show");


})

wClose.addEventListener("click",function() {

	lightboxcontainer.classList.remove("show");


})

	

