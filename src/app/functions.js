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

/**
 *
 * @param {Array} banks Array of object bank {name_bank, email}
 * @returns {Object} Object of banks
 *
 * const ret = arrayToObject([a:1, a:3, a:4])
 * => expected output: {1:1, 2:3, 3:4}
 */

export const normalizedBanks = ([...banks]) => {
  const toObject = (bank) => {
    const { name_bank } = bank;
    const id = name_bank.toLowerCase().replaceAll(" ", "");
    var object = new Object();
    object[id] = name_bank;
    return object;
  };

  const addBank = (banks, bank) => ({ ...banks, ...bank });

  return banks.map((bank) => toObject(bank)).reduce(addBank);
};
