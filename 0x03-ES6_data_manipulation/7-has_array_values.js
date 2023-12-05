/**
 * Checks for an array within a set.
 * @param {Set} set
 * @param {Array} array
 * returns {boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((elem) => set.has(elem));
}
