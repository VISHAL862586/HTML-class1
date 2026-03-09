let city = "Solapur";
let name1 = "Vishal";
let sentance = `My Name is ${name1} and I live in ${city}`;

console.log(sentance);
let name2 ;

for(let i=name1.length-1; i>=0; i--){
    name2 += name1[i];
    console.log(name1[i]);
}

console.log(name2);


//write a function to accept string in put and return Capitalize


function Capitalize(village){
    let City1 =village.toLowerCase();
    City1 =village[0].toUpperCase();
   return City1;
}
let city2 = Capitalize("PUNE");
console.log(city2);