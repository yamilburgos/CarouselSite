"use strict";

class slideController {
	constructor() {
		this.slideIndex = 1;
		this.slideList = document.querySelectorAll("article");
		this.addEventListener();
	}
	
	addEventListener() {
		document.querySelector(".carousel-next").addEventListener("click", () => {
			this.moveSlideOut(false);
			
			setTimeout(() => {
				this.showSlides(this.slideIndex += 1, false);
			}, 300)
     	});
	
		document.querySelector(".carousel-prev").addEventListener("click", () => {
			this.moveSlideOut(true);
			
			setTimeout(() => {
				this.showSlides(this.slideIndex -= 1, true);
			}, 300)
     	});
	}
	
	showSlides(currentSlideNumber, movingLeft) {		
		if (currentSlideNumber > this.slideList.length) {
			this.slideIndex = 1;
		} 

		if (currentSlideNumber < 1) {
			this.slideIndex = this.slideList.length;
		}
		
		for (var i = 0; i < this.slideList.length; i++) {	
			this.slideList[i].style.display = "none";
		}
		
		this.slideList[this.slideIndex - 1].style.display = "block";	
		this.moveSlideIn(movingLeft);
	}
	
	moveSlideOut(movingLeft) {
		this.slideList[this.slideIndex - 1].style = (movingLeft === false) 
			? "animation-name: slideRightOut; animation-duration: 1s;"
			: "animation-name: slideLeftOut; animation-duration: 1s;";
	}
	
	moveSlideIn(movingLeft) {
		this.slideList[this.slideIndex - 1].style = (movingLeft === false) 
			? "animation-name: slideRightIn; animation-duration: 1s;"
			: "animation-name: slideLeftIn; animation-duration: 1s;";
	}
}

new slideController();