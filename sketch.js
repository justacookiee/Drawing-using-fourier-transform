let time = 0;
let x = [];
let y = [];
let fourierx = [];
let fourierY = [];
let path = [];
let step = 8;

// let wave = [];
// let slider;
function setup() {
    createCanvas(1500, 1500);
    frameRate(60);

    setInputs(x, y, step);

    fourierX = dft(x);
    fourierY = dft(y);

    fourierX.sort((a, b) => b.amp - a.amp);
    fourierY.sort((a, b) => b.amp - a.amp);
}
  
function draw() {
    background(0);

    let epiX = epicycles(width / 2 + 100, 100,  0, fourierX, time);
    let epiY = epicycles(100, height / 2 + 100,  HALF_PI, fourierY, time);

    let coords = createVector(epiX.x, epiY.y);
    path.unshift(coords);

    stroke(255);
    line(epiX.x, epiX.y, coords.x, coords.y);
    line(epiY.x, epiY.y, coords.x, coords.y);
    beginShape();
    for(var i = 0; i < path.length; i++) {
        vertex(path[i].x, path[i].y);
    }
    endShape();
    if(path.length > x.length + 10)
        path = [];
    dt = TWO_PI / fourierY.length;
    time += dt;
}