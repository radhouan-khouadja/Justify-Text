import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const generateToken = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(404);
    throw Error("Email is missing");
  } else {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User();
      user.email = email;
      user = await user.save();
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.status(201).send(token);
  }
});

export default generateToken;
