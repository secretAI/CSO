export function isUsernameValid(str: string) {
  const regex = /[^0-9A-Za-z]/;
  return !regex.test(str);
}