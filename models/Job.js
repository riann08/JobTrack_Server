const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  company: { String,
    required: true  },
  jobTitle: { String,
    required: true  },
  jobDescription: String,
  contactPerson: [{
    name: String,
    phone: Number,
    email: String}], 
  notes: String,
status: {
   type: String,
   enum: ['To apply for',
    'CV sent',
    'For Follow-up', 
    'For Interview',
    'For Job Offer',
    'Accepted',
    'Rejected']
    },
cvSentDate: Date,
userId: [{ type: Schema.Types.ObjectId, ref: "User" }],
};
  { timestamps: true }
);

const JobModel = mongoose.model("Job", jobSchema);

module.exports = User;
