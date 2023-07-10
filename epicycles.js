function epicycles(x, y, rotation, fourier, time) {
    for(let i = 0; i < fourier.length; i++) {
        let prevx = x;
        let prevy = y;
        let radius = fourier[i].amp;
        let freq = fourier[i].freq;
        let phase = fourier[i].phase;

        x += radius * cos(freq * time + phase + rotation);
        y += radius * sin(freq * time + phase + rotation);


        stroke(255, 100);
        noFill();
        ellipse(prevx, prevy, radius * 2);
        stroke(255);
        line(prevx, prevy, x, y);
    }
    return createVector(x, y);
}