const img = document.querySelector("img");
const h1 = document.querySelector("h1");

const promise = fetch("https://random.dog/woof.json");

promise
.then((data)=> data.json())
.then((actualdata)=>{
     console.log(actualdata)
        img.setAttribute("src", actualdata.url);
    })
.catch((error)=> console.log(error));


function getEmoji(){
const promise1 = fetch("https://emojihub.yurace.pro/api/random");

promise1
    .then((data)=> data.json())
    .then((actualdata)=>{
        console.log(actualdata)
        })
    .catch((error)=> console.log(error));
}