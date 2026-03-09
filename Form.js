
/*const btn1 = document.querySelector(".signbutton");
btn1.addEventListener("click", (e)=>{
    e.preventDefault();
    const signuserName = document.querySelector(".signName");
    const signEmail = document.querySelector(".signEmail");    
    const signPass = document.querySelector(".signPass");

    const checkname = localStorage.getItem("username");
    const checkmail = localStorage.getItem("email");
    const checkpass = localStorage.getItem("pass");
    
    if(signuserName.value == checkname &&
        signEmail.value == checkmail &&
        signPass.value == checkpass
    ){
        window.location.href = "home.html";
    }
    else{
        alert("Invalid Input");
    }
}); 



const username = document.querySelector(".userName");
const email = document.querySelector(".email");
const pass = document.querySelector(".pass");

const btn = document.querySelector(".signupbutton");

btn.addEventListener("click", ()=>{
    localStorage.setItem("username", username.value );
    localStorage.setItem("email", email.value);
    localStorage.setItem("pass",pass.value);

     window.location.href = "Form.html";

});


*/


const loginBtn = document.querySelector(".signbutton");
const signupBtn = document.querySelector(".signupbutton");


// LOGIN

    loginBtn.addEventListener("click", (e) => {

        e.preventDefault();

        const name = document.querySelector(".userName").value;
        const email = document.querySelector(".email").value;
        const pass = document.querySelector(".pass").value;

        const checkname = localStorage.getItem("username");
        const checkmail = localStorage.getItem("email");
        const checkpass = localStorage.getItem("pass");

        if (name === checkname && email === checkmail && pass === checkpass) {
            window.location.href = "home.html";
        } else {
            alert("Invalid Login");
        }

    });




// SIGNUP


    signupBtn.addEventListener("click", () => {

        const name = document.querySelector(".userName").value;
        const email = document.querySelector(".email").value;
        const pass = document.querySelector(".pass").value;

        localStorage.setItem("username", name);
        localStorage.setItem("email", email);
        localStorage.setItem("pass", pass);

        window.location.href = "Form.html";

    });

