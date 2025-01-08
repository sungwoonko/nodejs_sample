console.log("hello");
var a = 10; //숫자, number
var b = "Hello"; // 문자열 , String 
var c = true; // Boolean
var d = [1, 2, 3, 4, 5]; // 배열, array ,  * typeof(object)라고 나옴 *
var e = { name: "tom", age: 25 }; // object 객체
a = 50;
b = "50";
console.log("a = " + a, "type of " + typeof a);
console.log("b = " + b, "type of " + typeof b);
console.log("c = " + c, "type of " + typeof c);
console.log("d = " + d, "type of " + typeof d);
console.log("d[0] = " + d[0], "type of " + typeof d);
console.log("e.name = " + e.name, "e.age = " + e.age, "type of " + typeof e);
var columLength = 10; // 길이을 cm number로 지정
columLength = 30;
var addLength = columLength + 5;
var meterLength = addLength / 10;
//.. 개발 완료
console.log(addLength + "cm");
console.log(meterLength + "m");


const obj = {width: 10, height : 15};
const area = obj.width * obj.height;