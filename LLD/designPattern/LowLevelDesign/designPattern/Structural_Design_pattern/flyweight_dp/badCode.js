class Bullet {

    constructor(x, y) {

        this.image = "bullet.png";
        this.color = "Yellow";
        this.width = 5;
        this.height = 10;

        this.x = x;
        this.y = y;

    }

}
const bullets = [];

for(let i = 0; i < 10000; i++){

    bullets.push(new Bullet(i, i));

}

// same Bullet3 ,Image, Color, Width ,Height store 10000 times but that is common data shoudl not store taht much time memory wast