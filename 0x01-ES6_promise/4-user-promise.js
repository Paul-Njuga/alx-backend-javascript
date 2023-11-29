export default function signUpUser(firstName, lastName) {
  const data = { firstName, lastName };
  return new Promise((resolve) => {
    resolve(data);
  });
}
