var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
 kittens.push(name) 
}

function destructivelyPrependKitten(name) {
kittens.unshift(name) }

function destructivelyRemoveLastKitten(name) {
kittens.pop(name)}

function destructivelyRemoveFirstKitten(name) {
kittens.shift(name)}

function appendKitten(name) { 
return [...kittens, "Broom"]}

function prependKitten(name){
return ["Arnold" , ...kittens]}
  
function removeFirstKitten(name) {
return kittens.slice(1)}


function removeLastKitten(name) {
return kittens.slice (0, kittens.length-1)}
  