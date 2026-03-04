const parent = document.querySelector("div")
function createandAddElement(){
    const para=document.createElement("p");
    para.innerText= "This is para crerated from js";

    parent.appendChild(para);
}