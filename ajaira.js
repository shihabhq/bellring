// const Event = require("events");
const indexObj = require("./index1");

const emitter = indexObj.emitter;
const bellRing = indexObj.bellRing;



// what you'll do if the bellring event happens or registering the event
emitter.on("bellring", ({ alert, person }) => {
  console.log(
    `the bell rang, hurry up!!. you need to ${alert} because ${person} came.`
  );
});
bellRing()

