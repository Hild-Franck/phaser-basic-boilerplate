const stages = require('./stages')
const gameConfig = require('./gameConfig')

gameConfig.push(stages)

const game = new Phaser.Game(...gameConfig)

module.exports = { game, gameConfig }