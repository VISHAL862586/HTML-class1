let mark =6;

if(mark>35){
    console.log("Pass");
}
else{
    console.log("Fail");
}



// Check num is positive or negative

let num =90;

if(num<0){
    console.log("Num : is Negative");
}

else{
    console.log("Num : Positive");
}



// Grade

mark=98;

if(mark>80){
    console.log("Grade : A");
}
else if(mark>50){
    console.log("Grade : B");
}
else{
    console.log("Grade : C");
}


// 

if(100>=mark >= 90){
    console.log("Excellent");

}else if(80<= mark < 90){
    console.log("Very Good");
}
else if(70<= mark <80){
    console.log("Good");
}
else if(60<= mark < 70){
    console.log("Average");
}
else if(50<= mark < 60){
    console.log("Below Average");
}
else if(40<= mark < 50){
    console.log("     ");
    
}
else{
    console.log("Try Again");
}

// 
let num1 = 35;
if(num1 % 3 == 0 && num1 %5 ==0){
    console.log("FizzBuzz");
}
else
if(num1 % 5 == 0){
    console.log("Buzz");
}
else if(num1%3==0){
    console.log("Fizz");
}
 
else{
    console.log(num1);
}