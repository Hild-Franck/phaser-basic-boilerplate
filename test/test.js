const { isArray, clone } = require('lodash')

const { game, gameConfig } = require('../src/main.js')
const stages = require('../src/stages')

describe('Stages', () => {
	it('should all be functions', () => {
		expect(stages.preload()).toBeUndefined()
		expect(stages.create()).toBeUndefined()
	})
})

describe('Game', () => {
	it('should be true', () => {
		expect(gameConfig.length).toEqual(5)
		console.log(gameConfig)
		expect(game.constructor.name).toEqual('')
	})
})

