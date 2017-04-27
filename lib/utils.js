'use strict'

const utils = {
  getRandomIntInclusive (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  },
  range (size) {
    return [...Array(size).keys()]
  },
  sum (arr) {
    return arr.reduce((curr, next) => curr + next, 0)
  }
}

module.exports = utils
