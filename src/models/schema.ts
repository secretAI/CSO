import { Schema } from "mongoose";

const Goods = new Schema ({
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

export default Goods;
