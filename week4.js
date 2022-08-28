/*
    Paste the code for your week 4 exercise below.
*/
function setup() {
    createCanvas(750, 750);
  }

function draw() {
    function Logo(dx, dy, scaleVal, sWeight) {
        scale(scaleVal);
        strokeWeight(sWeight);
        ellipseMode(RADIUS);
        strokeCap(ROUND);
        strokeJoin(ROUND);
        let cEdgeLength = 67; //67
        //C edge trails
        fill('white');
        triangle(200 + dx, 0 + dy, 200 + dx, cEdgeLength + dy, 510 + dx, 800 + dy);
        triangle(200 + dx, 400 + dy - cEdgeLength, 200 + dx, 400 + dy, 510 + dx, 800 + dy);
        //B upper trail
        fill('white');
        quad(220 + dx, 0 + dy, 410 + dx, 0 + dy, 510 + dx, 800 + dy, 220 + dx, 190 + dy);      
        //B lower trail
        fill(142 ,201 ,215);
        triangle(0 + dx, 0 + dy, 220 + dx, 400 + dy, 220 + dx, 210 + dy);
        triangle(0 + dx, 0 + dy, 410 + dx, 210 + dy, 220 + dx, 210 + dy);
        //B upper trail crossover
        fill('white');
        strokeWeight(0);
        arc(220 + dx, 110 + dy, 200, 90, 0, HALF_PI, PIE);
        fill(142 ,201 ,215);
        triangle(220 + dx, 190 + dy, 220 + dx, 200 + dy, 230 + dx, 205 + dy);
        strokeWeight(sWeight);
        //B upper letter
        fill(142 ,201 ,215);
        arc(220 + dx, 0 + dy, 190, 190, 0, HALF_PI, PIE);
        //B lower letter
        arc(220 + dx, 210 + dy, 190, 190, 0, HALF_PI, PIE);
        //C trail
        fill('white');
        triangle(51.5 + dx, 400 + dy - cEdgeLength, 200 + dx, 400 + dy, 510 + dx, 800 + dy);
        //C letter
        fill(142 ,201 ,215);
        ellipseMode(CENTER);
        arc(200 + dx, 200 + dy, 400, 400, HALF_PI, PI + HALF_PI);
        erase();
        arc(200 + dx, 200 + dy, 400 - cEdgeLength * 2, 400 - cEdgeLength * 2, HALF_PI, PI + HALF_PI);
        noErase();
        noFill();
        arc(200 + dx, 200 + dy, 400 - cEdgeLength * 2, 400 - cEdgeLength * 2, HALF_PI, PI + HALF_PI);
        line(200 + dx, 0 + dy, 200 + dx, 0 + dy + cEdgeLength);
        line(200 + dx, 400 + dy - cEdgeLength, 200 + dx, 400 + dy);
        ellipseMode(RADIUS);
        //B upper trail additions
        line(220 + dx, 190 + dy, 226 + dx, 200 + dy);
        bezier(226 + dx, 200 + dy, 310 + dx, 200 + dy, 350 + dx, 179.5 + dy, 350 + dx, 179.5 + dy);
        //B lower trail redraw
        strokeWeight(0);
        fill(142 ,201 ,215);
        quad(200 + dx, 400 + dy - cEdgeLength, 85 + dx, 157 + dy, 120 + dx, 110 + dy, 200 + dx, 102 + dy);
        triangle(201 + dx, 400 + dy - cEdgeLength, 85 + dx, 157 + dy, 183 + dx, 400 + dy - cEdgeLength);
        strokeWeight(sWeight);
        line(220 + dx, 210 + dy, 120 + dx, 120 * 21 / 22 + dy);
        line(180 + dx, 330 + dy, 90 + dx, 165 + dy);
        noFill();
        stroke('white');
        strokeWeight(10);
        strokeCap(SQUARE);
        bezier(110 + dx, 215 + dy, 110 + dx, 110 + dy, 120 + dx, 102 + dy, 211 + dx, 102 + dy); //control points need editing
        noStroke();
        fill('white');
        triangle(110 + dx, 210 + dy, 80 + dx, 155 + dy, 120 + dx, 102 + dy);
        rect(110 + dx, 108 + dy, 20, 12)
        stroke(0);
        strokeCap(ROUND);
        noFill();
        strokeWeight(sWeight);
        ellipseMode(CENTER);
        arc(200 + dx, 200 + dy, 400 - cEdgeLength * 2, 400 - cEdgeLength * 2, HALF_PI, PI + HALF_PI);
        ellipseMode(RADIUS);
        //C trail crossover
        fill('white');
        noStroke();
        quad(200 + dx, 400 + dy - cEdgeLength, 200 + dx, 390 + dy, 210 + dx, 390 + dy, 210 + dx, 420 + dy - cEdgeLength);
        stroke(0);
        //C letter/trail redraw + trail additions
        line(200 + dx, 400 + dy - cEdgeLength, 200 + dx, 400 + dy);
        line(200 + dx, 400 + dy - cEdgeLength, 210 + dx, 420 + dy - cEdgeLength);
        line(210 + dx, 420 + dy - cEdgeLength, 210 + dx, 382 + dy);
        line(210 + dx, 382 + dy, 220 + dx, 400 + dy);
        line(200 + dx, cEdgeLength + dy, 205 + dx, 5 * 733 / 310 + cEdgeLength + dy);
    }

    Logo(100 , 20, 0.7, 3);
}


