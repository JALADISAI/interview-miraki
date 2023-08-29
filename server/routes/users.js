const express = require("express");
const userRoutes = express.Router();
const dbo = require("../db/connectDB");
const ObjectId = require("mongodb").ObjectId;

userRoutes.route(`/user/login`).post(async function(req, res) {
   const db_connect = dbo.getDb();
   const { userName, password } = req.body
   console.log('body', req.body);
   let obj = {
    userName,
    password
   }
   const myquery = { userName };
   let user = await db_connect.collection(`users`).findOne(myquery);
   if(user == null) {
    const result = await db_connect.collection(`users`).insertOne(obj);
    user = await db_connect.collection(`users`).findOne({ _id: new ObjectId(result.insertedId) })
   }
   delete user.password
   res.json(user);
})

module.exports = userRoutes