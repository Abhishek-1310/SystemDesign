// Flyweight Pattern reduces memory usage by sharing common intrinsic state among multiple objects while keeping unique
//  extrinsic state separate.
class BulletType {
    // common data
    constructor(image, color, width, height) {

        this.image = image;
        this.color = color;
        this.width = width;
        this.height = height;

    }

}
// This class contains only shared data.
class Bullet {
    constructor(type, x, y) {
        this.type = type;

        this.x = x;
        this.y = y;
    }
    draw() {
        console.log(
            `${this.type.image} at (${this.x}, ${this.y})`
        );
    }

}
// Notice:

// The bullet no longer stores:
// Image, Color, Width, Height
// Instead, it stores a reference: BulletType

class BulletFactory {

    static bulletTypes = {};

    static getBulletType() {

        if (!this.bulletTypes["yellow"]) {

            this.bulletTypes["yellow"] =
                new BulletType(
                    "bullet.png",
                    "Yellow",
                    5,
                    10
                );

        }

        return this.bulletTypes["yellow"];

    }

}
const bullets = [];

const bulletType = BulletFactory.getBulletType();

for (let i = 0; i < 10000; i++) {

    bullets.push(
        new Bullet(
            bulletType,
            i,
            i
        )
    );

}

// How does it work?
// Execution:
// BulletFactory

// BulletType
// (Image)
// (Color)
// (Size)

//         ▲
//         │
//  ┌──────┼────────┐
//  │      │        │
// Bullet Bullet Bullet
// (x,y)  (x,y)   (x,y)

// Every bullet shares the same appearance.

// Only position differs.