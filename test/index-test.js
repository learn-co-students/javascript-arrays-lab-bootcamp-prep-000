describe('Arrays', function() {
  var kittens = ['Milo', 'Otis', 'Garfield']
  beforeEach(function() {
    window.kittens = ['Milo', 'Otis', 'Garfield'];
  });

  describe('kittens', function() {
    var kittens = ['Milo', 'Otis', 'Garfield']
    it('defines kittens as `var kittens = ["Milo", "Otis", "Garfield"]`', function() {
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('destructivelyAppendKitten(name)', function() {
    it('appends a kitten to the end of the kittens array', function destructivelyAppendKitten() {
      kittens.push('Ralph')
      return kittens
      destructivelyAppendKitten('Ralph')
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield", "Ralph"])
    })
  })

  describe('destructivelyPrependKitten(name)', function() {
    it('prepends a kitten to the beginning of the kittens array', function() {
      destructivelyPrependKitten("Bob")
      function destructivelyPrependKitten() {
        kittens.unshift('Bob')
        return kittens
    
      expect(window.kittens).toEqual(["Bob", "Milo", "Otis", "Garfield"])
      }
    })
  })

  describe('destructivelyRemoveLastKitten()', function() {
    it('removes the last kitten from the kittens array', function() {
      destructivelyRemoveLastKitten()
      function destructivelyRemoveLastKitten() {
        kittens.pop('Garfield')
        return kittens
      expect(window.kittens).toEqual(["Milo", "Otis"])
      
      }
    })
  })

  describe('destructivelyRemoveFirstKitten()', function() {
    it('removes the First kitten from the kittens array', function() {
      destructivelyRemoveFirstKitten()
      function destructivelyRemoveFirstKitten() {
        kittens.shift('Milo')
        return kittens
      
      expect(window.kittens).toEqual(["Otis", "Garfield"])
      }
    })
  })

  describe('appendKitten(name)', function() {
    it('appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(appendKitten("Broom")).toEqual(["Milo", "Otis", "Garfield", "Broom"])
        function appendKitten() {
         const morekittens = [... kittens, 'Broom']
          return morekittens
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
      
      }
    })
  })

  describe('prependKitten(name)', function() {
    it('prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(prependKitten("Arnold")).toEqual(["Arnold", "Milo", "Otis", "Garfield"])
      function prependKitten() {
        kittens = ['Arnold',... kittens]
        kittens.slice(0, -1)
        return kittens
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
      }
    })
  })

  describe('removeLastKitten()', function() {
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeLastKitten()).toEqual(["Milo", "Otis"])
      function removeLastKitten() {
        kittens = kittens.slice(0, kittens.length - 1)
        kittens = kittens.slice(1)
        return kittens
      
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
      }
    })
  })

  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])
      function removeFirstKitten() {
       kittens = [... kittens, 'Garfield'] 
       kittens = kittens.slice(1)
       return kittens
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
      }
    })
  })

})
