class Slider {
    constructor(imagesArray, index = 0) {
        this._images = imagesArray;
        this._currentIndex = index;
    }
    get currentSlide() {
        return this._images[this.currentIndex];
    }

    get currentIndex() {
        return this._currentIndex;
    }

    set currentIndex(value) {
        if(typeof v !== 'number') {
            throw new TypeError('Index must be a number');
        }
        this._currentIndex = v;
    }

    get nextSlide() {
        return (this.currentIndex + 1) % this._images.length;
    }

    get prevSlide() {
        return (this.currentIndex - 1 + this._images.length) % this._images.length;
    }
}