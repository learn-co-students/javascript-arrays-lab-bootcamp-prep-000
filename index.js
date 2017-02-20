const app = "I don't do much."

function destructivelyAppendKitten(element)
{kittens.push(element)
return kittens}

function destructivelyPrependKitten(element)
{kittens.unshift(element)
return kittens}

function destructivelyRemoveLastKitten(element){
kittens.pop()
return kittens}

function destructivelyRemoveFirstKitten (element){
kittens.shift()
return kittens}

function appendKitten(element, array){
  return [...kittens, element]
}

function prependKitten(element, array){
  return [element, ...kittens]
}

function removeFirstKitten(element){
    var kit1 = kittens.slice(1, 3)
    return kit1
    return kittens
}

function removeLastKitten(element){
    var kit2 = kittens.slice(0, 2)
    return kit2
    return kittens
}
