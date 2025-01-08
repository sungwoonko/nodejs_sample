var message = "hello!";
// Accessing the property 'toLowerCase'
// on 'message' and the calling it
message.toLowerCase();
// calling 'message'
// message();
var announcement = "Hello world";
announcement.toLowerCase();
var value = Math.random() < 0.5 ? "a" : "b"; // 삼항 연산자 true : false
if (value !== "a") {
    //..
}
else if (value === "a") {
    //Opps. unreachable
}
function filpCoin() {
    //meant to be Math.random()
    return Math.random() < 0.5;
}
