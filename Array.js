/*let arr = ["pune", "Solapur"];
console.log(arr);
arr.unshift("mumbai");
console.log(arr);

arr.splice(1 , 1, "Goa");
console.log(arr);*/

let arr = [1,5,9,2,7,13,12];
function sumArray(arr){
    let max=arr[0];
     let second =max;
    for(let i=0; i<arr.length; i++){
        
        if(max<arr[i]){

            second = max;
            max=arr[i];
        }
        else if(second<arr[i]){
            second=arr[i];
        }
    }

    console.log(max);
    return second;
}
let max=sumArray(arr);
console.log(max);
