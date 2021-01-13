const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePhoto: String,
    jobs: [{ type: Schema.Types.ObjectId, ref: "Job" }],
  },
  {
    timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = User;
