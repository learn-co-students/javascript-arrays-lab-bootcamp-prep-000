const app = "I don't do much.";
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
   kittens.push(`${name}`)
   // destructively adds name to end of kittens array
   return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(`${name}`)
  // destructively adds name to beginning of kittens array
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
// destructively removes last name in kittens array
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  //destructively removes first name from kittens array
  return kittens
}
function appendKitten(name) {
 return [...kittens, name];
}
function prependKitten(name) {
  return [name, ...kittens];
}
function removeFirstKitten() {
  return kittens.slice(1);
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}