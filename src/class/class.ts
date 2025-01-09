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


// Create Instance of the Robot class;
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