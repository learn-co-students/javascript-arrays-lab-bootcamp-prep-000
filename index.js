const app = "I don't do much."

function destructivelyPrependKitten(name) {return kittens.unshift(name)}

function destructivelyAppendKitten(name) {return kittens.push(name)}

function destructivelyRemoveFirstKitten() {return kittens.shift()}

function destructivelyRemoveLastKitten() {return kittens.pop()}

function appendKitten(name) {var newKittens=[...kittens,name]; return newKittens}

function prependKitten(name) {var newKittens=[name,...kittens]; return newKittens}

function removeFirstKitten() {var newKittens= kittens.slice(1); return newKittens}

function removeLastKitten() {var newKittens= kittens.slice(0,kittens.length - 1); return newKittens}
