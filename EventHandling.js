const btn = document.querySelector("button");
/*1st Way
btn.onclick = dosomething;

*/

//2nd Way
btn.addEventListener("click", dosomething)

function dosomething(){
    console.log("Hello");
}