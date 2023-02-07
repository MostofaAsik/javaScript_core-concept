const friends = [12, 44, 33, 55, 22, 23, 34, 56, 69];
const partial = friends.splice(2, 6, 100, 65, 55);
/*
 * from partial variable
*/
//1. 2 means 2 no index
//2.  6 means  total 6 index remove with includes 2 no index
//3.  100,65,55 >> insert element

console.log(partial);
console.log(friends);

/**
 * note://splice change the root array
 */