const express = require("express");
const messageQueue = require("./bull");

const app = express();

// Adding Job
messageQueue.add(
  "displayConsoleMessage",
  { data: "Hello World!!!" },
  { repeat: { cron: "*/2 * * * *" }, removeOnComplete: true }
);
// previously, I set the cron as "* * * * *" and the data value was {data: "Hello World"}
// After that, I replaced the message {data: "Hello World!!!"} and cron like {cron: */2 * * * *}
// Still, it is picking the old cron expression and message

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello, World" });
});

const PORT = 5001;
app.listen(PORT, () => console.log(`App is listining on port ${PORT}`));
