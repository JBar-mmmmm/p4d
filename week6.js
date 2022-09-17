/*
    Paste the code for your week 6 exercise below.
*/

function preload() {
    scoreFont = loadFont('https://dl.dropboxusercontent.com/s/mmipx1p7oiuy7th/articulat-cf-demi-bold.ttf?dl=0');
}

function setup() {
    createCanvas(750, 750);
    frameRate(60);
}

let initialX = 750 / 2; //ship starting x position
let initialY = 700; //ship starting y position
let x = 0; //relative x pos of ship from initial 
let y = 0; //relative y pos of ship from initial
let xMod = 2; //ship x vel mod
let yMod = 2; //ship y vel mod
let zMod = 2; //box displacement rate mod
let boxSize = 50; //50
let hitboxMod = 4 / 5; //box hitbox size mod
let scoreFont;
let score = 0;
let lastScore = 0;
let highScore = 0;

//randomise box x position on spawn
let boxPos = {
    x: [150, 300, 600], //x position
    y: [-50, -300, 0], //y starting position (staggered for different timings)
    z: [0, 0, 0], //y displacement 
    xRespawn: [[50, 200, 350, 500, 650], [100, 250, 400, 550, 700], [150, 300, 450, 600]] //possible x pos for each respawning box
}

function draw() {
    ship();
}

function ship() {
    background('white');

    //boxes & game speed
    rectMode(CENTER);
    for(i = 0; i < 3; i = i + 1) {
        noStroke();
        fill('#444');
        rect(boxPos.x[i], boxPos.y[i] + boxPos.z[i], boxSize);
        if (boxPos.z[i] > 800 - boxPos.y[i]) {
            boxPos.z[i] = 0;
            if (zMod < 10) { //speed control
                xMod = xMod + 1 / 5;
                yMod = yMod + 1 / 5;
                zMod = zMod + 4 / 5;
            }
            boxPos.x[i] = random(boxPos.xRespawn[i]); //randomised box x pos on respawn
            boxPos.y[i] = random(-200, -20); //randomised box y pos on repsawn
            score = score + 1;
        }
        boxPos.z[i] = boxPos.z[i] + 1 * zMod;
    }

    //ship
    stroke(0);
    fill('#FFF');
    triangle(initialX + x, initialY + y, initialX + 15 + x, initialY + 30 + y, initialX - 15 + x, initialY + 30 + y);

    //score display
    fill('#000');
    textFont(scoreFont);
    textSize(20);
    text('High Score ' + highScore, 50, 50);
    text('Last Score ' + lastScore, 50, 72);
    text('Score ' + score, 50, 104);

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
        if (y < 15) {
            y = y + 1 * yMod;
        }
    }

    //collision checker
    for(i = 0; i < 3; i = i + 1) {
        if (x < boxPos.x[i] - initialX + boxSize * hitboxMod && x > boxPos.x[i] - initialX - boxSize * hitboxMod && y + 15 < boxPos.y[i] - initialY + boxSize * hitboxMod + boxPos.z[i] && y + 15 > boxPos.y[i] - initialY - boxSize * hitboxMod + boxPos.z[i]) { 
            reset();
        }
    }
}

function reset() {
    x = 0;
    y = 0;
    xMod = 2;
    yMod = 2;
    zMod = 2;
    lastScore = score;
    if (lastScore > highScore) {
        highScore = lastScore;
    }
    score = 0;
    boxPos.z = [0, 0, 0];
}
