/* Factorial  */

let num = 6;
let fact=1;
for(let i=2; i<=num; i++){
    fact=fact*i;
}
console.log("Factorial of " ,num, " is " , fact);

/* Fibonachi Series*/

let a=0;
let b=1;
let upto =10;
let fib=0;
console.log(a);
console.log(b);
for(let i=3; i<=upto; i++){
    fib= a+b;
    console.log(fib);
    a=b;
    b=fib;
}

/* Sum of Digit */
let num1=12345;
let sum=0;
let digit=0;
while(num1>0){
    digit=num1%10;
    sum=sum+digit;
    num1=Math.floor(num1/10);
}
console.log("Sum of digit : ", sum);


/* Palindrome Number */
let num2=11;
let no=num2;
let rev=0;
while(no>0){
    let dgt=no%10;
    rev=(rev*10)+dgt;
    no=no/10;
}
if(rev==num2){
    console.log(num2, " is Palindrome");
}
else{
    console.log(num2," is not Palindrome ");

}
