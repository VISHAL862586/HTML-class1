/*function greet(){
    console.log("Good Morning");
}

greet();

function sum(n1, n2){
    let sum = n1 +n2;
    console.log(sum);
}

sum(10, 20);


function EvenOrOdd(num1){
    if(num1%2==0){
        return true;
    }
    else{
        return false;
    }

}
let num=EvenOrOdd(10);
if(num){
    console.log("Even");
}
else{
    console.log("Odd");
}
*/
/*
function sum (num){
    let sum1=0;
    for(let i=1; i<=num; i++){
        sum1=sum1+i;
    }
    return sum1;
}
let num1=prompt("Enter a Range");
let sum1=sum(num1);
console.log(sum1);
*/


function Factorial (num){
    let fact=1;
    for(let i=1; i<=num; i++){
        fact=fact*i;
    }
    return fact;
}
let fact1 = Factorial(6);
console.log(fact1);