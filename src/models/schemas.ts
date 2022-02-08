import { Schema } from "mongoose";

export const Goods = new Schema ({
  _thisId: {
    type: Schema.Types.ObjectId
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  count: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: false
  }
});

export const Users = new Schema ({
  _thisId: {
    type: Schema.Types.ObjectId
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
    default: undefined
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
