require("dotenv").config();
require("../config/dbConnection");
const Job = require("../models/Job");
const User  = require("../models/User");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

 const jobs = [
       {
       company: "IBM",
       jobTitle: "Software Engineer",
       notes: "no notes",
       status: "To Apply For",
       userId: ["600950da8b59a14a166f69c9"]
       },
       {
         company: "Convergys",
       jobTitle: "Software Engineer",
       website: "www.convergys.com",
       status: "To Follow-Up",
       userId: ["600950da8b59a14a166f69c9"]

       },
       {
         company: "Company 1",
         jobTitle: "Product Manager",
         notes: "no notes",
         contactPerson_Name: "Betina Ang", 
         conactPerson_Email: "b.ang@company1.com",
         notes: "need to call",
         status: "For Interview",
         userId: ["600950da8b59a14a166f69c9"]
         }, 
         {
           company: "Company B",
           jobTitle: "Product Manager",
           notes: "hey",
           contactPerson_Name: "Betina Ang", 
           conactPerson_Email: "b.ang@company2.com",
           notes: "need to call",
           status: "For Interview",
           userId: ["60007b78547e18197f387324"]
           },
         {
             company: "Company 1",
             jobTitle: "Product Manager",
             notes: "no notes",
             conactPerson: {name: "Betina Ang", email: "b.an@company1.com"},
             notes: "need to call",
             status: "Accepted",
             userId: ["600950da8b59a14a166f69c9"]
             },
             {
               company: "Company 3",
               jobTitle: "Product Owner",
               notes: "no notes",
               contactPerson_Name: "Betina Ang", 
               conactPerson_Email: "b.ang@company1.com",
               notes: "need to call",
               status: "CV Sent",
               userId: ["600950da8b59a14a166f69c9"]
             },

         {
           company: "Convergys",
         jobTitle: "Software Engineer",
         website: "www.convergys.com",
         status: "To Follow-Up"
  
         }
      ]

//  const users = [
//    {
//      userName: "Ann",
//      email: "ann@gmail.com",
//      password: "1234",
//    },
//    {
//      userName: "Joy87",
//      email: "joy@joy.com",
//      password: "1234",
//    },
//  ];

async function insertSamples() {
  try {
    //await Job.deleteMany();
    //await User.deleteMany();
    const inserted = await Job.insertMany(jobs);
    //const inserted = await User.insertMany(users);
    console.log(`sample seeding done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
}

insertSamples();
