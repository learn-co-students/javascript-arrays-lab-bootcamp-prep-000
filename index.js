const app = "I don't do much."
var kittens=["Milo","Otis","Garfield"]
function destructivelyAppendKitten(name) {  return kittens.push(name)}

function appendKitten (name){ return [...kittens, name]}

function destructivelyPrependKitten(name) { return kittens.unshift(name)}

function prependKitten(name) {  return [name, ...kittens]}

function destructivelyRemoveLastKitten() {  return kittens.pop()}

function removeLastKitten() { return kittens.slice(0,kittens.length-1)}

function destructivelyRemoveFirstKitten() { return kittens.shift()}

function removeFirstKitten() {  return kittens.slice(1)}
