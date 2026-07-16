class ImgProccesor {
    constructor(img) {
        this.image = img;
        this.uploadFromDisk();
    }
    uploadFromDisk() {
        console.log(`loading your img from disk ${this.image}`);
    }
    display() {
        console.log('displaying your img:', this.image);
    }
}

const img1 = new ImgProccesor('Abhi.jpg');
console.log('Application loaded');
img1.display();

// What's wrong?

// The image is loaded immediately.
// Even before calling :
// image.display();
// the constructor still loads it.
// Imagine: 100 images
// All loaded at startup 😱 Huge waste of memory and time.