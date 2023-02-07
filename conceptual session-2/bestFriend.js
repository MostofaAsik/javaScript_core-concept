// let friends = ['Sharif', 'Arif', 'Babul', 'Alauddin', 'Rahamotullahshahgurbaz', 'Kabir', 'Mahabub'];

// function myFriends(friends) {
//     let longestName = friends[0];
//     for (let i = 0; i < friends.length; i++) {
//         if (friends[i].length > longestName.length) {
//             longestName = friends[i];
//         }
//     }
//     return longestName;
// }

// let allFriend = myFriends(friends);
// console.log(allFriend);



let bestFriends = ['Sharif', 'Arif', 'Babul', 'Alauddin', 'Rahamotullahshahgurbaz', 'Kabir', 'Mahabub'];
function mostLargestName(friends) {
    let largestName = bestFriends[0];
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        if (element.length > largestName.length) {
            largestName = element;

        }
    }
    console.log(largestName);
}
mostLargestName(bestFriends);





// /////////////////////////
// let bestFriends = ['Sharif', 'Arif', 'Babul', 'Alauddin', 'Rahamotullahshahgurbaz', 'Kabir', 'Mahabub'];
// function secondLargestName(friends) {
//     const sortArr = friends.sort((a, b) => a - b);
//     console.log(sortArr[sortArr.length - 1]);
// }
// secondLargestName(bestFriends);
/////////////////////////////

// const points = [40, 100, 1, 5, 25, 10];

// // Sort the numbers in ascending order:
// points.sort(function (a, b) { return a - b });

// let highest = points[points.length - 1];
// console.log(highest);
