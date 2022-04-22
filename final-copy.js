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


const snack = pandaCost(0, 0, 0);
console.log(snack);



// Problem 3: total picnic budget

function picnicBudget(traveller) {
    if (typeof traveller != 'number') {
        return 'Please enter a valid number'; // error handle
    }
    if (traveller < 0) {
        return 'Please enter a correct information';// error
    }
    if (traveller == 0) {
        return 'No one went on a trip'; //error handling
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


// Problem 4: display first oddFriend character

const closeFriend = ['Asadul', 'Saiyadul', 'Baharul', 'Ziaul', 'Badrul', 'Khairul', 'Saiful', 'Faijul', 'Nurul', 'Sadrul', 'Fakhrul', 'Ruhul'];


function oddFriend(friends) {
    for (const friend of friends) {
        if (typeof friend != "string") {
            return 'Please enter valid name'; //error handle
        }
    }
    let oddName = '';
    for (const friend of friends) {
        if (friend.length % 2 == 0) {
            oddName = friend;
        }
        else if (friend.length % 2 == 1) {
            oddName = friend;
            break;
        }
    }
    return oddName;
}


const friendsName = oddFriend(closeFriend);
console.log(friendsName);