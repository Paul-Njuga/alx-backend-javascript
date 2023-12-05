/**
 * Updates student's grades from a speciic city.
 * @param {Array<object>} students
 * @param {string} city
 * @param {Array<object>} newGrades
 * returns {Array<object>}
 */
export default function updateStudentGradeByCity(array, city, newGrades) {
  return array
    .filter((student) => student.location === city) // Filter first by city
    .map((student) => {
      /* Get the grade based on student ID */
      const gradeById = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student, // Populate base student info
        grade: gradeById ? gradeById.grade : 'N/A', // Update grade based on existance
      };
    });
}
