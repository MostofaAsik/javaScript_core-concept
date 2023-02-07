function reverseWord(text) {
    const words = text.split(" ");
    // console.log(words);
    let newWord = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        newWord.push(element);
    }
    let reversed = newWord.join(" ");
    console.log(reversed);
}
const word = "I am A bad Boy";
reverseWord(word);