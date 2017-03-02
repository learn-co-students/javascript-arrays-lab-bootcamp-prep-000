const app = "I don't do much."


function destructivelyAppendKitten(name) {
    return kittens.push(name);
}

function destructivelyPrependKitten(name) {
    return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
    return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
    return kittens.shift();
}

function appendKitten(name) {
    const newArray = [...kittens, name];
    return newArray;
}

function prependKitten(name) {
    const newArray = [name, ...kittens];
    return newArray;
}

function removeLastKitten() {
    const newArray = kittens.slice(0, kittens.length - 1);
    return newArray;
}

function removeFirstKitten() {
    const newArray = kittens.slice(1);
    return newArray;
}
