let bodyEle = document.querySelector("body");

let allBtns = document.querySelectorAll("button");

allBtns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        localStorage.setItem("ColorTheme",btn.innerHTML.toLowerCase());
        setColorThemeBody();
        
    })

})

let setColorThemeBody=()=>{
    let color = localStorage.getItem("ColorTheme")
    bodyEle.style.background=color;
}

setColorThemeBody();