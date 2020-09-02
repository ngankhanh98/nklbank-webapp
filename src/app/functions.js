/**
 * @param {Object} obj: Object
 * @param {Array} keys: List of filter
 * @returns Object with only specific filter
 */
export const subsetObject = (obj, [...keys]) =>
  Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));
