/*
homework-1-varible declare and varible type
 */
// var myName = "Mostofa Asik";
// console.log(typeof (myName));

/*
homework-2--How to change value of a varible
/*
homework-3-- types of variable
*/
// var num = 55;
// num = typeof (num);
// console.log(num);

// var firstName = "MAS";
// firstName = typeof (firstName);
// console.log(firstName);

// var IsHappy = false;
// IsHappy = typeof (IsHappy);
// console.log(IsHappy);

/*
homew0rk3--varible naming convention
*/
//don't start any number
//no space
// no dash
//don't start inverted coma
//don't use reserved keywords

//   use underscore
// use camelCase
// use snakeCase

/*
homework-4-- oparation between two varible
*/
// var num1 = 30;
// var num2 = 10;
// var sum = num1 + num2;
// console.log("Sum =" + " " + sum);
// var sub = num1 - num2;
// console.log("Sub =" + " " + sub);
// var mul = num1 * num2;
// console.log("Mul =" + " " + mul);
// var div = num1 / num2;
// console.log("Div =" + " " + div);
// var rem = num1 % num2;
// console.log("Remaider =" + " " + rem);

/*
homework-6-  shorsthand
*/
// += thats means increase  some value with previous value
// -= thats means decrease some value with previous value
// *= thats means multifiaction some value with previous value
// /= thats means division some value with previous  value

/*
homework-7- ++ and --
*/
// var num = 50;
// num++
// console.log(num);
// num--
// console.log(num);


/*
ho0mework-8-- array declaration and fond  array element
*/
// -->> proces-1
// var numbers = [62, 48, 24, 90, 39, 38];

// // var number = numbers.length; -->> proces-1
// // console.log(number);


// -->> proces-2
// var numbers = [62, 48, 24, 90, 39, 38];
// console.log(numbers.length);


/*
homework-9---array's index position
*/
// var bookName =["math","physics","biology","chemistry","bangala"];
//    0        1         2          3         4   
// index start on >> 0 to 1,2,3,4,5.....
//thats means
//["math"]=0
//["physics"]=1
//["biology"]=2
//["chemistry"]=3
//["bangla"]=4


/**
 * homework-10 -- what is index value = -1.
 */
//thats means no value of an array what you find

/**
 * homework-11 ---find index array element
 */

// var bookName = ["math", "physics", "biology", "chemistry", "bangala"];
// console.log(bookName[0]);
// console.log(bookName[1]);
// console.log(bookName[2]);
// console.log(bookName[3]);
// console.log(bookName[4]);

/**
 * homework-12-- how to change index value of an array
 */
// var bookName = ["math", "physics", "biology", "chemistry", "bangala"];
// bookName[3] = "english"; 
// console.log(bookName);
/**
 * homework13--indexOf
 */
// var bookName = ["math", "physics", "biology", "chemistry", "bangala"];
// var book = bookName.indexOf("biology");
// console.log(book);

/**
 * homwork14-- undefined
 */
// var s = ["pen", "book", "cuter"];
// console.log(s(s.length));

/**
 * homework-15 ---array-push -pop
 */
// var bookName = ["math", "physics", "biology", "chemistry", "bangla"];
// bookName.push(" english");
// console.log(bookName);

// bookName.pop();
// console.log(bookName);

/**
 * homework-15---if else
 */
// var macPrice = 80000;
// var gamingLaptopPrice = 60000;
// var lenovoYogaPrice = 40000;
// var mobilePrice = 20000;
// var myBudget = 20000;

// if (macPrice <= myBudget) {
//     console.log("mac is for me");
// }
// else if (gamingLaptopPrice <= myBudget) {
//     console.log("laptop is  for me")
// }
// else if (lenovoYogaPrice <= myBudget) {
//     console.log("yoga is  for me")
// }
// else if (mobilePrice <= myBudget) {
//     console.log("mobile is  for me")
// }
// else {
//     console.log("Mobile is best choice")
// }



/**
 * homework-16 -----
 */

//>>>>>>process-1 
// var i = 1;
// while (i <= 39) {
//     console.log("ajke amar mon valo nei");
//     console.log(i);
//     i++;
// }
//>>>process-2

// for (var i = 1; i <= 39; i++) {
//     console.log(i);
//     console.log("Ajke amar mon valo nei");
// }

/**
 * homework--17--loop variable change
 */
// if loop varibale isn't change the loop is continue to infinity

/**
 * homework--18 write code 58 to 98
 */
// for (var i = 58; i <= 98; i++) {
//     console.log(i);
// }
// /**
//  * even number : 412 to 456
//  */

// for (var i = 412; i <= 456; i += 2) {
//     console.log(i);
// }

/**
 * odd number : 581 to 623
 */

// for (var i = 581; i <= 623; i += 2) {
//     console.log(i);
// }

/**
 * homework--20  all time uses phone
 */

// var usesPhone = ["symphony", "redmi-8", "samsung", "v-75", "Nokia"];
// var i = 0;
// while (i < usesPhone.length) {
//     var phone = usesPhone[i]
//     console.log(phone);
//     i++;
// }


/**
 * homework--35 ---for loop  : 30 to 86
 */

// for (var i = 36; i <= 86; i++) {
//     if (i > 44) {
//         break;
//     }
//     console.log(i);
// }

/***
 * homework--36  
 */
var bookCost = [100, 177, 200, 90, 270, 190, 231, 170, 180];

for (var i = 0; i < bookCost.length; i++) {
    var book = bookCost[i];
    if (book > 200) {
        continue;
    }
    console.log(book);

}

