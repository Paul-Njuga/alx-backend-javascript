export default function handleResponseFromAPI(promise) {
  /*
   * We don't need to create a new Promise bcs,
   * we already have the resolved `promise`
   * Thus, we'll return (not resolve/reject) the obj on resolution,
   * or error on rejection
   */

  return promise
    /* Use .then() to handle resolution inside func */
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => new Error());
}
