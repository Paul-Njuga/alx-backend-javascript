/**
 * Represents a classroom.
 * @class
 */

/* eslint-disable no-underscore-dangle */
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
