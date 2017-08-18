describe('Arrays', function() {
  beforeEach(function() {
    window.kittens = ['Milo', 'Otis', 'Garfield'];
  });

  describe('kittens', function() {
    it('defines kittens as `var kittens = ["Milo", "Otis", "Garfield"]`', function() {
      var kittens = ['Milo', 'Otis', 'Garfield'];
      console.log(kittens);

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('destructivelyAppendKitten(name)', function destructivelyAppendKitten(kittens,name) {
    var kittens = ['Milo', 'Otis', 'Garfield']
    var name = ['Ralph']
    return kittens + name
    it('appends a kitten to the end of the kittens array', function ( ) {


       destructivelyAppendKitten('Ralph')
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield", "Ralph"])
    })
  })

  describe('destructivelyPrependKitten(name)', function destructivelyPrependKitten(neme,kittens) {
    var kittens = ['Milo', 'Otis', 'Garfield']
    var name = ['Bob']
    return kittens + name
    it('prepends a kitten to the beginning of the kittens array', function() {
      destructivelyPrependKitten("Bob")

      expect(window.kittens).toEqual(["Bob", "Milo", "Otis", "Garfield"])
    })
  })

  describe('destructivelyRemoveLastKitten()', function destructivelyRemoveLastKitten(kittens) {
    var kittens = ['Milo', 'Otis', 'Garfield']
    kittens.slice (-3)
    return kittens
    it('removes the last kitten from the kittens array', function() {
      destructivelyRemoveLastKitten()

      expect(window.kittens).toEqual(["Milo", "Otis"])
    })
  })

  describe('destructivelyRemoveFirstKitten()', function destructivelyRemoveFirstKitten(kittens) {
    var kittens = ['Milo', 'Otis', 'Garfield']
    kittens.slice (-1)
    return kittens
    it('removes the First kitten from the kittens array', function() {
      destructivelyRemoveFirstKitten()

      expect(window.kittens).toEqual(["Otis", "Garfield"])
    })
  })

  describe('appendKitten(name)', function appendKitten(name,array) {
    var kittens = ['Milo', 'Otis', 'Garfield']
    var array = ['Broom']
    return kittens + name

    it('appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(appendKitten("Broom")).toEqual(["Milo", "Otis", "Garfield", "Broom"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('prependKitten(name)', function prependKitten(name,kittens) {
    var name = ['Arnold']
    return kittens + name

    it('prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(prependKitten("Arnold")).toEqual(["Arnold", "Milo", "Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('removeLastKitten()', function removeLastKitten(kittens) {
    var kittens = ['Milo', 'Otis', 'Garfield']
    kittens.slice (-3)
    return kittens
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeLastKitten()).toEqual(["Milo", "Otis"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('removeFirstKitten()', function removeFirstKitten(kittens) {
    var kittens = ['Milo', 'Otis', 'Garfield']
    kittens.slice (-1)
    return kittens
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

})
