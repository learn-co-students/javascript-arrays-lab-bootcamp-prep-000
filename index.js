var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(array){
          return kittens.push("Ralph")
}

function destructivelyPrependKitten(array){
          return kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten(array){
         return kittens.pop() 
}

function destructivelyRemoveFirstKitten(array){
         return kittens.shift() 
}

function appendKitten(array){
          return [...kittens, 'Broom']
}

function prependKitten(array){
          return ['Arnold',... kittens]
}

function removeLastKitten(array){
          return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten(array){
          return kittens.slice(1)
}