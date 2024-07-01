const Event = require("events");

class School extends Event.EventEmitter{
    bellRing(){
        console.log("the bell rang");
      
        setTimeout(() => {
          this.emit("bellring", {
            alert: "open the door",
            person: "shihab",
          });
        }, 1000);
      };
}



module.exports = School
