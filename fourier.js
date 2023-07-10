function dft(x) {
    const N = x.length;
    let X = [];

    for(let k = 0; k < N; k++) {
        let re = 0;
        let im = 0;
        for(let n = 0; n < N; n++) {
            const theta = TWO_PI * k * n / N;
            re += x[n] * cos(theta);
            im -= x[n] * sin(theta);
        }
        re /= N;
        im /= N;
        let freq = k;
        let amp = sqrt(re * re + im * im);
        let phase = atan2(im, re);
        X[k] = {re, im, freq, amp, phase};
    }


    return X;
}