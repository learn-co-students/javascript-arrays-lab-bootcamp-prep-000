const app = "I don't do much."
var kittens
var destructivelyAppendKitten=(k)=>kittens.push(k)
var destructivelyPrependKitten=(k)=>kittens.unshift(k)
var destructivelyRemoveLastKitten=()=>kittens.pop()
var destructivelyRemoveFirstKitten=()=>kittens.shift()
var appendKitten=(k)=>[...kittens,k]
var prependKitten=(k)=>[k,...kittens]
var removeLastKitten=()=>kittens.slice(0,kittens.length-1)
var removeFirstKitten=()=>kittens.slice(1)
