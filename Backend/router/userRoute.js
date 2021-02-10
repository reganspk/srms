import express from "express";
import User from "../modal/userModal.js";
import { getToken } from "../util.js";

const router = express.Router();
router.post("/signin", async (req, res) => {
  console.log(req.body);
  const signinUser = await User.findOne({
    userType: req.body.UserType,
    email: req.body.Email,
    password: req.body.Password,
  });

  if (signinUser) {
    console.log(signinUser);
    res.send({
      _id: signinUser._id,
      userType: signinUser.userType,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser),
    });
  } else {
    res.status(401).send({ msg: "Invalid Email or Password" });
  }
});
router.post("/register", async (req, res) => {
  console.log(req.body);
  const user = new User({
    userType: req.body.UserType,
    name: req.body.Username,
    email: req.body.Email,
    password: req.body.Password,
  });
  const newUser = await user.save();
  if (newUser) {
    res.send({
      _id: newUser._id,
      userType: newUser.userType,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: getToken(newUser),
    });
  } else {
    res.status(401).send({ msg: "Invalid User Data" });
  }
});
router.get("/createAdmin", async (req, res) => {
  try {
    const user = new User({
      name: "Intruder",
      userType: "admin",
      email: "intruder@gmail.com",
      password: "intruder",
      isAdmin: true,
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (err) {
    res.send(err);
  }
});
export default router;
