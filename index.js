const app = "I don't do much."
function destructivelyAppendKitten(name) {kittens.push(name)}
function destructivelyPrependKitten(name) {kittens.unshift(name)}
function destructivelyRemoveLastKitten(name) {kittens.pop(name)}
function destructivelyRemoveFirstKitten(name) {kittens.shift(name)}
function appendKitten(name) {var newArray = [...kittens, name]; return newArray}
function prependKitten(name) {var newArray1 = [name, ...kittens]; return newArray1}
function removeLastKitten() {var newArray2 = kittens.slice(0,- 1); return newArray2}
function removeFirstKitten() {var newArray3 = kittens.slice(1); return newArray3}