import { Schema, model } from "mongoose";

const Tokens = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  },
  reToken: {
    type: String,
    required: true
  }
});

export const Token = model("Token", Tokens);
