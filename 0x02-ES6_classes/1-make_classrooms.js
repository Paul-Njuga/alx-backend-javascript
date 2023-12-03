import ClassRoom from './0-classroom';

/**
 * @fileoverview Initializes `ClassRoom`s.
 * @description Adds `ClassRoom` objs to an array dynamically.
 */

const sizeArray = [19, 20, 34];
const clsObjArray = [];

/**
 * Dynamically intializes `ClassRoom`s.
 * @function
 * @returns {Array<Object>} clsObjArray - An array of `ClassRoom` instances
 */
export default function intializeRooms() {
  for (const size of sizeArray) clsObjArray.push(new ClassRoom(size));
  return clsObjArray;
}
