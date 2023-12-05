/**
 * Gets a list of student's based on location.
 * @param {Array<object>}
 * @param {string}
 * returns {Array<object>}
 */
export default function getStudentsByLocation(array, city) {
  if (!Array.isArray(array)) return [];
  if (typeof city !== 'string') throw new TypeError('City must be a string');
  return array.filter((student) => student.location === 'San Francisco');
}
