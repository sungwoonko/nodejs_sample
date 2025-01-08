const message = "hello!";
// Accessing the property 'toLowerCase'
// on 'message' and the calling it
message.toLowerCase();
// calling 'message'
// message();


const announcement = "Hello world";

announcement.toLowerCase();

const value = Math.random() < 0.5 ? "a" : "b"; // 삼항 연산자 true : false
if(value !=="a"){
    //..
}else if (value === "a"){
    //Opps. unreachable
}

function filpCoin(){
    //meant to be Math.random()
    return Math.random() < 0.5;
}