function reverseName(name1, name2) {
    let name1length = name1.length;
    let name2length = name2.length;
    let largeName = "";
    if (name1length > name2length) {
        // console.log(name1.split("").reverse());  >>>procees-1
        largeName = name1;
    }
    else {

        // console.log(name2.split("").reverse()); >>>proceess-1
        largeName = name2;
    }
    let sum = "";
    for (let i = largeName.length - 1; i >= 0; i--) {
        const element = largeName[i];
        // console.log(element);
        sum = sum + element;
    }
    return sum;


}
let result = reverseName("jonh", "alexis")
console.log(result);



// let str = "alexis";
// let sum = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     const element = str[i];
//     // console.log(element);
//     sum = sum + element;
// }
// console.log(sum);
// // 