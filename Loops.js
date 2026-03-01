for(let i=1; i<=10; i++){
    console.log("hii",i);
}

for(let i=5; i<=15; i++){
    console.log(i);
}

for(let j=0; j>=(-15); j--){
    console.log(j);
}

for(let num=0; num<=20; num++){
    if(num%2==0)
        console.log(num);
}

console.log("Game");

for(let num=1;num<=100; num++ ){
    if(num%3==0 && num%5==0){
        console.log("FizzBuzz");
    }
    else if(num%5==0){
        console.log("Buzz");
    }
    else if(num%3==0){
        console.log("Fizz");
    }
    else{
        console.log(num);
    }
}


console.log("Prime Num");

let num=4;
let cnt=0;
for(let i=1; i<num; i++){
    if(num%i==0){
        cnt++;
    }
}
if(cnt<2){
    console.log("Prime num :",num);
}
else{
    console.log("Not Prime");
}

let no=10;
let sum=0;
for(let i=0; i<=no; i++){
    sum= sum+i;
}
console.log(sum);