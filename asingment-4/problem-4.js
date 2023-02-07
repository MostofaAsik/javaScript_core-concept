function findingBadData(array) {
    //validation-start
    if (Array.isArray(array) !== true) {
        return "Enter Array. plz!!"
    }
    //validation-end
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < 0) {
            newArray.push(element);

        }
    }
    return newArray.length;
}
const data = [1, 2, 5];
const result = findingBadData(data);
console.log(result);