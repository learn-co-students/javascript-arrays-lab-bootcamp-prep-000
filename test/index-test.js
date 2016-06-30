const expect = require('expect')
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')


describe('index', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8'),
    useEach: true
  })

  describe('kittens', () => {
    it('defines kittens as `var kittens = ["Milo", "Otis", "Garfield"]`', () => {
      expect(kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('destructivelyAppendKitten(name)', () => {
    it('appends a kitten to the end of the kittens array', () => {
      destructivelyAppendKitten('Ralph')

      expect(kittens).toEqual(["Milo", "Otis", "Garfield", "Ralph"])
    })
  })

  describe('destructivelyPrependKitten(name)', () => {
    it('prepends a kitten to the beginning of the kittens array', () => {
      destructivelyPrependKitten("Bob")

      expect(kittens).toEqual(["Bob", "Milo", "Otis", "Garfield"])
    })
  })

  describe('destructivelyRemoveLastKitten()', () => {
    it('removes the last kitten from the kittens array', () => {
      destructivelyRemoveLastKitten()

      expect(kittens).toEqual(["Milo", "Otis"])
    })
  })

  describe('destructivelyRemoveFirstKitten()', () => {
    it('removes the First kitten from the kittens array', () => {
      destructivelyRemoveFirstKitten()

      expect(kittens).toEqual(["Otis", "Garfield"])
    })
  })

  describe('appendKitten(name)', () => {
    it('appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', () => {
      expect(appendKitten("Broom")).toEqual(["Milo", "Otis", "Garfield", "Broom"])

      expect(kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('prependKitten(name)', () => {
    it('prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', () => {
      expect(prependKitten("Arnold")).toEqual(["Arnold", "Milo", "Otis", "Garfield"])

      expect(kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('removeLastKitten()', () => {
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', () => {
      expect(removeLastKitten()).toEqual(["Milo", "Otis"])

      expect(kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('removeFirstKitten()', () => {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', () => {
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })
})
