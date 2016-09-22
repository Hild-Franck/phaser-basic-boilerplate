/**
 * Phaser configuration
 * @module ./gameConfig
**/

const { map } = require('lodash')

/**
 * Phaser Global config
 *
 * @property worldWidth {number}
 * @property worldHeight {number}
 * @property render {object}
 * @property DOMElement {string}
 *
**/

const config = {
	worldWidth: 900,
	worldHeight: 600,
	render: Phaser.AUTO,
	DOMElement: ''
}

module.exports = map(config, value => value)