// Add your functions and code here
let kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  return kittens.splice(kittens.length, 0, name);
}

function destructivelyPrependKitten(name) {
  return kittens.splice(0, 0, name);
}

function destructivelyRemoveLastKitten() {
  return kittens.splice(-1, 1);
}

function destructivelyRemoveFirstKitten() {
  return kittens.splice(0,1);
}

function appendKitten(name) {
  return kittens.concat(name);
}

function prependKitten(name) {
  return [...kittens].concat(name);
}

/*
  describe('prependKitten(name)', function() {
    it('prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(prependKitten("Arnold")).toEqual(["Arnold", "Milo", "Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('removeLastKitten()', function() {
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeLastKitten()).toEqual(["Milo", "Otis"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })
  
*/