export default function handleResponseFromAPI(promise) {
  /*
   * We don't need to create a new Promise bcs,
   * we already have the resolved `promise`
   * Thus, we'll return (not resolve/reject) the obj on resolution,
   * or error on rejection
   */

  return promise
    /* Use .then() to return obj on resolution */
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    /* Use .catch() to return empty error obj on rejection */
    .catch(() => new Error());
}
