/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  return function(obj = {}) 
  { let fieldValue = obj;
    let fieldsName = path.split('.');
    // console.error(fieldsName);
    for (let fieldName of fieldsName)
    {
      if (fieldValue === undefined) 
      {
        break;
      }

      fieldValue = fieldValue[fieldName];
      //if typeof fieldValue === "object" && fieldValue !== null
      //{
      //    lobj =  fieldValue
      //};
    }

    return fieldValue;
  };
}
