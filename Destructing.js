let cities = ["Pune", "Mumbai", "dehli"];

// let firstcity = cities[0];
// let secondcity = cities[1];

// Array Destructing

let [firstcity, secondcity]=cities;

console.log(firstcity);



// object destructing

let person={
    username:"Vishal",
    age:22,
    city:"Solapur"
}

let {age, username}= person;

console.log(age);


//Spread Oprator

let cities1 = ["pune", "mumbai", "nashik"];
let cities2 = ["surat", "vadodara", "ahamdabad"];

let NewArray =[...cities1, ...cities2];
console.log(NewArray);

let NewArray1 =[...cities1, "Solapur"];
console.log(NewArray1);



let person1={
    username:"Vishal",
    age:22,
}

let person2={
    city:"Solapur",
    state:"Maharashtra"
}

let NewPerson={...person1, ...person2}
console.log(NewPerson);


