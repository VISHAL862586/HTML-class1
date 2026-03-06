/*const btn = document.querySelector("button");
const inputText = document.querySelector("input");
const h1El = document.createElement("h1");

btn.addEventListener("click", ()=>{
    h1E1.appendChild(inputText.value);
})*/

const btn = document.querySelector("button");
const inputText = document.querySelector("input");
const div = document.querySelector(".inputMsg");

btn.addEventListener("click", () => {
    const h1El = document.createElement("h1"); 
    h1El.textContent = inputText.value; 
    div.appendChild(h1El);


   inputText.value = " ";
});