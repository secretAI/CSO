import { connectToDB } from "./models/connect";
import { notify } from "./config/notify";
import { getEnv } from "./config/env";
const host: string = getEnv("HOST");
const port: string = getEnv("PORT");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function startServer(target: any) {
  await connectToDB();
  target.listen(port, () => {
    console.log(notify());
    console.log(`App has started...
    ( http://${host}:${port}/ )`);
  });
}
