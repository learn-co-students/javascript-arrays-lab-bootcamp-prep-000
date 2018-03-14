let kittens = ['Milo', 'Otis', 'Garfield'];

// 1) Arrays destructivelyAppendKitten(name) appends a kitten to the end of the kittens array:

let destructivelyAppendKitten = (name) => kittens.push(name);

// 2) Arrays destructivelyPrependKitten(name) prepends a kitten to the beginning of the kittens array:

let destructivelyPrependKitten = (name) => kittens.unshift(name);

// 3) Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array:

let destructivelyRemoveLastKitten = () => kittens.pop();

// 4) Arrays destructivelyRemoveFirstKitten() removes the First kitten from the kittens array:

let destructivelyRemoveFirstKitten = () => kittens.shift();

// 5) Arrays appendKitten(name) appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:

let appendKitten = (name) => [...kittens, name];

// 6) Arrays prependKitten(name) prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:

let prependKitten = (name) => [name, ...kittens];

// 7) Arrays removeLastKitten() removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged:

let removeLastKitten = () => kittens.slice(0, -1);

// 8) Arrays removeFirstKitten() removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged:

let removeFirstKitten = () => kittens.slice(1);
