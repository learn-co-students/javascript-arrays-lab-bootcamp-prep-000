const app = "I don't do much."


function kittens() {
     kittens = ["Milo", "Otis", "Garfield"];
     return kittens;
}

function destructivelyAppendKitten( name ) {
    kittens.push(name);
    return kittens;

}

function destructivelyPrependKitten( name ) {
   kittens.unshift(name);
   return kittens;

}

function destructivelyRemoveLastKitten( ) {
   kittens.pop(name);
   return kittens;
}

function destructivelyRemoveFirstKitten( ) {
   kittens.shift(1);
   return kittens;
}

function appendKitten( name ) {
   var testArray = [...kittens, name];
   return testArray;
}

function prependKitten( name ) {
   var testArray = [name, ...kittens];
   return testArray;
}


function removeLastKitten(  ) {
  var testArray = ["Milo", "Otis", "Garfield"];
  testArray = testArray.slice(0,-1);
  return testArray;
}


function removeFirstKitten( ) {
  var cats = kittens;
  cats = cats.slice(1);
  return cats;
}
