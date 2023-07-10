function setInputs(x, y, step) {
    for(let i = 0; i < drawing.length; i += step) {
        x.push(drawing[i].x);
        y.push(drawing[i].y);
    }
}