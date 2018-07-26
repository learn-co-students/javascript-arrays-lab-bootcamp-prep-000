//var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten (name) { kittens.push(name) }
function destructivelyPrependKitten (name) { kittens.unshift(name) }
function destructivelyRemoveLastKitten () { kittens.pop() }
function destructivelyRemoveFirstKitten () { kittens.shift() }
function appendKitten (name) { return kittens.concat(name) }

function prependKitten (name) { 
  var newKittens; 
  newKittens = kittens; 
  return [name, ...newKittens] 
}

function removeLastKitten () { return kittens.slice(0, kittens.length -1) }
function removeFirstKitten() { return kittens.slice(1) }

destructivelyAppendKitten ("Ralph");
destructivelyPrepndKitten ("Bob");
destructivelyRemoveLastKitten (); 
destructivelyRemoveFirstKitten ();
appendKitten ("Broom"); 
prependKitten ("Arnold"); 
removeLastKitten ();
removeFirstKitten ();