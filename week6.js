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
let boxPos = {
    x1: 300 / 2,
    y1: 300 / 2,
    z1: 0, //y displacement 
}
let boxSize = 50;
let hitboxMod = 4 / 5;

function draw() {
    ship();
}

function ship() {
    background('white');
    rectMode(CENTER);
    rect(boxPos.x1, boxPos.y1 + boxPos.z1, boxSize);
    triangle(initialX + x, initialY + y, initialX + 15 + x, initialY + 30 + y, initialX - 15 + x, initialY + 30 + y);

    //box falling
    boxPos.z1 = boxPos.z1 +1;

    //movement
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        if (x > -700 / 2) {
            x = x - 1 * xMod;
        }
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        if (x < 700 / 2) {
            x = x + 1 * xMod;
        }
    }
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        if (y > -690) {
            y = y - 1 * yMod;
        }
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        if (y < 20) {
            y = y + 1 * yMod;
        }
    }

    //collision checker
    if (x < boxPos.x1 - initialX + boxSize * hitboxMod && x > boxPos.x1 - initialX - boxSize * hitboxMod && y + 15 < boxPos.y1 - initialY + boxSize * hitboxMod + boxPos.z1 && y + 15 > boxPos.y1 - initialY - boxSize * hitboxMod + boxPos.z1) { 
        text('Crash', 50, 50);
    }
}