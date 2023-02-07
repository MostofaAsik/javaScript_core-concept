// function secondLargest(friends) {
//     const friendSort = friends.sort((a, b) => b - a);
//     const secondLargestFrnd = friendSort[1];
//     return secondLargestFrnd;
// }

// const bestFrnd = [1, 2, 3, 4, 7, 8, 9, 20];
// const result = secondLargest(bestFrnd);
// console.log(result);
// // "Sharif", "Arif", "Babul", "Alauddin"



let bestFriends = ['Sharif', 'Arif', 'Babul', 'Alauddin', 'Rahamotullahshahgurbaz', 'Kabir', 'Mahabub'];
function largestName(friends) {
    let sortFriend = friends.sort((a, b) => b.length - a.length);
    // console.log(sortFriend);
    let largestName = sortFriend[0];
    console.log(largestName);


}
largestName(bestFriends);