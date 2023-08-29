const express = require("express");
 
// taskRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /task.
const taskRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/connectDB");
 
// This helps convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the tasks.
taskRoutes.route("/tasks/list").get(async function (req, res) {
 let db_connect = dbo.getDb("miraki_tasks");
 const result = await db_connect
   .collection("tasks")
   .find({})
   .toArray();
   res.json(result);
});
 
// This section will help you get a single task by id
taskRoutes.route("/task/:id").get(async function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: new ObjectId(req.params.id) };
 const result = await db_connect
   .collection("tasks")
   .findOne(myquery);
   res.json(result);
});
 
// This section will help you create a new task.
taskRoutes.route("/task/add").post(async function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   title: req.body.title,
   desc: req.body.desc,
   markAsComplete: !!req.body.markAsComplete,
 };
 const res = await db_connect.collection("tasks").insertOne(myobj);
 response.json(res);
});
 
// This section will help you update a task by id.
taskRoutes.route("/task/:id").put(async function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: new ObjectId(req.params.id) };
 let newvalues = {
    $set: {}
 };
 if(req.body.title) {
    newvalues.$set.title = req.body.title
 }
 if(req.body.desc) {
    newvalues.$set.desc = req.body.desc
 }
 newvalues.$set.markAsComplete = !!req.body.markAsComplete
 const res = await db_connect
   .collection("tasks")
   .updateOne(myquery, newvalues);
   response.json(res);
});
 
// This section will help you delete a task
taskRoutes.route("/task/:id").delete(async (req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: new ObjectId(req.params.id) };
 const obj = await db_connect.collection("tasks").deleteOne(myquery);
 response.json(obj);
});
 
module.exports = taskRoutes;