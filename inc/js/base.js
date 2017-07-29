"use strict";

addEventListener();

function addEventListener() {
	 document.querySelector(".carousel-next").addEventListener("click", function() {
        goForward();
     });
	
	document.querySelector(".carousel-prev").addEventListener("click", function() {
        goBack();
     });
}

var slideIndex = 1;

function goForward() {
  showSlides(slideIndex += 1);
}

function goBack() {
  showSlides(slideIndex -= 1);
}

function showSlides(n) {
  	var slides = document.querySelectorAll("article");

	if (n > slides.length) {
		slideIndex = 1;
	} 
  	
	if (n < 1) {
		slideIndex = slides.length;
	}
  
	for (var i = 0; i < slides.length; i++) {
      	slides[i].style.display = "none";
	}
		
  	slides[slideIndex-1].style.display = "block";
}