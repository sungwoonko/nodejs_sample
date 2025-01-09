// Pure JS(Vanilia JS) : Object only -> protype - based programming

//object
let robot ={ //Members
    name: "R2-D2",
    model: "AstroMech",
    status: "Active",

    // Method(행동)
    performTask: function(task: string){
        console.log(`${this.name} is performing ${task}.`);
    },

    updateStatus: function(newStatus: string){
        this.status = newStatus;
        console.log(`${this.name} 's status is now ${this.status}`);
    },
    
}
//object
let robot2 ={ //Members
    name: "b2-e2",
    model: "AbstroMech",
    status: "Active",

    // Method(행동)
    performTask: function(task: string){
        console.log(`${this.name} is performing ${task}.`);
    },
}
//object
let robot3 ={ //Members
    name: "c2-f2",
    model: "cstroMech",
    status: "Active",

    // Method(행동)
    performTask: function(task: string){
        console.log(`${this.name} is performing ${task}.`);
    },
}

// usage with "." dot operator
console.log(robot.name) // Accessing Property
robot.performTask("Getting ready to move") // Calling Method

// 메서드 추가와 수정에 비효율적임임