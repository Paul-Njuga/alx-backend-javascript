/**
 * Represents an alx course.
 * @class
 */

/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  /**
   * Create a course.
   * @constructor
   * @param {string} name - Name of the course.
   * @param {number} length - Length of time in years.
   * @param {Array<string>} students - An array of students.
   */
  constructor(name, length, students) {
    /* Verify type during object creation */
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    else if (typeof length !== 'number') throw new TypeError('Length must be a number');
    else if (!Array.isArray(students)) throw new TypeError('Students must be an array');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Getter methods for each attribute.
   * Setter methods for each attribute with type validation.
   * @param {string|number|Array} value - The value to set.
   */
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value === 'string') this._name = value;
    else throw new TypeError('Name must be a string');
  }

  get length() {
    return this._length;
  }
  set length(value) {
    if (typeof value === 'number') this._length = value;
    else throw new TypeError('Length must be a number');
  }

  get students() {
    return this._students;
  }
  set students(value) {
    if (Array.isArray(value)) this._length = value;
    else throw new TypeError('Students must be an array');
  }
}
