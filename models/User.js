const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: "Please choose a user name",
    },
    email: {
      type: String,
      required: "Please enter an email",
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImg: String,
    jobs: [{ type: Schema.Types.ObjectId, ref: "Job" }],
  },
  {
    timestamps: true }
);

const User= mongoose.model("User", userSchema);

module.exports = User;
