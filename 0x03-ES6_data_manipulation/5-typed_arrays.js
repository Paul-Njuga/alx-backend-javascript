/**
 * Create Int8 ArrayBuffer
 * @param {Number} length - The length of the ArrayBuffer.
 * @param {Number} position - The specific position to add the Int8 value.
 * @param {Number} value - The Int8 value to be added.
 * @returns {DataView} - A DataView of the modified ArrayBuffer.
 * @throws {Error}
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);

  return view;
}
