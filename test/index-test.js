describe('Arrays', function() {
  beforeEach(function() {
    window.kittens = ['Milo', 'Otis', 'Garfield'];
  });

  describe('kittens', function() {
    it('defines kittens as `var kittens = ["Milo", "Otis", "Garfield"]`', function() {
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })
  //window.kittens = ['Milo', 'Otis', 'Garfield'];

  describe('destructivelyAppendKitten(name)', function() {
    it('appends a kitten to the end of the kittens array', function() {
      destructivelyAppendKitten('Ralph')
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield", "Ralph"])
    })
  })
  //window.kittens = ['Milo', 'Otis', 'Garfield'];


  describe('destructivelyPrependKitten(name)', function() {
    //window.kittens = ['Milo', 'Otis', 'Garfield'];
    it('prepends a kitten to the beginning of the kittens array', function() {
      destructivelyPrependKitten("Bob")

      expect(window.kittens).toEqual(["Bob", "Milo", "Otis", "Garfield"])
    })
  })
  //window.kittens = ['Milo', 'Otis', 'Garfield'];

  describe('destructivelyRemoveLastKitten()', function() {
    //window.kittens = ['Milo', 'Otis', 'Garfield'];
    it('removes the last kitten from the kittens array', function() {
      destructivelyRemoveLastKitten()

      expect(window.kittens).toEqual(["Milo", "Otis"])
    })
  })
  //window.kittens = ['Milo', 'Otis', 'Garfield'];

  describe('destructivelyRemoveFirstKitten()', function() {
    //window.kittens = ['Milo', 'Otis', 'Garfield'];
    it('removes the First kitten from the kittens array', function() {
      destructivelyRemoveFirstKitten()

      expect(window.kittens).toEqual(["Otis", "Garfield"])
    })
  })
  //window.kittens = ['Milo', 'Otis', 'Garfield'];

  describe('appendKitten(name)', function() {
    //window.kittens = ['Milo', 'Otis', 'Garfield'];
    it('appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(appendKitten("Broom")).toEqual(["Milo", "Otis", "Garfield", "Broom"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })
  //window.kittens = ['Milo', 'Otis', 'Garfield'];

  describe('prependKitten(name)', function() {
    //window.kittens = ['Milo', 'Otis', 'Garfield'];
    it('prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(prependKitten("Arnold")).toEqual(["Arnold", "Milo", "Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })
  //window.kittens = ['Milo', 'Otis', 'Garfield'];

  describe('removeLastKitten()', function() {
    //window.kittens = ['Milo', 'Otis', 'Garfield'];
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeLastKitten()).toEqual(["Milo", "Otis"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })
  //window.kittens = ['Milo', 'Otis', 'Garfield'];

  describe('removeFirstKitten()', function() {
    //window.kittens = ['Milo', 'Otis', 'Garfield'];
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })
  //window.kittens = ['Milo', 'Otis', 'Garfield'];

})
