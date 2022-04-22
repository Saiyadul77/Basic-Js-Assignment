// Problem 2: singara, samosa and jilapi total cost.
function pandaCost(singara, samosa, jilapi) {
    if (singara < 0 || samosa < 0 || jilapi < 0) {
        return 'Please enter positive value';//Error handling
    }
    if (typeof singara != 'number') {
        return 'Please enter valid number'; //error handling
    }
    if (typeof samosa != 'number') {
        return 'Please enter valid number';// error handling
    }
    if (typeof jilapi != 'number') {
        return 'Please enter valid number'; //error handling
    }
    const perSingara = 7;
    const perSamosa = 10;
    const perJilapi = 15;
    const totalSingaraCost = singara * perSingara;
    const totalSamosaCost = samosa * perSamosa;
    const totalJilapiCost = jilapi * perJilapi;
    const totalCost = totalSingaraCost + totalSamosaCost + totalJilapiCost;
    return totalCost;
}
const snack = pandaCost(1, 1, 1);
console.log(snack);