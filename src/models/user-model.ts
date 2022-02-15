import { Schema, model } from "mongoose";

const Users = new Schema ({
  _thisId: {
    type: Schema.Types.ObjectId
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  activationLink: {
    type: String,
    required: true
  },
  isActivated: {
    type: Boolean,
    default: false
  },
  regDate: {
    type: Date,
    default: Date.now()
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

export const User = model("User", Users);
