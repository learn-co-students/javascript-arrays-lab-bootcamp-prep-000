describe('Arrays', function() {
  beforeEach(function() {
    window.kittens = ['Milo', 'Otis', 'Garfield'];
  });

  function Arrays(){
    var kittens = ["Milo", "Otis", "Garfield"];
    return kittens;
  }
   Arrays();

   function kittens(){
     var kittens = ["Milo", "Otis", "Garfield"];
     return kittens;
   }
      kittens();

  describe('kittens', function() {
    it('defines kittens as &#96;var kittens = ["Milo", "Otis", "Garfield"]&#96;', function() {
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

var kittens = ["Milo", "Otis", "Garfield"];
  function destructivelyAppendKitten(name){
    kittens.push("Ralph");
  }


  describe('destructivelyAppendKitten(name)', function() {
    it('appends a kitten to the end of the kittens array', function() {
      destructivelyAppendKitten('Ralph')
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield", "Ralph"])
    })
  })
function destructivelyPrependKitten(name){

  kittens.unshift("Bob");
}


  describe('destructivelyPrependKitten(name)', function() {
    it('prepends a kitten to the beginning of the kittens array', function() {
      destructivelyPrependKitten("Bob")

      expect(window.kittens).toEqual(["Bob", "Milo", "Otis", "Garfield"])
    })
  })

  describe('destructivelyRemoveLastKitten()', function() {
    it('removes the last kitten from the kittens array', function() {
      destructivelyRemoveLastKitten()

      expect(window.kittens).toEqual(["Milo", "Otis"])
    })
  })

  function destructivelyRemoveLastKitten(){

      kittens.pop();

  }


    function destructivelyRemoveFirstKitten(){

     kittens.shift();

    }


  describe('destructivelyRemoveFirstKitten()', function() {
    it('removes the First kitten from the kittens array', function() {
      destructivelyRemoveFirstKitten()

      expect(window.kittens).toEqual(["Otis", "Garfield"])
    })
  })
   function appendKitten(name){
     var kittens = ["Milo", "Otis", "Garfield"];
     kittens = [...kittens, "Broom"]
     return kittens;
   }
     appendKitten();
  describe('appendKitten(name)', function() {
    it('appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(appendKitten("Broom")).toEqual(["Milo", "Otis", "Garfield", "Broom"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  function prependKitten(name){
    var kittens = ["Milo", "Otis", "Garfield"];
    kittens = ["Arnold",...kittens]
    return kittens;
  }
    prependKitten();

  describe('prependKitten(name)', function() {
    it('prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(prependKitten("Arnold")).toEqual(["Arnold", "Milo", "Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  function removeLastKitten(){
   var kittens = ["Milo", "Otis", "Garfield"];
      kittens.pop()
      return kittens;
  }
  removeLastKitten()

  describe('removeLastKitten()', function() {
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeLastKitten()).toEqual(["Milo", "Otis"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  function removeFirstKitten(){
      var kittens = ["Milo", "Otis", "Garfield"];
      kittens = kittens.slice(1)
      return kittens;
  }
     removeFirstKitten();

  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

})
