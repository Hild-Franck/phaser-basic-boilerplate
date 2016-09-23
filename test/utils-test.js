const sign = require('../src/utils/sign.js')
const vectorize = require('../src/utils/vectorize.js')
const toDirection = require('../src/utils/toDirection.js')

const arrayTestPos = [0, 1, 2, -3, -4]
const arrayTestNeg = [1, 2, 3, -4]

const objTestTrue = { xSpeed: 4, ySpeed: 4 }
const objTestFalse = { xSpeed: 0, ySpeed: 0 }

const xTest = Math.sqrt(( 4 * 4 ) / 2) * sign(4)

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

describe('Vectorize function', () => {
	it('should return unchanged object if a value is 0', () => {
		expect(vectorize(objTestFalse)).toEqual(objTestFalse)
	})
	const objResult = vectorize(objTestTrue)
	it('should return vectorized values if not', () => {
		expect(objResult.xSpeed).toEqual(xTest)
	})
})

describe('toDirection function', () => {
	it('should return the dir param if x & y are equal to 0', () => {
		expect(toDirection(42, 0, 0)).toEqual(42)
	})
	it('should return a new direction if not', () => {
		expect(Math.floor(toDirection(5, 2, 1))).toEqual(60)
	})
})