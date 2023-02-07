var numbers = [83, 37, 82, 23, 46, 45, 55, 58, 2, 10];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 40) {
        continue;
    }
    console.log(number);
}