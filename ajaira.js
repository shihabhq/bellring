// const Event = require("events");
const School = require("./index1");

const school = new School;
// what you'll do if the bellring event happens or registering the event
school.on("bellring", ({ alert, person }) => {
  console.log(
    `the bell rang, hurry up!!. you need to ${alert} because ${person} came.`
  );
});
school.bellRing()

