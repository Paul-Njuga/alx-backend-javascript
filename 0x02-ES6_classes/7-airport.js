/**
 * @fileoverview Overrides `[Symbol.toStringTag]` property.
 * @description Uses the [Symbol.toStringTag] property to customize,
 * the default string description of an object.
 */

/**
 * Represents an airport
 * @class
 */

/* eslint-disable no-underscore-dangle */
export default class Airport {
  /**
   * Create Airport
   * @constructor
   * @param {string} - name
   * @param {string} - code
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * When an object is passed to Object.prototype.toString(),
   * it uses the value of [Symbol.toStringTag] to determine,
   * how to represent the object in its string form.
   */

  // [Symbol.toStringTag] is overridden to return the airport code as a string
  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
