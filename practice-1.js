function anaToVori(ana) {
    if (typeof ana != 'number') {
        return 'Please enter a valid number'; //error handle
    }
    if (ana <= 0) {
        return 'Please enter a positive value'; //error handle
    }
    const vori = ana / 16;
    return vori;
}
const voriStatus = anaToVori(0);
console.log(voriStatus);