import jwt from "jsonwebtoken";
import config from "./config.js";

const getToken = (user) => {
  console.log(user);
  return jwt.sign(
    {
      _id: user._id,
      userType: user.userType,
      name: user.name,
      email: user.email,
      password: user.password,
    },
    config.JWT_SECRET,
    {
      expiresIn: "48h",
    }
  );
};

export { getToken };
