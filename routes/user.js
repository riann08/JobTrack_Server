const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const upload = require("./../config/cloudinary");
//const requireAuth = require("../middlewares/requireAuth");

 //http:localhost:4000/api/user/:id (READ)
router.get("/",     
//requireAuth,
(req, res, next) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      next(error);
    });
});


//http:localhost:4000/api/user (CREATE)
router.post("/",     
//requireAuth,
upload.single("profileImg"),
(req, res, next) => {
  User.create(req.body)
  .then((newUserAdded) => {
    res.status(201).json(newUserAdded);
  })
  .catch((error) => {
    next(error);
  });
});

//http:localhost:4000/api/user/:id (READ)
router.get("/:id",     
//requireAuth,
(req, res, next) => {
 User.findById(req.params.id).populate("jobs")
   .then((user) => {
     res.status(200).json(user);
   })
   .catch((error) => {
     next(error);
   });
});

//http:localhost:4000/api/user (UPDATE)
router.patch("/:id", 
//requireAuth,
//upload.single("profileImg"),
function (req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((responseApi) => {
      res.status(200).send("User information successfully updated!");
    })
    .catch((error) => {
      console.log(error);
    });
});

 //http:localhost:4000/api/user (DELETE)
router.delete("/:id", 
//requireAuth, 
function (req, res, next) {
 User.findOneAndDelete(req.params.id)
    .then((respondApi) => {
      res.status(200).send("User successfully deleted!");
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;