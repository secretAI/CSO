// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

export function getEnv(key: string): string {
  const value = process.env[key];

  if(value) {
    return value;
  }

  console.log(`This ENV is missing: ${key}`);
  process.exit(1);
}
