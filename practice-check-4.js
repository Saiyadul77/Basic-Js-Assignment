const closeFriend = ['Asadul', 'Saiyadul', 'Badrul', 'Saiful', 'Faijul', 'Sadrul'];
function oddFriend(friends) {

    for (const friend of friends) {
        if (typeof friend != "string") {
            return 'Please enter valid name';
        }
    }
    // for (const nameEven of friends) {
    //     if (nameEven.length % 2 == 1) {
    //         friendName = nameEven;
    //     }
    //     else {
    //         return 'Here no odd character';
    //     }
    // }
    let friendName = [];
    for (const element of friends) {
        if (element.length % 2 == 0) {
            friendName = element;
            console.log(friendName);
        }
        else if (element.length % 2 == 1) {
            friendName = element;
            break;
        }
        else {
            return 'Here is no odd character';
        }
    }

    return friendName;
}
const name = oddFriend(closeFriend);
console.log(name);