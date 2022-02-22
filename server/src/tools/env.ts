// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

export function getEnv(key: string): string {
  const value = process.env[key];

  if(value) {
    return value;
  }

  console.log(`Переменная ${key} не найдена в ENV`);
  process.exit(1);
}
