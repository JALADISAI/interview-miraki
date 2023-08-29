const express = require("express");

const app = express();

const cors = require("cors");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json())

app.use(require("./routes/task"));
app.use(require("./routes/users"));

// Get MongoDB driver connection
const dbo = require("./db/connectDB");
 
app.listen(port, () => {
  // Perform a database connection when server starts
  dbo.run(function (res) {
    if (res) console.log(res);
  });
  console.log(`Server is running on port: ${port}`);
});