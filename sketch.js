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
    // translate(200,200);

    // let x = 0;
    // let y = 0;
    // let cx = 0;
    // let cy = 0;
    // for(i = 0; i < fourierY.length; i++) {
    //     let freq = fourierY[i].freq;
    //     let radius = fourierY[i].amp;
    //     let phase = fourierY[i].phase;
    //     stroke(255, 100);
    //     noFill();
    //     cx = x;
    //     cy = y;
    //     ellipse(cx, cy, radius * 2); 
    //     x += radius * cos(freq * time + phase);
    //     y += radius * sin(freq * time + phase);
    //     fill(255);
    //     stroke(255);
    //     line(cx, cy, x, y);
    //     ellipse(x, y, 2);
    
    //     noFill();
        
    // }
    // wave.push(y);
    // stroke(255,100);
    // line(x, y, 300, y);
    // stroke(255);
    // translate(300, 0);
    // beginShape();
    // for(var i = 0; i < wave.length; i++) {
    //     vertex(i , wave[wave.length - 1 - i]);
    // }
    // endShape();
    
    // translate(-300, 0);
    
    
    // if(wave.length > 1000)
    //     wave.shift();
    if(path.length > x.length)
        path = [];
    dt = TWO_PI / fourierY.length;
    time += dt;
}