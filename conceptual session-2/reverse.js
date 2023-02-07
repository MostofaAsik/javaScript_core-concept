function reverseString(text) {
    let newString = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        // console.log(element);
        newString = newString + element;

    }
    console.log(newString);
}
reverseString("Hellow");