const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const upload = require("./../config/cloudinary");
const requireAuth = require("../middlewares/requireAuth");

//http:localhost:4000/api/user/ (READ)
router.get("/", requireAuth, (req, res, next) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      next(error);
    });
});

//http:localhost:4000/api/user (CREATE)
router.post("/", requireAuth, upload.single("profileImg"), (req, res, next) => {
  User.create(req.body)
    .then((newUserAdded) => {
      res.status(201).json(newUserAdded);
    })
    .catch((error) => {
      next(error);
    });
});

//http:localhost:4000/api/user/:id (READ)
router.get("/:id", requireAuth, (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      next(error);
    });
});

//http:localhost:4000/api/user (UPDATE)
router.patch(
  "/:id",
  requireAuth,
  //upload.single("profileImg"),
  function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((dbRes) => {
        res.status(200).send(dbRes);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

//http:localhost:4000/api/user (DELETE)
router.delete("/me", requireAuth, function (req, res, next) {
  console.log("here" + req.session.currentUser);
  User.findOneAndDelete(req.session.currentUser)
    .then((respondApi) => {
      res.status(200).send("User successfully deleted!");
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
