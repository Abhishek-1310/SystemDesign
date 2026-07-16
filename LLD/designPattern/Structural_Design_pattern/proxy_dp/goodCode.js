// Proxy Pattern provides a surrogate or placeholder for another object, controlling access to it and allowing additional 
// behavior such as lazy loading, caching, security, or logging.
class Img {
    display() {
        throw new Error('implement this method');
    }
}
class RealImg extends Img {
    constructor(fileName) {
        super();
        this.fileName = fileName;
        this.loadImg();
    }
    loadImg() {
        console.log('loading the img from disk', this.fileName);
    }
    display() {
        console.log(`displaying your img: ${this.fileName}`);
    }
}
class ProxyImg extends Img {
    constructor(img) {
        super();
        this.fileName = img;
        this.realImg = null;
    }
    display() {
        if (!this.realImg) {
            const imgs = new RealImg(this.fileName);
            imgs.display();
        }
    }

}

const img1 = new ProxyImg('Abhishek.jpg');
console.log('appliaction loading..')
img1.display();

// The image loads only once.

// Second time,
// image.display();
// the proxy simply reuses the already-loaded object.

// Why is it called "Proxy"?
// Because it stands in place of the real object.
// The client never communicates directly with the real object.
// Everything goes through the Proxy.