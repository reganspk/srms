import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
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
  class: {
    type: String,
    required: true,
  },

  dob: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  fatherNumber: {
    type: String,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherNumber: {
    type: String,
  },
  fatherOccupation: {
    type: String,
  },
  motherOccupation: {
    type: String,
  },
});

const studentModal = mongoose.model("user", studentSchema);
export default studentModal;
