export function generateUniqueId() {
  const timestamp = Date.now().toString(36); // Convert timestamp to base-36 string
  const randomString = generateRandomString(6); // Generate a random string of length 6
  return timestamp + randomString;
}

function generateRandomString(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
