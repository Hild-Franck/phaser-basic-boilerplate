const { isArray, clone } = require('lodash')

const { game, gameConfig } = require('../src/main.js')
const stages = require('../src/stages')

describe('Stages', () => {
	it('should all be functions', () => {
		expect(stages.gamePreload()).toBeUndefined()
		expect(stages.gameCreate()).toBeUndefined()
	})
})

describe('Game', () => {
	it('should be true', () => {
		expect(gameConfig.length).toEqual(5)
		expect(game.constructor.name).toEqual('')
	})
})

