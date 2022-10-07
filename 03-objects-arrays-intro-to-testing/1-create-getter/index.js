/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const fieldsName = path.split('.');
  
  return function(obj = {}) 
  { let fieldValue = obj;
    for (let fieldName of fieldsName) {
      if (fieldValue === undefined) break;

      fieldValue = fieldValue[fieldName];
    }

    return fieldValue;
  };
}
