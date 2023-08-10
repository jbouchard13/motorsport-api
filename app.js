require("dotenv").config();
const db = require("./models");
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./routes");

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => {
  res.send("Hello World");
});

const connect = async () => {
  // attempt to connect to the db
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
    // once db connection is established, fire up the server
    app.listen(PORT, () => {
      console.log("App now listening on port" + ":" + PORT);
    });
    // display the error if unable to connect to db
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connect();
