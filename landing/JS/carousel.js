class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.left = document.querySelector('.left-button')
        this.right = document.querySelector('.right-button')
        this.imgs = document.querySelectorAll('.carousel img')
        this.currentIndex = 0;
        this.currentImg = this.imgs[this.currentIndex];
        this.currentImg.style.display = 'block';

        this.left.addEventListener('click', () => this.previous());
        this.right.addEventListener('click', () => this.next());
    }
    previous() {
        const imgs = document.querySelectorAll('.carousel img');
        imgs.forEach(image => image.style.display = 'none');
        this.currentIndex -= 1;
        if (this.currentIndex < 0) {
            this.currentIndex = imgs.length-1;
        }
        if (this.currentIndex > imgs.length-1) {
            this.currentIndex = 0;
        }
        this.imgs[this.currentIndex].style.display = 'block';
    }
    next() {
        const imgs = document.querySelectorAll('.carousel img');
        imgs.forEach(image => image.style.display = 'none');
        this.currentIndex += 1;
        if (this.currentIndex < 0) {
            this.currentIndex = imgs.length-1;
        }
        if (this.currentIndex > imgs.length-1) {
            this.currentIndex = 0;
        }
        this.imgs[this.currentIndex].style.display = 'block';
    }
}

let carousel = document.querySelectorAll('.carousel').forEach(carousel => new Carousel(carousel));