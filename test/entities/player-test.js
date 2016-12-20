const initPlayer = require('../../src/entities/player.js')

const sprite = {
	anchor: {
		setTo: (x, y) => {}
	},
	angle: 90,
	body: {
		velocity: {
			x: 0,
			y: 0
		}
	}
}

const speed = { x: 0, y: 0 }

describe('Player', () => {
	const player = initPlayer()
	it('should not have a sprite anchor', () => {
		expect(player.sprite).toBeUndefined()
	})
	const playerWithSpriteMoved = initPlayer(sprite, 1, 1, 5, 180)
	const playerWithSprite = initPlayer(sprite, 1, 1, 5, 180)
	it('should have a sprite anchor', () => {
		expect(playerWithSprite.sprite.anchor).toBeDefined()
	})
	it('should have a move function', () => {
		expect(playerWithSpriteMoved.move(speed)).toBeUndefined()
	})
	it('should not have default param value', () => {
		expect(playerWithSprite.x).toEqual(1)
		expect(playerWithSprite.y).toEqual(1)
		expect(playerWithSprite.speed).toEqual(5)
		expect(playerWithSprite.dir).toEqual(180)
	})
})