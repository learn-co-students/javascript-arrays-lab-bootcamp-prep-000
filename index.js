const app = "I don't do much."

function destructivelyAppendKitten(){
kittens.push("Ralph")
};


function destructivelyPrependKitten(){
kittens.unshift("Bob")
};

function destructivelyRemoveLastKitten(){
kittens.pop()
};

function destructivelyRemoveFirstKitten(){
kittens = kittens.slice(1)
};

function appendKitten(){
return[...kittens, "Broom"]
}

function prependKitten(){
return["Arnold",...kittens]
}

function removeLastKitten(){
return  kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
return  kittens.slice(1)
}
