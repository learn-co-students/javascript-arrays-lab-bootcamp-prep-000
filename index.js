const app = "I don't do much."

function destructivelyAppendKitten(name) {
  
  var array = kittens;
  
  return array.push (name);
  
}

function destructivelyPrependKitten (name) {
  
  var array = kittens;
  
 return array.unshift (name);
  
}

function destructivelyRemoveLastKitten (name) {
  
  var array = kittens;
  
  return array.pop (name);
  
}

function destructivelyRemoveFirstKitten (name) {
  
  var array = kittens;
  
  return array.shift (name);
  
}

function appendKitten (name) {
  
  var array = kittens;
  
  return [...array, name];
  
}

function prependKitten (name) {
  
  var array = kittens;
  
  return [name, ...array];
  
}

function removeLastKitten (name) {
  
  var array = kittens;
  
  return array.slice(0, array.length -1);
  
}

function removeFirstKitten (name) {
  
  var array = kittens;
  
  return array.slice(1);
  
}