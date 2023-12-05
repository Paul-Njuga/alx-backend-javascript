/**
 * Gets a list of student's IDs.
 * @param {Array<object>}
 * returns {Array<string>}
 */
export default function getListStudentIds(array) {
  if (!Array.isArray(array)) return [];
  return array.map((student) => student.id);
}
