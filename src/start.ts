import { connectToDB } from "./models/connect";
import { notify } from "./config/notify";
import { getEnv } from "./config/env";
import { Application } from "./interfaces";
const host: string = getEnv("HOST");
const port: string = getEnv("PORT");

export async function startServer(target: Application) {
  await connectToDB();
  target.listen(port, () => {
    console.log(notify());
    console.log(`App has started...
    ( http://${host}:${port}/ )`);
  });
}
