/**
 * Vectorize module
 * @module utils/vectorize.js
**/


const sign = require('./sign')

/**
 * Sum two pixel speeds to a speed vector
 * @param xSpeed {number} speed in pixel for x
 * @param ySpeed {number} speed in pixel for y
 * @return {object} The two composants of the speed vector
**/

const vectorize = ({ xSpeed, ySpeed }) => {
	if(xSpeed !== 0 && ySpeed !== 0) {
		xSpeed = Math.sqrt(( xSpeed * xSpeed ) / 2) * sign(xSpeed)
		ySpeed = Math.sqrt(( ySpeed * ySpeed ) / 2) * sign(ySpeed)
	}

	return { xSpeed, ySpeed }
}

module.exports = vectorize