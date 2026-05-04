arr=[10, 20, 30, 40, 50]
str="HelloWorld"

function insert(){
    arr.push(60);
    console.log("Arr: ", arr);  
}
insert();  

function insertStr(){
    str = "Hello JavaScript";
    console.log("Str: ", str);  
}
insertStr();

function pop(){
    arr.pop();
    console.log("Arr: ", arr);  
}
pop();

function shift(){
    arr.shift();
    console.log("Arr: ", arr);  
}
shift();

function shiftStr(){
    str = str.slice(1);  
    console.log("Str: ", str);  
}
shiftStr();

function reverseArr(){
    arr.reverse();
    console.log("Arr: ", arr);
}
reverseArr();

function consStr(){
    str = str.concat("!...");
    console.log("Str: ", str);
}
consStr();

function arrLength(){
    console.log("Length: ", arr.length);
}
arrLength();

function strLength(){
    console.log("Length: ", str.length);
}
strLength();

function indexOf(){
    console.log("Index: ", arr.indexOf(30));
}
indexOf();

function indexOfStr(){
    console.log("Index: ", str.indexOf("World"));
}
indexOfStr();

function concatArr(){
    const arr1 = [60, 70, 80];
    const arr2 = arr.concat(arr1);
    console.log("Arr2: ", arr2);
}
concatArr();

function splitStr(){
    const strArr = str.split("l");
    console.log("StrArr: ", strArr);
}
splitStr();

function subStr(){
    const subStr = str.slice(0, 5);
    console.log("SubStr: ", subStr);
}
subStr();

function sortArr(){
    const sortArr = arr.sort((a, b) => b - a);
    console.log("SortArr: ", sortArr);
}
sortArr();

function deleteArr(){
    arr.splice(1, 4);
    
    console.log("splice: ", arr);
}
deleteArr();

function filterArr(){
    const filterArr = arr.filter((num) => num > 20);
    console.log("FilterArr: ", filterArr);
}
filterArr();

function toUpperCaseStr(str){
    const upperStr = str.toUpperCase();
    console.log("UpperStr:", upperStr);
}

toUpperCaseStr("hello");

function toLowerCaseStr(str){
    const lowerStr = str.toLowerCase();
    console.log("LowerStr:", lowerStr);
}
toLowerCaseStr("HELLO");

function mapArr(){
    const mapArr = arr.map((num) => num * 2);
    console.log("MapArr: ", mapArr);
}
mapArr();