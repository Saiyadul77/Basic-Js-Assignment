const closeFriend = ['Asadul', 'Saiyadul', 'Baharul', 'Ziaul', 'Badrul', 'Khairul', 'Saiful', 'Faijul', 'Nurul', 'Sadrul', 'Fakhrul', 'Ruhul'];
function oddFriend(friends) {
    for (const friend of friends) {
        if (typeof friend != "string") {
            return 'Please enter valid name';
        }
    }
    let oddCharacterName = '';
    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.length % 2 == 0) {
            oddCharacterName = friend;
        }
        else if (friend.length % 2 == 1) {
            oddCharacterName = friend;
            break;
        }
        else if (friend.length % 2 != 1) {
            return 'There is no odd character';

        }
    }
    return oddCharacterName;
}
const friendsName = oddFriend(closeFriend);
console.log(friendsName);