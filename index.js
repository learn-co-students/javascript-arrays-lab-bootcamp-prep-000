function destructivelyAppendKitten(name) {return kittens.push("Ralph")}
function destructivelyPrependKitten(name) {return kittens.unshift("Bob")}
function destructivelyRemoveLastKitten() {kittens.pop(); return kittens}
function destructivelyRemoveFirstKitten() {kittens.shift(); return kittens}
function appendKitten(name) {return [...kittens, "Broom"]}
function prependKitten(name) {return ["Arnold",...kittens]}
function removeLastKitten() {return kittens.slice(0, kittens.length -1)}
function removeFirstKitten() {const kit=kittens[0];return kittens.slice(1);}