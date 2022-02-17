import mongoose from "mongoose";
import { getEnv } from "./tools/env";
import { DataBaseError } from "./exceptions/db-errors";

const uri: string = getEnv("MONGO_URI");

export async function connectToDB(): Promise<void> {
  try {
    await mongoose.connect(uri);
    console.log("DATABASE: Connection Successful");
    if(!uri) {
      throw DataBaseError.uriError();
    }
  }
  catch(err) {
    console.log(err);
    console.log("DATABASE: Bad Connection");
  }
}
