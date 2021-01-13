require("dotenv").config();
require("../config/dbConnection");
//const Job = require("../models/Job");
const User  = require("../models/User");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const jobs = [
//   {
//     company: "IBM",
//     jobTitle: "Software Engineer",
//     notes: "no notes",
//     status: "To Apply For",
//      },
//     {
//     company: "Convergys",
//     jobTitle: "Software Engineer",
//     website: "www.convergys.com",
//     status: "For Follow-up"
//      }
//     ]

const users = [
  {
    userName: "Ann",
    email: "ann@me.com",
    password: "1234",
  },
  {
    userName: "Joy87",
    email: "joy@joy.com",
    password: "1234",
  },
];

async function insertSamples() {
  try {
    //await Job.deleteMany();
    await User.deleteMany();
    //const inserted = await Job.insertMany(jobs);
    const inserted = await User.insertMany(users);
    console.log(`sample seeding done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
}

insertSamples();
