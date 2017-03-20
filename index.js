const app = "I don't do much."

function destructivelyAppendKitten(name) {
    kittens.push(name);
}
function destructivelyPrependKitten(name) {
    kittens.unshift(name);
}
function destructivelyRemoveLastKitten(name) {
    kittens.pop(name);
}
function destructivelyRemoveFirstKitten(name) {
    kittens.shift(name);
}

function appendKitten(name) {
    var kittensTwo = [...kittens];
    kittensTwo.push(name);
    return kittensTwo;
}
function prependKitten(name) {
    var kittensTwo = [...kittens];
    kittensTwo.unshift(name);
    return kittensTwo;
}
function removeLastKitten(name) {
    var kittensTwo = [...kittens];
    kittensTwo.pop(name);
    return kittensTwo;
}
function removeFirstKitten(name) {
    var kittensTwo = [...kittens];
    kittensTwo.shift(name);
    return kittensTwo;
}
