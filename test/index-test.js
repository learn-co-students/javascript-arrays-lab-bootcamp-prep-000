describe('Arrays', function() {
  beforeEach(function() {
    window.kittens = ['Milo', 'Otis', 'Garfield'];
  });

  describe('kittens', function() {
    it('defines kittens as `var kittens = ["Milo", "Otis", "Garfield"]`', function() {
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('destructivelyAppendKitten(name)', function destructivelyAppendKitten(name) {
    it('appends a kitten to the end of the kittens array', function() {
      return window.kittens.push("Ralph")
    })
  })

  describe('destructivelyPrependKitten(name)', function destructivelyPrependKitten(name) {
    it('prepends a kitten to the beginning of the kittens array', function() {
      return window.kittens.shift("Bob")
    })
  })

  describe('destructivelyRemoveLastKitten()', function destructivelyRemoveLastKitten() {
    it('removes the last kitten from the kittens array', function() {
      return window.kittens.pop(-1)
    })
  })

  describe('destructivelyRemoveFirstKitten()', function destructivelyRemoveFirstKitten() {
    it('removes the First kitten from the kittens array', function() {
      return window.kittens.unshift("Milo")
    })
  })

  describe('appendKitten(name)', function appendKitten(name) {
    it('appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      return [..."Bob", name]
    })
  })

  describe('prependKitten(name)', function prependKitten(name) {
    it('prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
     return [name,..."Arnold"]
    })
  })

  describe('removeLastKitten()', function removeLastKitten() {
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      return window.kittens.slice(-1)
    })
  })

  describe('removeFirstKitten()', function removeFirstKitten() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      return window.kittens.slice(1)
    })
  })

})
