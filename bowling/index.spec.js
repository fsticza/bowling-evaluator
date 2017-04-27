/* global describe, it */
const expect = require('chai').expect
const bowling = require('./')

describe('bowling', () => {
  describe('.roll(5)', () => {
    const roll = bowling.roll(2)
    it('should score within 0 and 2', () => {
      expect(roll).to.be.within(0, 2)
    })
  })
  describe('.createFrame()', () => {
    const frame = bowling.createFrame()
    it('should contain 1 to 3 rolls', () => {
      expect(frame).to.have.length.within(1, 3)
    })
  })
  describe('.createGame()', () => {
    const game = bowling.createGame()
    it('should contain 10 to 12 frames', () => {
      expect(game).to.have.length.within(10, 12)
    })
  })
  describe('.score(game)', () => {
    it('should calculate total score for a simple game', () => {
      expect(bowling.score([[1, 2], [3, 4]])).to.equal(3 + 7)
    })
    it('should calculate total score for a game containing spares', () => {
      expect(bowling.score([[1, 5], [5, 5], [4, 5]])).to.equal(6 + 10 + 4 + 9)
    })
    it('should calculate total score for a game containing strikes', () => {
      expect(bowling.score([[10], [10], [10]])).to.equal(60)
    })
    it('should calculate total score for a game containing strikes & spares', () => {
      expect(bowling.score([[10], [5, 5], [4, 5]])).to.equal(10 + 5 + 5 + 10 + 4 + 9)
    })
  })
})
