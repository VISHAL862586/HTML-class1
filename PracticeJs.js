
// case1
if([]){
    console.log("true");
}
else{
    console.log("false");
}


//case2
if ([] == ![]) {
    console.log(true);
}
else{
    console.log(false);
}

//case3
if([]==[]){
    console.log(true);
}
else{
    console.log(false);
}

console.log([] == []);


console.log({} + {});

//for (var i = 0; i < 3; i++) {
//    setTimeout(() => console.log(i), 1000);
//}
//for (let i = 0; i < 3; i++) {
//  setTimeout(() => console.log(i), 4000);
//}

const obj = {
  name: "JS",
  show: () => {
    console.log(this.name);
  }
};

obj.show();


console.log({} + []);

console.log([] + {});
console.log({ } + []);

 {} + [];