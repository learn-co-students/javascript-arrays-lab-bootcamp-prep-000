var kittens = ["Milo", "Otis, "Garfield"];

{
function destructivelyAppendKitten(name);
kittens.push(name);
return kittens


function destructivelyApppendKitten() {
kittens.unshift(name);
return kittens;

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;


function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;


function appendKitten(name){
  return [...kittens, name];


function prependKitten(name) {
  return [name, ...kittens];


function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);


function removeFirstKitten() {
  return kittens.slice(1);

}




 //define your array here

// Add your functions and code here
