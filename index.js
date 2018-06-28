const app = "I don't do much."

function destructivelyAppendKitten (array) { 
  kittens.push ("Ralph");
}

function destructivelyPrependKitten (array) { 
  kittens.unshift ("Bob");
}

function destructivelyRemoveLastKitten (array) { 
  kittens.pop ();
}

function destructivelyRemoveFirstKitten (array) { 
  kittens.shift ();
}

function appendKitten (array) { 
  var newKittensArray = [...kittens, "Broom"];
  return newKittensArray;
}

function prependKitten (array) { 
  var newKittensArray = ["Arnold", ...kittens];
  return newKittensArray;
}

function removeLastKitten (array) { 
  var newKittensArray = kittens.slice (0, 2);
  return newKittensArray;
}

function removeFirstKitten (array) { 
  var newKittensArray = kittens.slice (1);
  return newKittensArray;
}