const btn = document.querySelector("button");
const div = document.querySelector(".AddHere");

const promise =fetch("https://dummyjson.com/products");

let index=0;

console.log(promise);


promise 
.then((data)=>data.json())
.then((ActData)=>{
    console.log(ActData)
    btn.addEventListener("click", ()=>{
        if(index<ActData.products.length){
            const img = document.createElement("img");
            const para = document.createElement("p");
            const para1 = document.createElement("p");
            img.setAttribute("src", ActData.products[index].thumbnail);
            para.innerText = ActData.products[index].title;
            para1.innerText = "Price : "+ ActData.products[index].price;
            div.appendChild(img);
            div.appendChild(para);
            div.appendChild(para1);
                index++;
            }
        })
    })