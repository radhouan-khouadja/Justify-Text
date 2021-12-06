import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dateComparaison from "../utils/dateComparaison.js";

const verifyRateLimit = asyncHandler(async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(mongoose.Types.ObjectId(decode.id));
    const date = new Date();
    if (dateComparaison(date, user.lastRest)) {
      if (user.leftWords > 0) {
        user.leftWords--;
        await user.save();
        next();
      } else {
        res.status(402);
        throw new Error("Payment Required");
      }
    } else {
      user.leftWords = 79999;
      user.lastRest = date;
      await user.save();
      next();
    }
  } catch (error) {
    res.status(404);
    throw new Error(error);
  }
});

export default verifyRateLimit;
