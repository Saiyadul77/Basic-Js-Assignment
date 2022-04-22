// Problem 1: ana to vori
function anaToVori(ana) {
    if (typeof ana != 'number') {
        return 'Please enter a valid number'; //error handling.
    }
    if (ana < 0) {
        return 'Please enter a positive value'; //error handling.
    }
    const vori = ana / 16;
    return vori;
}
const voriStatus = anaToVori(48);
console.log(voriStatus);