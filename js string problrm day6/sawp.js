var first = 25;
var second = 45;
//...appproch-1
console.log(first, second);
var temp = first;
first = second;
second = temp;
console.log(first, second);


//...approch2
[first, second] = [second, first];
console.log(first, second);
