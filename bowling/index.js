const utils = require('../lib/utils')

const PIN_COUNT = 10
const MAX_ROLLS = 2

const bowling = {
  createGame () {
    // TODO: 10-12 frames
    return utils.range(10).reduce(frames => {
      frames.push(this.createFrame())
      return frames
    }, [])
  },
  isStrike (frame) {
    return (utils.sum(frame) === PIN_COUNT) && (frame.length === 1)
  },
  isSpare (frame) {
    return (utils.sum(frame) === PIN_COUNT) && (frame.length === MAX_ROLLS)
  },
  score (game) {
    const scores = game.map((frame, index) => {
      let nextFrame = game[index + 1]
      if (!nextFrame) {
        // last roll
        return utils.sum(frame)
      } else if (this.isSpare(frame)) {
        // next roll is doubled
        frame.push(nextFrame[0])
      } else if (this.isStrike(frame)) {
        // next two rolls are doubled
        if (this.isStrike(nextFrame)) {
          frame.push(nextFrame[0])
          if (game[index + 2]) {
            frame.push(game[index + 2][0])
          }
        } else {
          frame = frame.concat(nextFrame)
        }
      }
      return utils.sum(frame)
    })

    return utils.sum(scores)
  },
  roll (max = PIN_COUNT) {
    return utils.getRandomIntInclusive(0, max)
  },
  createFrame () {
    // TODO: 1-3 rolls
    return utils.range(2).reduce(rolls => {
      const total = utils.sum(rolls)
      if (total < PIN_COUNT) {
        rolls.push(this.roll(PIN_COUNT - total))
      }
      return rolls
    }, [])
  }
}

module.exports = bowling
