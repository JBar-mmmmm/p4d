/*
    Paste the code for your week 3 exercise below.
*/
function setup() {
    createCanvas(750, 750);
    frameRate(60);
}

let initialX = 750 / 2;
let initialY = 700;
let x = 0;
let y = 0;
let xMod = 2;
let yMod = 2;

function draw() {
    ship();
}

function ship() {
    background('white');
    triangle(initialX + x, initialY + y, initialX + 15 + x, initialY + 30 + y, initialX - 15 + x, initialY + 30 + y);
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        x = x - 1 * xMod;
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        x = x + 1 * xMod;
    }
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        y = y - 1 * yMod;
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        y = y + 1 * yMod;
    }
    if (x > 730 / 2) {
        x = 730 / 2;
    }
}