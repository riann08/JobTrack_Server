const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var enu = {
  values: [
    "To Apply For",
    "CV Sent",
    "To Follow-Up",
    "For Interview",
    "For Job Offer",
    "Accepted",
    "Rejected",
  ]
}

const jobSchema = new Schema(
  {
    company: { type: String, required: true },
    jobTitle: { type: String, required: true },

    jobDescription: String,
    contactPerson:
      {
        name: String,
        phone: Number,
        email: String,
      },
    website: String,
    notes: String,
    status: {
      type: String,
      enum: enu,
      trim: true
    },
    cvSentDate: Date,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
