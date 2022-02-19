import mongoose from "mongoose";
import { getEnv } from "./tools/env";
import { DataBaseError } from "./exceptions/db-errors";


export async function connectToDB(): Promise<void | Error> {
  try {
    if(!getEnv("MONGO_URI")) {
      throw DataBaseError.uriError();
    }
    const uri: string = getEnv("MONGO_URI");
    await mongoose.connect(uri);
    console.log("DATABASE: Connection Successful");
  }
  catch(err) {
    console.log(err);
  }
}
