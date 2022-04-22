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
    const firstCategoryPerCost = 5000;
    const secondCategoryPerCost = 4000;
    const thirdCategoryPerCost = 3000;
    if (traveller >= 1 && traveller <= 100) {
        const totalBudget = traveller * firstCategoryPerCost;
        return totalBudget;
    }
    else if (traveller > 100 && traveller <= 200) {
        const firstCategoryTotalCost = 100 * firstCategoryPerCost;
        const restTraveller = traveller - 100;
        const secondCategoryTotalCost = restTraveller * secondCategoryPerCost;
        const totalBudget = firstCategoryTotalCost + secondCategoryTotalCost;
        return totalBudget;
    }
    else if (traveller > 200) {
        const firstCategoryTotalCost = 100 * firstCategoryPerCost;
        const secondCategoryTotalCost = 100 * secondCategoryPerCost;
        const restTraveller = traveller - 200;
        const thirdCategoryTotalCost = restTraveller * thirdCategoryPerCost;
        const totalBudget = firstCategoryTotalCost + secondCategoryTotalCost + thirdCategoryTotalCost;
        return totalBudget;
    }
}
const budgetStatus = picnicBudget(0);
console.log(budgetStatus);