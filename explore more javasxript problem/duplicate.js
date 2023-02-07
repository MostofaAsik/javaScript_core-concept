// const names = ["abul", "babul", "cabul", "dabul", "abul", "babul", "fabul", "kabul", 'cabul'];

// function removeDuplicate(nameId) {
//     const unique = [];
//     for (let i = 0; i < nameId.length; i++) {
//         const name = nameId[i];
//         
//         if (unique.includes(name) === false) {
//             unique.push(name);
//         }
//     }
//     return unique;
// }
// const duplicate = removeDuplicate(names);
// console.log(duplicate);



const names = ["abul", "babul", "cabul", "dabul", "abul", "babul", "fabul", "kabul", 'cabul'];


function removeDuplicate(nameid) {
    const unique = [];
    for (let i = 0; i < nameid.length; i++) {
        let element = nameid[i];
        if (unique.includes(element) === false) {
            unique.push(element);

        }

    }
    return unique;
}
const duplicate = removeDuplicate(names);
console.log(duplicate);
