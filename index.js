var kittens = ["Milo", "Otis", "Garfield"];

/*
 Mutable - destructive verions
 */
 function destructivelyAppendKitten(name) {
   kittens.push(name)
   return kittens
 }

 function destructivelyRemoveLastKitten() {
   kittens.pop()
   return kittens
 }

 function destructivelyPrependKitten(name) {
   kittens.unshift(name)
   return kittens
 }

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

/*
NON-Destructive verions
*/
function appendKitten(name) {
  return kittens.concat(name)
  // OR
  //return [...kittens, name]
}

function prependKitten(name) {
  var tmp = new Array();
  tmp.push(name);
  return tmp.concat(kittens);
/*  // OR
  return [name, ...kittens]
*/
}

function removeFirstKitten() {
  return kittens.slice(1)
}

function removeLastKitten() {
  return kittens.slice(0,-1)
}
