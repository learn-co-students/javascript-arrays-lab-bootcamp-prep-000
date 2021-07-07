var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){ return kittens.push(name)}
function destructivelyPrependKitten(name){ return kittens.unshift(name)}
function destructivelyRemoveLastKitten(){ return kittens.pop()}
function destructivelyRemoveFirstKitten(){ return kittens.shift()}
function appendKitten(name){ var yo = kittens.concat(name); return yo}
function prependKitten(name){var arr = [name]; return arr.concat(kittens)}
function removeLastKitten(){ var dude = kittens.slice(0, kittens.length-1); return dude}
function removeFirstKitten(){ var chill = kittens.slice(1, kittens.lenght); return chill}
