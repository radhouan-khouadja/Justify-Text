import express from "express";
import generateToken from "../controllers/tokenController.js";

const router = express.Router();

router.route("/").post(generateToken);

export default router;
