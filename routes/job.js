const express = require("express");
const router = new express.Router();
const Job = require("../models/Job");
const upload = require("./../config/cloudinary");
//const requireAuth = require("../middlewares/requireAuth");

 //http:localhost:4000/api/job (READ)
router.get("/",     
//requireAuth,
(req, res, next) => {
  Job.find()
    .then((jobs) => {
      res.status(200).json(jobs);
    })
    .catch((error) => {
      next(error);
    });
});

 //http:localhost:4000/api/job/:id (READ)
 router.get("/:id",     
 //requireAuth,
 (req, res, next) => {
   Job.findById(req.params.id)
     .then((job) => {
       res.status(200).json(job);
     })
     .catch((error) => {
       next(error);
     });
 });
//http:localhost:4000/api/job (CREATE)
router.post("/",     
//requireAuth,
upload.single("profileImg"),
(req, res, next) => {
  Job.create(req.body)
    .then((newJobAdded) => {
      res.status(201).json(newJobAdded);
    })
    .catch((error) => {
      next(error);
    });
});

//http:localhost:4000/api/job (UPDATE)
router.patch("/:id", 
//requireAuth,
upload.single("profileImg"),
function (req, res, next) {
  Job.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((responseApi) => {
      res.status(200).send("Job application successfully updated!");
    })
    .catch((error) => {
      console.log(error);
    });
});

 //http:localhost:4000/api/job (DELETE)
router.delete("/:id",
//requireAuth,
function (req, res, next) {
 Job.findOneAndDelete(req.params.id)
    .then((respondApi) => {
      res.status(200).send("Job application successfully deleted!");
    })
    .catch((error) => {
      console.log(error);
    });
});

//search bar find by company name
//http:localhost:4000/api/search

router.get("/search",
//requireAuth,
function (req, res, next) {
  Job.find({ company : "IBM" })
    .then((job) => {
      res.status(200).json(job);
    })
    .catch((error) => {
      console.log(error);
    })
});




module.exports = router;


  