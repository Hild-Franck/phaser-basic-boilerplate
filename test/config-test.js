const { isArray, clone } = require('lodash')

const config = require('../src/gameConfig.js')
const clonedConfig = clone(config)

describe('Game config', () => {
	it('should be an array', () => {
		expect(isArray(clonedConfig)).toBe(true)
	})
	it('should be a 4 element-long array', () => {
		expect(clonedConfig.length).toEqual(4)
	})
	it('should be a 5 element-long array after init', () => {
		expect(config.length).toEqual(5)
	})
})