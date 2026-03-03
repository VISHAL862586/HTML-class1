/*
let arr =[1,2,2,3,3,3];
let cnt=1;

for(let i=0; i<arr.length; i++){
    let arr2=[];
        if(arr2[i]===arr[i]){
            continue;
        }
        
        else{
            arr2.push(arr[i]);
            for(let j=i+1; j<arr.length; j++){
                if(arr[i]==arr[j]){
                    cnt++;
                }
            }
            console.log(arr[i]+":"+cnt);
        }
        
    cnt=1;
}
*/ 

let arr =[1,2,2,3,3,3];
let cnt=1;
let arr2=[];   

for(let i=0; i<arr.length; i++){

    if(arr2.includes(arr[i])){
        continue;
    }
    else{
        arr2.push(arr[i]);
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]==arr[j]){
                cnt++;
            }
        }
        console.log(arr[i]+":"+cnt);
    }

    cnt=1;
}
    
