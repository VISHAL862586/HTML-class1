const h1Element = document.getElementById("heading");

console.log(h1Element);


const paragraphs = document.getElementsByClassName("para");

console.log(paragraphs);
console.log(paragraphs[0]);

const tag = document.getElementsByTagName("h1");
console.log(tag);

function changeContent(){
    h1Element.innerHTML = "Hedaing change frome Js";
}

function changeStyle(){
    h1Element.style.color = "red";
}

function changeDisplay(){
    if(h1Element.style.display=="block"){
        h1Element.style.display ="none"
    }
    else{
        h1Element.style.display ="block"
    }
}
    