/**
 * Gets the sum of student's IDs.
 * @param {Array<object>}
 * returns {number}
 */
export default function getStudentIdsSum(array) {
  return array.reduce((sum, student) => sum + student.id, 0);
}
