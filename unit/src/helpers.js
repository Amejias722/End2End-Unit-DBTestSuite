/**
 * Assume the following function will be exposed as part of a library.
 * As such, we can't know what will be passed in by external users of this function.
 *
 * You do not need to make any changes to this file.
 */

/**
 * Sorts object by specified key.
 *
 * @param  {object[]} items   An array of objects
 * @param  {string}   sortBy  One of the keys on an object in the array
 * @return {object[]}         A new array with the values sorted
 */
export const sortObjects = function (items, sortBy) {
  if (
    !Array.isArray(items) ||
    typeof(sortBy) !== 'string' ||
    !sortBy
  ) {
    return;
  }

  return items.toSorted(function (a, b) {
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    return -1;
  });
};
