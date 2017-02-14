
var kittens = ["Milo", "Otis", "Garfield"];


function destructivelyAppendKitten (name) {
  kittens.push("Ralph");
    // destructivelyAppendKitten("Ralph");
    //   window.kittens // ["Milo", "Otis", "Garfield", "Ralph"]
}

function destructivelyPrependKitten (name) {
  kittens.unshift("Bob");
    //  destructivelyPrependKitten("Bob");
    //   window.kittens // ["Bob", "Milo", "Otis", "Garfield"]
}

function destructivelyRemoveLastKitten (name) {
  kittens.pop();
    // destructivelyRemoveLastKitten("Garfield");
    //   window.kittens // ["Milo", "Otis"]
}
function destructivelyRemoveFirstKitten (name) {
  kittens.shift();
    // destructivelyRemoveFirstKitten("Milo");
    //   window.kittens // ["Otis", "Garfield"]
}

function appendKitten (name) {
  var NewArray = [...kittens, name];
   return NewArray;
    appendKitten("Broom") // ["Milo", "Otis", "Garfield", "Broom"]
     return kittens;
      window.kittens // ["Milo", "Otis", "Garfield"]
}

function prependKitten (name) {
  var NewArray = [name, ...kittens];
   return NewArray;
    prependKitten("Arnold") // ["Arnold", "Milo", "Otis", "Garfield"]
     return kittens;
      window.kittens // ["Milo", "Otis", "Garfield"]
}

function removeLastKitten (name) {
  var NewArray = kittens.slice(0, kittens.length -1);
   return NewArray;
    removeLastKitten("Garfield") // ["Milo", "Otis"]
     return kittens;
      window.kittens // ["Milo", "Otis", "Garfield"]
}

function removeFirstKitten (name) {
  var NewArray = kittens.slice(1);
   return NewArray;
    removeFirstKitten("Milo") // ["Otis", "Garfield"]
     return kittens;
      window.kittens // ["Milo", "Otis", "Garfield"]
}
