/*
    Paste the code for your week 5 exercise below.
*/
function setup() {
    createCanvas(760, 750);
    frameRate(60);
}
let x = 0;
let y = 0;
let a = ['#111', '#222', '#333'];
let b = ['#111', '#222', '#333', '#444', '#555', '#666', '#777', '#888'];
let c = ['#111', '#222', '#333', '#444', '#555', '#666', '#777', '#888', '#999', '#aaa', '#bbb', '#ccc', '#ddd', '#eee', '#fff'];
let arrayCycle = 0;
let currentArrayCycleCount = 1;
let colour;
console.log(currentArrayCycleCount);
let meter = 0;
let meterColour = 0;

function draw() {
    rectMode(CENTER);
    boxes(2, 2, 20);
}

function boxes(xOffset, yOffset, boxSize) {
    if(arrayCycle == 0) { //cycle 1
        colour = random(a);
    } else if(arrayCycle == 2) { //cycle 3
        colour = random(c);
    } else { //cycle 2 & 4
        colour = random(b);
    }
    fill(colour);
    rect(boxSize / 2 + xOffset + x, 750 - boxSize / 2 - yOffset - y, boxSize);
    if(x < 750 - 2 * (boxSize + xOffset)) { //fill column
        x = x + boxSize;
    }
    if(x > 750 - 2 * (boxSize + xOffset)) { //next row & meter
        x = 0;
        y = y + boxSize;
        while(meter < y) {
            if(meterColour % 2 == 0) {
            fill('white');
            } else {
                fill('black');
            }
            rect(755, 750 + boxSize / 2 - yOffset - y, 10, boxSize);
            meter = meter + boxSize;
        }
    }
    if(y > 750 - 2 * (boxSize + yOffset)) { //cycle to next state
        x = 0;
        y = 0;
        arrayCycle = arrayCycle + 1;
        if(arrayCycle > 3) {
            arrayCycle = 0;
        }
        currentArrayCycleCount = currentArrayCycleCount + 1;
        console.log(currentArrayCycleCount);
        meter = 0;
        meterColour = meterColour + 1;
    }
}