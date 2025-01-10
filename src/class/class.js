var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Class 이용 -> 설계도 
var Robot1 = /** @class */ (function () {
    // Constructor(생성자)
    function Robot1(name, model) {
        this.status = "Active";
        this.name = name;
        this.model = model;
    }
    ;
    //Getter for name
    Robot1.prototype.getName = function () {
        return this.name;
    };
    //Getter for model
    Robot1.prototype.getModel = function () {
        return this.model;
    };
    // Method(행동)
    Robot1.prototype.performTask = function (task) {
        console.log("".concat(this.name, " is performing ").concat(task, "."));
    };
    ;
    Robot1.prototype.updateStatus = function (newStatus) {
        this.status = newStatus;
        console.log("".concat(this.name, " 's status is now ").concat(this.status));
    };
    ;
    return Robot1;
}());
// Create Instance of the Robot class; => 생성자 호출
var r11 = new Robot1("r1-a11", "optimus1");
var r22 = new Robot1("r2-a22", "optimus2");
var r33 = new Robot1("r3-a33", "optimus3");
// Accessing fields and Calling methods
console.log(r11.getName);
console.log(r22.getModel);
// console.log(r3.status)
// 객체
r11.performTask("charging");
r22.performTask("exploreing");
r33.updateStatus("repairing");
// No-args Constructor
var Pet = /** @class */ (function () {
    function Pet() {
        this.category = "Cat";
        this.name = "Chu";
        // 기본 생성자
        // constructor() {}
    }
    return Pet;
}());
var p1 = new Pet();
console.log(p1.name);
var User = /** @class */ (function () {
    // 생성자 부분
    function User(user, email) {
        this.job = "student"; // 기본 값을 주는 경우
        this.username = this.username;
        this.email = email;
    }
    // 메서드 부분
    User.prototype.study = function () {
        console.log("".concat(this.username, " is studying"));
    };
    return User;
}());
// 객체 생성 (new 키워드와 arguments 입력)
var user1 = new User("홍길돌", "djfkdfj@naver.com");
var user2 = new User("홍길디", "erere@naver.com");
// 객체의 사용, 접근(.도트연산자 사용)
// 1. 인스턴스 자체 접근
console.log(user1); // 출력 : User{username: '홍길동', email: '...'}
// 2. 인스턴스의 세부 필드 접근
console.log(user2.username); // 출력 : 김철수
// 3. 메서드 호출
user1.study();
user2.study();
// 클래스의 상속
var CleaningRobot = /** @class */ (function (_super) {
    __extends(CleaningRobot, _super);
    // Constructor(생성자)
    function CleaningRobot(name, model, cleaningSchedule) {
        var _this = _super.call(this, name, model) || this;
        _this.cleaningSchedule = cleaningSchedule;
        return _this;
    }
    ;
    return CleaningRobot;
}(Robot1));
var CookingRobot = /** @class */ (function () {
    // Constructor(생성자)
    function CookingRobot(name, model, availableMenu) {
        this.status = "Active";
        this.name = name;
        this.model = model;
        this.availableMenus = availableMenu;
    }
    ;
    // Method(행동)
    CookingRobot.prototype.performTask = function (task) {
        console.log("".concat(this.name, " is performing ").concat(task, "."));
    };
    ;
    CookingRobot.prototype.updateStatus = function (newStatus) {
        this.status = newStatus;
        console.log("".concat(this.name, " 's status is now ").concat(this.status));
    };
    ;
    CookingRobot.prototype.performCleaning = function () {
        console.log("".concat(this.name, " 's status is now ").concat(this.availableMenus.join(","), "."));
    };
    return CookingRobot;
}());
// 접근 제어자 Visivility Modifier / Access Modifier
// public - protected - private
// (default)
// public : 모든 클래스에서 접근 가능 (기본값)
// protected : 같은 클래스와 자식 클래스에서 접근 가능
// private : 해당 클래스 내에서만 접근 가능
var c1 = new CleaningRobot("aer-1", "dfsdf", ["sun", "mon"]);
console.log(c1.cleaningSchedule);
c1.performTask;
console.log(c1.getName());
