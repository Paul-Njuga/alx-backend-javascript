/**
 * Represents a classroom.
 * @class
 */
export default class ClassRoom {
  /**
   * Create a classroom.
   * @constructor
   * @param {number} maxStudentSize,
   * - The max number of students per classroom.
   */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
