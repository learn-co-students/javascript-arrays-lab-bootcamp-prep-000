var kittens = [] //define your array here

// Add your functions and code here


function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
} 


/*
  describe('destructivelyAppendKitten(name)', function() {
    it('appends a kitten to the end of the kittens array', function() {
      destructivelyAppendKitten('Ralph')
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield", "Ralph"])
    })
  })        */ 

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens
}

function appendKitten(name) { 
  var moreKitten = [...kittens, name];
  return moreKitten
} 
  
function prependKitten(name) { 
  var moreKittenx = [name, ...kittens];
  return moreKittenx
} 

function removeLastKitten(name) {    // don't need name as an argument here
 var moreKittenx1 = kittens.slice(0, kittens.length - 1)
 return moreKittenx1
} 

function removeFirstKitten(name) {   // don't need name as an argument here
  var moreKittenx2 = kittens.slice(1);
  return moreKittenx2
} 

/*
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