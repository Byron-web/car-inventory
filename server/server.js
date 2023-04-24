// Import the Express framework
const express = require("express");

// Create a new instance of the Express application
const app = express();

let mongoose = require("mongoose");
const uri =
  "mongodb+srv://Byron_Labuschagne:UGSezTOWcp96YLwp@test.f6dzjwi.mongodb.net/test";
mongoose.Promise = global.Promise;

mongoose.connect(uri, {
  useMongoClient: true,
  dbName: "myFirstDataBase",
});

mongoose.connection.on("error", function () {
  console.log("Could not connect to the database. Exiting now...");
  process.exit();
});

mongoose.connection.once("open", function () {
  console.log("Successfully connected to the database");
});

// Serve the files in the public directory as static files
app.use(express.static("public"));

//Carry on with task 8 from here
// Define a route that responds with the users data in JSON format
app.get("/api", (req, res) => {
  res.json({ users });
});

// Start the server and listen on port 5000
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
