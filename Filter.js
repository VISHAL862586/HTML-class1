let cities = ["Pune", "mumbai", "Dehli"];
const filteredCity = cities.filter((el, i)=>{
    return el.endsWith("i");
});
console.log(filteredCity);


let num = [22, 21, 56, 76, 43, 1, 9];
 const filteredNum = num.filter(el=>el%2!= 0)
 console.log(filteredNum);

 // filter out only those student who have passed;

 const students = [
    {name: "John" , mark:35},
    {name: "Alice" , mark:50},
    {name: "Bob" , mark:40},
    {name: "Emma" , mark:30}
 ]

 const PassStudent = students.filter((pass)=>{
    return pass.mark>35});

console.log(PassStudent);


//

const words =["appel", "bat", "banana", "cat", "grape"];
const length = words.filter(len=>len.length<5);
console.log(length);