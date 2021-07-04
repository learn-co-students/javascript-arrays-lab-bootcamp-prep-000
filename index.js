/*describe('Arrays', function() {
  describe('kittens', function() {
    it('defines kittens as `var kittens = ["Milo", "Otis", "Garfield"]`', function() {
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })*/

var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

/*  describe('destructivelyAppendKitten(name)', function() {
    it('appends a kitten to the end of the kittens array', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      destructivelyAppendKitten('Ralph')
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield", "Ralph"])
    })
  })*/
  
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

/*  describe('destructivelyPrependKitten(name)', function() {
    it('prepends a kitten to the beginning of the kittens array', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      destructivelyPrependKitten("Bob")

      expect(window.kittens).toEqual(["Bob", "Milo", "Otis", "Garfield"])
    })
  })*/

function destructivelyPrependKitten (name) {
  return kittens.unshift(name);
}

/*  describe('destructivelyRemoveLastKitten()', function() {
    it('removes the last kitten from the kittens array', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      destructivelyRemoveLastKitten()

      expect(window.kittens).toEqual(["Milo", "Otis"])
    })
  })*/

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

/*  describe('destructivelyRemoveFirstKitten()', function() {
    it('removes the First kitten from the kittens array', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      destructivelyRemoveFirstKitten()

      expect(window.kittens).toEqual(["Otis", "Garfield"])
    })
  })*/

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

/*  describe('appendKitten(name)', function() {
    it('appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(appendKitten("Broom")).toEqual(["Milo", "Otis", "Garfield", "Broom"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })*/

function appendKitten(name) {
  return [...kittens, name];
}

/*  describe('prependKitten(name)', function() {
    it('prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(prependKitten("Arnold")).toEqual(["Arnold", "Milo", "Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })*/

function prependKitten(name) {
  return [name, ...kittens];
}

/*  describe('removeLastKitten()', function() {
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(removeLastKitten()).toEqual(["Milo", "Otis"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })*/

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

/*  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })
})*/

function removeFirstKitten() {
  return kittens.slice(1);
}