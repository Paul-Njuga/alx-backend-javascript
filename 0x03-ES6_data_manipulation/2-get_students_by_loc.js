/**
 * Gets a list of student's based on location.
 * @param {Array<object>}
 * @param {string}
 * returns {Array<object>}
 */
export default function getStudentsByLocation(array, city) {
  return array.filter((student) => student.location === city);
}
