/**
 * toDirection module
 * @module utils/toDirection.js
**/

/**
 * Get the direction pointed by a speed vector
 * @param dir {number} Initial dir
 * @param x {number} x composant of the speed vector
 * @param y {number} y composant of the speed vector
 * @return {number} New direction angle in degree
**/

const sign = require('./sign')
const toDirection = (dir, x, y) =>
	x === 0 && y === 0
		? dir
		: (Math.acos(x/4)) * 180 / Math.PI * sign(y)

module.exports = toDirection 