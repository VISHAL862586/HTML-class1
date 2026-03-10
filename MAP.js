let cities = ["Pune", "mumbai", "Dehli"];

const modifiedArray = cities.map((el)=>{
    return el.toUpperCase();
})
console.log(modifiedArray);


// Add 5
let arr =[32, 31, 35, 34, 33];

const ModiArray = arr.map((el)=>{
    el+=5;
    return el;
})
console.log(ModiArray);

//Another way
const AnotherWayArray = arr.map(el=> el+5)
console.log(AnotherWayArray);



// return Square
let num =[1, 5, 6, 9, 11];
const Square = num.map(sq=>sq*sq);
console.log(Square);


//

const items = [{price:10, quantity:2}, {price:5, quantity:5}, {price:8, quantity:3}]
const totalPrice = items.map((el)=> {return el.price*el.quantity});
console.log(totalPrice);