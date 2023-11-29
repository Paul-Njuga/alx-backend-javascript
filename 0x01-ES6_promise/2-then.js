export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    const data = { status: 200, body: 'success' };

    if (promise) resolve(data);
    else reject(new Error());

    /* Use .then() to handle resolution inside func */
    Promise.resolve()
      .then(() => {
        console.log('Got a response from the API');
      });
  });
}
