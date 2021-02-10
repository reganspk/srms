import mongoose from "mongoose";

const teacherSchema = mongoose.Schema({
  userType: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },
});

const teacherModal = mongoose.model("teacher", teacherSchema);
export default teacherModal;
