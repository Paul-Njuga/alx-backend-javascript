import Building from './5-building';
/**
 * Represents a building sky high.
 * @class
 */

/* eslint-disable no-underscore-dangle */
export default class SkyHighBuilding extends Building {
  /**
   * Initializes Building
   * @constructor
   * @param {number} sqft
   * @param {number} floors
   */
  constructor(sqft, floors) {
    if (typeof sqft !== 'number') throw new TypeError('Square feet must be a number');
    else if (typeof floors !== 'number') throw new TypeError('Floors must be in numbers');
    super(sqft);
    this._floors = floors;
  }

  /**
   * Getter method for sqft.
   * @returns {number} - sqft
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Getter method for floors.
   * @returns {number} - floors
   */
  get floors() {
    return this._floors;
  }

  /**
   * evacuationWarningMessage method for SkyHighBuilding class.
   * @override
   * @returns {string} - Evacuation warning message for sky high building.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
