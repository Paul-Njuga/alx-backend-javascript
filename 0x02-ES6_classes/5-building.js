/**
 * Represents a building
 * @class
 */

/* eslint-disable no-underscore-dangle */
export default class Building {
  /**
   * Initializes Building
   * @constructor
   * @param {number} sqft
   */
  constructor(sqft) {
    if (typeof sqft !== 'number') throw new TypeError('Square feet must be a number');
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  /**
   * Getter method for sqft.
   * @returns {number} - sqft
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Abstract method that must be implemented by subclasses.
   * Throws an error if not overridden.
   * @abstract
   * @throws {Error} - If not overridden by subclass.
   */

  /* eslint-disable-next-line class-methods-use-this */
  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
