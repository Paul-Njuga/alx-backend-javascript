/**
 * Represents a currency.
 * @class
 */

/* eslint-disable no-underscore-dangle */
export default class Currency {
  /**
   * Create a currency.
   * @constructor
   * @param {string} code
   * @param {string} name
   */

  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
   * Attribute getter & setter methods with type validation.
   * @param {string} value
   */
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') throw new TypeError('Code must be a string');
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') throw new TypeError('Name must be a string');
    this._name = value;
  }

  /**
   * Display the currency
   * @returns {string} "name (code))"
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
