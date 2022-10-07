/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */

export function uniq(arr = []) {
  const lSet = new Set(arr);
  let lResultArray = [];

  for (let key of lSet.keys())
  {
    lResultArray.push(key);
  }

  return lResultArray;
}
