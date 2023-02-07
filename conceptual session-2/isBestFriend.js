let bestFriend = [
    { name: "abul", friend: "babul" },
    { name: "babul", friend: "abul" }
];

function isBestFriend(object1, object2) {
    if (object1.name == object2.friend && object2.name == object1.friend) {
        return true;
    }
    else {
        return false;
    }
}
let result = isBestFriend({ name: "abul", friend: "babul" },
    { name: "babul", friend: "abul" }
);
console.log(result);




// let bestFriend = [
//     { name: "abul", friend: "babul" },
//     { name: "babul", friend: "abul" }
// ];
// function isBestFriend(object) {
//     if (object[0].name == object[1].friend && object[1].name == object[0].friend) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// let result = isBestFriend(bestFriend);
// console.log(result);
