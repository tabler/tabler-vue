/**
 * Compares if two objects are the same
 * todo improve comparing object and add to a specific mixin
 * @param object1
 * @param object2
 * @returns {boolean}
 */
export function objectCompare (object1, object2) {
  return JSON.stringify(object1) === JSON.stringify(object2)
}