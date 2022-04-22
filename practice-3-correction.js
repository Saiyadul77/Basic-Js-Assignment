function picnicBudget(traveller) {
    if (typeof traveller != 'number') {
        return 'Please enter a valid number';
    }
    if (traveller < 0) {
        return 'Please enter a correct information';
    }
    if (traveller == 0) {
        return 'No one went on a trip';
    }
    const first = 5000;
    const second = 4000;
    const third = 3000;
    if (traveller >= 1 && traveller <= 100) {
        const totalBudget = traveller * first;
        return totalBudget;
    }
    else if (traveller > 100 && traveller <= 200) {
        const firstTotalCost = 100 * first;
        const restTraveller = traveller - 100;
        const secondTotalCost = restTraveller * second;
        const totalBudget = firstTotalCost + secondTotalCost;
        return totalBudget;
    }
    else if (traveller > 200) {
        const firstTotalCost = 100 * first;
        const secondTotalCost = 100 * second;
        const restTraveller = traveller - 200;
        const thirdTotalCost = restTraveller * third;
        const totalBudget = firstTotalCost + secondTotalCost + thirdTotalCost;
        return totalBudget;
    }
}
const budgetStatus = picnicBudget('asdf');
console.log(budgetStatus);