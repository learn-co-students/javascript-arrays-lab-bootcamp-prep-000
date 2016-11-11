const app = "I don't do much."
var arr = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(variable) {
  arr.push(variable);
  var array = arr;
  //return arr.push(variable)
  return array;
}

function destructivelyPrependKitten( name) {
  arr.unshift(name)
  var array = arr
  return array
  //return  arr.unshift(name)
}

function destructivelyRemoveLastKitten() {
  arr.pop()
  
var array = arr
return array
//return  arr.pop()
}

function destructivelyRemoveFirstKitten() {
  arr.shift()
  var array = arr
  //return arr.shift();
  return array
}

function appendKitten( name) {
  return ([...arr, name])
}

function prependKitten( name) {
  return ([name, ...arr])
}

function removeLastKitten() {
  return arr.slice(-1)
}

function removeFirstKitten() {
  return arr.slice(1)
}
