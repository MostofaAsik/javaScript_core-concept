var human = {
    name: "rahim",
    age: 23,
    friends: ["hero", "alom", "mithu"],
    country: "Bangladesh",
    girlfriends: ["rabeya", "sonia", "kulsum"],
    father: {
        name: "abul",
    }
}
//console.log(human.friends);

// console.log(human.father.name);  >>>>nested prioperty name 

//access property name
// console.log(human.friends[0]);

// loop in obeject of freinds array
// for (var i = 0; i < human.friends.length; i++) {
//     var element = human.friends[i];
//     console.log(element);
// }
// human.girlfriends.push("rahima");
// console.log(human.girlfriends)


// loopp in array of human object girlfriends array
for (var i = 0; i < human.girlfriends.length; i++) {
    var element = human.girlfriends[i];
    console.log(element)
}