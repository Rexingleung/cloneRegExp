/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
}
const reg = /foo/g
let reg2 = regClone(reg) // /foo/g
console.log(reg2);