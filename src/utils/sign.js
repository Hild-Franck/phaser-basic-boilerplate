/**
 * Sign module
 * @module utils/sign.js
**/

/**
 * Determine the sign of a group of values
 * @param values {array|value} The values can be in an array of values
 * @return {number} 1 if there is paired negative values, -1 otherwise
**/

const sign = (...values) => {
	if(values[0].length)
		values = values[0]

	return values.reduce((acc, value) =>
		value < 0 ? acc * -1 : acc, 1)
}

module.exports = sign