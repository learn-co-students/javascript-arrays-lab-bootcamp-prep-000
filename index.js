var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(a) {kittens.push(a); return kittens}

function destructivelyPrependKitten(a){kittens.unshift(a); return kittens}

function destructivelyRemoveLastKitten(a){kittens.pop(a); return kittens}

function destructivelyRemoveFirstKitten(a){kittens.shift(a); return kittens}

function appendKitten(a) {var NewKittens = [...kittens,a]; return NewKittens}

function prependKitten(a) {var NewKittens = [a,...kittens]; return NewKittens}

function removeFirstKitten() {var NewKittens = kittens.slice(1); return NewKittens}

function removeLastKitten() {var NewKittens = kittens.slice(0, kittens.length - 1); return NewKittens}