const app = "I don't do much."

function copyAndFunc(array, action, argument){
  const copy = array.slice();
  copy[action](argument);
  return copy;
}

var removeFirstKitten = () => copyAndFunc(kittens, 'shift');
var removeLastKitten = () => copyAndFunc(kittens, 'pop');
var prependKitten = name => copyAndFunc(kittens, 'unshift', name);
var appendKitten = name => copyAndFunc(kittens, 'push', name);


function destructiveFunc(array, action, argument){
  array[action](argument);
  return array;
}

var destructivelyRemoveFirstKitten = () => destructiveFunc(kittens, 'shift');
var destructivelyRemoveLastKitten = () => destructiveFunc(kittens, 'pop');
var destructivelyPrependKitten = name => destructiveFunc(kittens, 'unshift', name);
var destructivelyAppendKitten = name => destructiveFunc(kittens, 'push', name);