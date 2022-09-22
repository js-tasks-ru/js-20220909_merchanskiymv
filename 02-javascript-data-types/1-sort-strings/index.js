export const SORTASC = 'asc'
export const SORTDESC = 'desc'
/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

let sortType = {
    [SORTASC]: 1,
    [SORTDESC]: -1,
};

export function sortStrings(arr, param = SORTASC) {
    let tempString = [...arr];
  return tempString.sort( (string1, string2) =>  sortType[param] * string1.localeCompare(string2, 'ru-en', {caseFirst:'upper'}) );  
}
