function isJavascriptFile(string) {
    // if (string.endsWith(".js")) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    if ((string.length - 1 == "s") && (string.length - 2 == "j") && (string.length - 3 == ".")) {
        return true;
    }
    return false;

}
let result = isJavascriptFile("index.js")
console.log(result);