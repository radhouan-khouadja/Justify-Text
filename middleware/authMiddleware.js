import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized,no token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized,no token");
  }
});

export default protect;
