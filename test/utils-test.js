const sign = require('../src/utils/sign.js')
const arrayTestPos = [0, 1, 2, -3, -4]
const arrayTestNeg = [1, 2, 3, -4]

describe('Sign function', () => {
	it('should be positive if paired negative values', () => {
		expect(sign(...arrayTestPos)).toEqual(1)
	})
	it('should be negative if impaired negative values', () => {
		expect(sign(...arrayTestNeg)).toEqual(-1)
	})
	it('should be positive if array of paired negative values', () => {
		expect(sign(arrayTestPos)).toEqual(1)
	})
	it('should be negative if array of impaired negative values', () => {
		expect(sign(arrayTestNeg)).toEqual(-1)
	})
})