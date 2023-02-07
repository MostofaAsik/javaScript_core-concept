function evenOdd(string) {
    //validation
    if (typeof string !== 'string') {
        return "Enter String.Plz!!"
    }

    if (string.length % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
const result = evenOdd("chatgpt");
console.log(result);