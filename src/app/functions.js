/**
 * @param {Object} obj Object
 * @param {Array} keys List of filter
 * @returns {Object} Object with certain properties
 * 
 * const ret = subsetObject({a:1, b:2, c:3}, ['a', 'c'])
 * => expected output: {a:1, c:3}
 */
export const subsetObject = (obj, [...keys]) =>
  Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));
