const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema(
  {
    company: { type: String, required: true },
    jobTitle: { type: String, required: true },

    jobDescription: String,
    contactPerson: [
      {
        name: String,
        phone: Number,
        email: String,
      }
    ],
    website: String,
    notes: String,
    status: {
      type: String,
      enum: [
        "To Apply For",
        "CV sent",
        "For Follow-up",
        "For Interview",
        "For Job Offer",
        "Accepted",
        "Rejected",
      ],
    },
    cvSentDate: Date,
    userId: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
