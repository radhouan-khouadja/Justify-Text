import express from "express";
import getJustifiedText from "../controllers/textJustifyController.js";
import protect from "../middleware/authMiddleware.js";
import verfyRateLimit from "../middleware/rateLimitMiddleware.js";

const router = express.Router();

router.route("/").post(protect, verfyRateLimit, getJustifiedText);

export default router;
