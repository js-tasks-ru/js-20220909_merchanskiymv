/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */

export function trimSymbols(string, size) {
  let lResult = '';
  let lCurrentCount = 0;
  let lCurrentChar;

  size = (size === undefined) ? string.length : size;

  for (let lChar of string) {
    lCurrentChar = lCurrentChar ?? lChar;

    if (lCurrentChar !== lChar) {
      lCurrentCount = 0;
      lCurrentChar = lChar;
    }

    if (lCurrentCount < size) {
      lResult = lResult.concat(lChar);
      lCurrentCount++;
    }
  }
  return lResult;
}
