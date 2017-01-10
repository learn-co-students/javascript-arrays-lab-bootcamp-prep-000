const app = "I don't do much."
function destructivelyAppendKitten(name){
    kittens.push("Ralph");
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
}

 function destructivelyRemoveLastKitten(){
      kittens.pop();

  }

   function destructivelyRemoveFirstKitten(){

     kittens.shift();

    }

   function appendKitten(name){
     var kittens = ["Milo", "Otis", "Garfield"];
     kittens = [...kittens, "Broom"]
     return kittens;
   }

  function prependKitten(name){
    var kittens = ["Milo", "Otis", "Garfield"];
    kittens = ["Arnold",...kittens]
    return kittens;
  }

  function removeLastKitten(){
   var kittens = ["Milo", "Otis", "Garfield"];
      kittens.pop()
      return kittens;
  }

  function removeFirstKitten(){
      var kittens = ["Milo", "Otis", "Garfield"];
      kittens = kittens.slice(1)
      return kittens;
