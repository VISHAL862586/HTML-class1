const h1Tag = document.querySelector("h1");
const btn1 = document.querySelector(".ChangeByTag");
btn1.addEventListener("click", ()=>{
  h1Tag.innerText = "Change By Selecting Tag";
});

const h1Class = document.querySelector(".heading")
const btn2 = document.querySelector(".ChangeByClass");
btn2.addEventListener("click", ()=>{
    h1Class.innerText = "Change By Selecting Class";
});

const h1Id = document.getElementById("headId");
const btn3 = document.querySelector(".ChangeById");
btn3.addEventListener("click", ()=>{
    h1Id.innerText="Changed B Selecting Id";
});

const div = document.getElementsByTagName("div")[0];
const btn4 =document.querySelector(".AddEle");
btn4.addEventListener("click", ()=>{
    const para = document.createElement("p");
    para.innerText = "Added Para Element";
    div.appendChild(para);
});
