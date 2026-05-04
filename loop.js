arr=[10, 20, 30, 40, 50]
str="HelloWorld"

function lower(arr){
    let result=[60, 70, 80];
    let i=0;
    while(i<arr.length){
        result.push(arr[i]);
        i++;
    }
    return result;
}
const res = lower(arr);
console.log(res);

function silce(arr){
    if(arr.length>3){
        return arr.slice(0,3);
    }
    else{
        return "Array length is less than or equal to 3";
    }
}
const res1 = silce(arr);
console.log(res1);

function lenghtstr(str){
switch(str.length){
     case 0:
      return "String is empty";
      case 1:
       return "String has 1 character";
       case 2:
        return "String has 2 characters";
       default:
         return "String has more than 2 characters";
    }
}
const res2 = lenghtstr(str);
console.log(res2);

function concateStr(str){
    for(let i=0; i<3; i++){
        str = str.concat("!");
    }
    return str;
}
const res3 = concateStr(str);
console.log(res3);

function mapArr(arr){
    if(arr.length>0){
        return arr.map(num => num*2);
    }
    else{
        return "Array is empty";
    }
}
const res4 = mapArr(arr);
console.log(res4);

function sortArr(arr){
    while(arr.length>0){
        arr.sort((a,b) => b-a);
        return arr;
    }
}
const res5 = sortArr(arr);
console.log(res5);

function filterArr(arr){
    if(arr.length>0){
        return arr.filter(num => num>25);
    }
    else{
        return "Array is empty";
    }   
}
const res6 = filterArr(arr);
console.log(res6);

