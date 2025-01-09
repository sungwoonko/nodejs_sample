// Class 이용 -> 설계도 
class Robot1 { //Members
    
    // Property 또는 Field(속성, 필드)
    name: string;
    model: string;
    status: string = "Active"; 

    // Constructor(생성자)
    constructor(name: string, model: string){
        this.name = name;
        this.model = model;
    };


    // Method(행동)
    performTask (task: string){
      console.log(`${this.name} is performing ${task}.`);
    };

    updateStatus (newStatus: string){
        this.status = newStatus;
        console.log(`${this.name} 's status is now ${this.status}`);
    };
}


// Create Instance of the Robot class; => 생성자 호출출
let r11 = new Robot("r1-a11","optimus1")
let r22 = new Robot("r2-a22","optimus2")
let r33 = new Robot("r3-a33","optimus3")

// Accessing fields and Calling methods
console.log(r1.name)
console.log(r2.model)
console.log(r3.status)


// 객체
r1.performTask("charging");
r2.performTask("exploreing");
r3.updateStatus("repairing");


// No-args Constructor

class Pet{
    category: string = "Cat";
    name: string = "Chu";

    // 기본 생성자
    // constructor() {}
}

let p1 = new Pet();
console.log(p1.name);


class User {
    // 필드 부분
    username: string; // 타입만을 표기하는 경우
    email: string; 
    job:string = "student"; // 기본 값을 주는 경우

    // 생성자 부분
    constructor(user: string, email: string){
        this.username = this.username;
        this.email = email;
    }

    // 메서드 부분
    study(): void {
        console.log(`${this.username} is studying`);
    }

}

// 객체 생성 (new 키워드와 arguments 입력)
let user1 = new User("홍길돌","djfkdfj@naver.com");
let user2 = new User("홍길디","erere@naver.com");

// 객체의 사용, 접근(.도트연산자 사용)
// 1. 인스턴스 자체 접근
console.log(user1); // 출력 : User{username: '홍길동', email: '...'}
// 2. 인스턴스의 세부 필드 접근
console.log(user2.username); // 출력 : 김철수
// 3. 메서드 호출
user1.study();
user2.study();