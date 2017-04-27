const bowling = require('./bowling')

const game = bowling.createGame()
const score = bowling.score(game)
const output = `
  Your game:
  ${game.map(frame => frame.slice(0, 2)).join(' | ')}

  Your score:
  ${score}
  `

console.log(output)
