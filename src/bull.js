const Queue = require("bull");

const redis = {
  host: "127.0.0.1",
  port: 6379,
};

const messageQueue = new Queue("Message Queue", { redis });

// process the queue
messageQueue.process("displayConsoleMessage", (job) => {
  console.log("JOB DATA", job.data);
});

messageQueue.on("completed", () => {
  console.log("JOb Completed Successfully!");
});

messageQueue.on("failed", (job) => {
  console.log("JOB failed", job);
});

module.exports = messageQueue;
