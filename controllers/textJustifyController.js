import asyncHandler from "express-async-handler";
import { justifyText } from "../utils/justifyText.js";

const getJustifiedText = asyncHandler(async (req, res) => {
  if (req.body) {
    const justifiedText = justifyText(req.body, 80);
    res.status(200).type("text/plain").send(justifiedText);
  } else {
    res.status(404);
    throw new Error("Please enter your text");
  }
});

export default getJustifiedText;
