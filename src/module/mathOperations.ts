// 4 basic operating functions
function add(a: number, b: number):number{
    return a + b;
}
function substract(a: number, b: number):number{
    return a - b;
}
function multiply(a: number, b: number):number{
    return a * b;
}
function divide(a: number, b: number):number{
    return a / b;
}
export function add1(a: number, b: number):number{ // 이런 표현 방식도 가능함, 원하는 곳에만 넣을 수 있음
    return a + b;
} 

export{add,substract,multiply,divide} // export는 아래 쪽에 