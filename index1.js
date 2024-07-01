const Event = require("events");

const emitter = new Event.EventEmitter();

const bellRing = () => {
  console.log("the bell rang");

  setTimeout(() => {
    emitter.emit("bellring", {
      alert: "open the door",
      person: "shihab",
    });
  }, 1000);
};
// console.log(events)

module.exports = {
  bellRing: bellRing,
  emitter: emitter,
};
