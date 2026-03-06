//function Expression

let Hello = function (){
    console.log("hi");
}

Hello();

//Arrow Function

let arrFun = ()=>{
    console.log("Call From Arrow Function");
}
arrFun();



const btn = document.querySelector("button");
btn.addEventListener("click", (event)=>{
    console.log("Print from arrow Function");
})