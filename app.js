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

app.listen(PORT, () => {
  console.log("App now listening on port" + ":" + PORT);
});
