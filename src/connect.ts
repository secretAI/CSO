import mongoose from "mongoose";
import { getEnv } from "./tools/env";

const uri: string = getEnv("MONGO_URI");
const options: object = {useNewUrlParser: true};

export async function connectToDB(): Promise<void> {
  try {
    await mongoose.connect(uri, options);
    console.log("DATABASE: Connection Successful");
    if(!uri) {
      throw new SyntaxError("URI is Undefined");
    }
  }
  catch (err) {
    console.log(err);
    console.log("DATABASE: Bad Connection");
  }
}
