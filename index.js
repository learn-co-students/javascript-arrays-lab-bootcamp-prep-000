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
  return [name, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1, kittens.length);
}

/*
  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })
  
*/