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