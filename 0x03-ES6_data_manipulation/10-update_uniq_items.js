/**
 * Updates map values.
 * @param {Map} - map
 * @returns {Map} - updated map
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  return map.forEach((value, key) => {
    if (value === 1) map.set(key, 100);
  });
}
