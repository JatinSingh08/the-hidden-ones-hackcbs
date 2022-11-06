const express = require("express");
const router = express.Router();
// const healthModel = require("./models/database/connection.js");

// userSchema
const User = require("../models/User.js");

// GET all users
// router.get("/", async (req, res) => {
//   const allUsers = await User.find();

//   try {
//     res.json(allUsers); // send all users JSON
//   } catch (err) {
//     res.json({ message: err }); // send error JSON
//   }
// });

router.get("/userData", async (request, response) => {
  const healthData = await User.find({});

  try {
    console.log(healthData)
    response.send(healthData);
    
  } catch (error) {
    response.status(500).send(error);
  }
});

// router.post('/userData', function(req, res, next) {
//   var userDetails = new healthModel({
//     name: req.body.uname,
//     age: req.body.age,
//     bloodgroup: req.body.bloodgroup,
//     hourlyrate: req.body.hrlyrate,
//     totalHour: req.body.ttlhr,
//     total: parseInt(req.body.hrlyrate) * parseInt(req.body.ttlhr),
//   });

// POST new user
router.post("/userdashboard", async (req, res) => {
  const userDetail = new healthModel({
    name: req.body.name,
    age: req.body.age,
    bloodgroup: req.body.bloodgroup,
    bp: req.body.bp,
    dob: new Date(req.body.dob)
  });

  try {
    const savedData = await userDetail.save();
    res.json(savedData); // send saved user JSON
  } catch (err) {
    res.json({ message: err }); // send error JSON
  }
});

module.exports = router;

