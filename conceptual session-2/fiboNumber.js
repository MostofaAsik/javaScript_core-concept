// const fibo=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
/* 
  fibo[2]  (mane 2 no index er man 1) =fibo[1] (mane 1 no index er man 1) + fibo[0] (mane 0 no index er man 0) ;

   fibo[3]  (mane 3 no index er man 2) =fibo[2] (mane 2 no index er man 1) + fibo[1] (mane 1 no index er man 1) ;
*/



const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo)