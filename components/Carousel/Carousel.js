class Carousel {
	constructor(carouselElement){
		this.carouselElement = carouselElement;
		this.leftButton = carouselElement.querySelector('.left-button');
		this.rightButton = carouselElement.querySelector('.right-button');

		this.images = document.querySelectorAll('.carousel img');
		[this.rightButton, this.leftButton].forEach(direction => {
			direction.addEventListener('click', () => this.direction(event));
		})
		
		this.currentIndex = 0;
		this.lastImage = this.images.length - 1;

		this.images[this.currentIndex].style.display = 'block';
	}
	direction(event){
		this.images.forEach(image => image.style.display = 'none');
		if(event.target === this.rightButton){
			this.currentIndex === this.lastImage ? this.currentIndex = 0 : this.currentIndex++;
		} else {
			this.currentIndex < 1 ? this.currentIndex = this.lastImage : this.currentIndex--;		}
		// console.log(this.currentIndex);
		// console.log(this.lastImage)
		this.images[this.currentIndex].style.display = 'block';

	}
}
new Carousel(document.querySelector('.carousel'););
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
