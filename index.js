var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
/*
describe('Arrays', function() {
  describe('kittens', function() {
    it('defines kittens as `var kittens = ["Milo", "Otis", "Garfield"]`', function() {
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })
  
*/
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

//console.log(destructivelyAppendKitten("acc"))
/*

  describe('destructivelyAppendKitten(name)', function() {
    it('appends a kitten to the end of the kittens array', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      destructivelyAppendKitten('Ralph')
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield", "Ralph"])
    })
  })
*/
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
//console.log(destructivelyPrependKitten("acc"))

/*

  describe('destructivelyPrependKitten(name)', function() {
    it('prepends a kitten to the beginning of the kittens array', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      destructivelyPrependKitten("Bob")

      expect(window.kittens).toEqual(["Bob", "Milo", "Otis", "Garfield"])
    })
  })
*/
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
/*

  describe('destructivelyRemoveLastKitten()', function() {
    it('removes the last kitten from the kittens array', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      destructivelyRemoveLastKitten()

      expect(window.kittens).toEqual(["Milo", "Otis"])
    })
  })
*/
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

//console.log(destructivelyRemoveFirstKitten())


/*
  describe('destructivelyRemoveFirstKitten()', function() {
    it('removes the First kitten from the kittens array', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      destructivelyRemoveFirstKitten()

      expect(window.kittens).toEqual(["Otis", "Garfield"])
    })
  })
*/
function appendKitten(name) {
  var outputArray = kittens.slice(0, kittens.length);
  outputArray.push(name);
  return outputArray;
}

/*
  describe('appendKitten(name)', function() {
    it('appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(appendKitten("Broom")).toEqual(["Milo", "Otis", "Garfield", "Broom"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })
  */
  function prependKitten(name) {
    var outputArray = kittens.slice(0, kittens.length);
    outputArray.unshift(name)
    return outputArray;
  }

  /*

  describe('prependKitten(name)', function() {
    it('prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(prependKitten("Arnold")).toEqual(["Arnold", "Milo", "Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })
  */
  function removeLastKitten() {
    var outputArray = kittens.slice(0, kittens.length);
    outputArray.pop();
    return outputArray;
  }
//console.log(removeLastKitten())
//console.log(kittens)
  /*

  describe('removeLastKitten()', function() {
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(removeLastKitten()).toEqual(["Milo", "Otis"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })
  */
function removeFirstKitten() {
  var outputArray = kittens.slice(0, kittens.length)
  outputArray.shift();
  return outputArray
  
}
  
//console.log(removeFirstKitten())
//console.log(kittens)
  /*

  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })
})
*/