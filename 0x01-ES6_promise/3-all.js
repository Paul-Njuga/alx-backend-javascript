import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  /* Array of promises */
  const promises = [uploadPhoto(), createUser()];

  /* Promise.all() collectively resolves all promises */
  return Promise.all(promises)
    .then((data) => {
      /*
       * `data` fmt:
       * [
       *   { status: 200, body: 'photo-profile-1' },
       *   { firstName: 'Guillaume', lastName: 'Salva' }
       * ]
       */

      /* Deconstruct data into photoData & userData */
      const [photoData, userData] = data;

      /* Extract the relevant info */
      console.log(`${photoData.body} ${userData.firstName} ${userData.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
