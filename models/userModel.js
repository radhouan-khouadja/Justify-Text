import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    lastRest: {
      type: Date,
      default: Date.now,
    },
    leftWords: {
      type: Number,
      default: 80000,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
