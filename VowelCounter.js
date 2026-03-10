let str = "Hello";
let cnt =0;
for(let i=0; i<str.length; i++){
    if(str[i] == "a"|| str[i] =="e"|| str[i] =="i"|| str[i] =="o"|| str[i] =="u"){
        cnt++;
    }
}
console.log(cnt);