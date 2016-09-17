const poulet = require('../src/test.js')

describe('TEST TA MERE', function() {
	it('EST SENSE BE DEFINED', function() {
		expect(poulet).toBeDefined()
	})
	it('EST SENSE BE MARCHE PITIE', function() {
		expect(poulet(1)).toEqual('Un')
	})
	it('EST SENSE BE JESAISPASQUOI', function() {
		expect(poulet(2)).toEqual('Deux')
	})
	it('marche enfin quoi...', function() {
		expect(poulet()).toEqual('Prout')
	})
})