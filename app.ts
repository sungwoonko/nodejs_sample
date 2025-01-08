console.log("hello")


let a:number = 10; //숫자, number
let b:string = "Hello"; // 문자열 , String 
let c:boolean = true; // Boolean
let d:number[] = [1,2,3,4,5]; // 배열, array ,  * typeof(object)라고 나옴 *
let e:Person = {name : "tom", age : 25} // object 객체

interface Person{
    name:string;
    age:number;
}

a = 50;
b = "50";

console.log("a = " + a , "type of " + typeof a)
console.log("b = " + b , "type of " + typeof b)
console.log("c = " + c , "type of " + typeof c)
console.log("d = " + d , "type of " + typeof d)
console.log("d[0] = " + d[0] , "type of " + typeof d)
console.log("e.name = " + e.name ,"e.age = " + e.age, "type of " + typeof e)


let columLength = 10; // 길이을 cm number로 지정
 
columLength = 30;

let addLength = columLength + 5;
let meterLength = addLength / 10;

//.. 개발 완료

console.log(addLength +"cm")
console.log(meterLength + "m")