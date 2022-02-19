import { connectToDB } from "./connect";
import { getEnv } from "./tools/env";
import { IApplication } from "./tools/interfaces";
const host: string = getEnv("HOST");
const port: string = getEnv("PORT");

export async function startServer(target: IApplication) {
  await connectToDB();
  target.listen(port, () => {
    console.log(`[${new Date().toLocaleTimeString()}]`);
    console.log(`App has started...
    ( http://${host}:${port}/ )`);
  });
}
