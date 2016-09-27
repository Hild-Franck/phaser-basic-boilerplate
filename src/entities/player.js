/**
 * Player initialization
 * @module entities/player.js
**/
const toDirection = require('../utils/toDirection')

/**
 * Initialize a player
 * @param {object} The player sprite
 * @param {number} [x=0] The x coordonate the player will spawn
 * @param {number} [y=0] The y coordonate the player will spawn
 * @param {number} [speed=4] The player's speed in pixel/frame
 * @param {number} [dir=90] The player's orientation in degree
 * @return {object} The player instance
**/

const initPlayer = (sprite, x = 0, y = 0, speed = 4, dir = 90) => {
	if(sprite)
		sprite.anchor.setTo(0.5, 0.5)
	const player = {
		x,
		y,
		speed,
		dir,
		sprite,
		move: ({ x, y }) => {
			player.sprite.body.velocity.x = 0
			player.sprite.body.velocity.y = 0
			player.x += x
			player.y += y
			player.dir = toDirection(player.dir, x, y)
			player.sprite.angle = player.dir
			player.sprite.body.velocity.x += x * 50
			player.sprite.body.velocity.y += y * 50
		}
	}
	return player
}

module.exports = initPlayer
