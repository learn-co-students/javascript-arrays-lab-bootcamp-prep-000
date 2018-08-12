// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
console.log(kittens.length+'length of kittens')
var newarray=kittens.slice(0)
console.log(newarray.toString()+' items of newarray')
newarray.splice(newarray.length,0,name)
console.log(newarray.toString()+' items of newarray')
return newarray
}
function prependKitten(name){
console.log(kittens.length+'length of kittens')
var newarray=kittens.slice(0)
console.log(newarray.toString()+' items of newarray')
newarray.splice(0,0,name)
console.log(newarray.toString()+' items of newarray')
return newarray
}

function removeLastKitten(){
console.log(kittens.length+'length of kittens')
var newarray=kittens.slice(0)
console.log(newarray.toString()+' items of newarray')
newarray.splice(newarray.length-1,1)
console.log(newarray.toString()+' items of newarray')
return newarray
}
function removeFirstKitten(){
console.log(kittens.length+'length of kittens')
var newarray=kittens.slice(0)
console.log(newarray.toString()+' items of newarray')
newarray.splice(0,1)
console.log(newarray.toString()+' items of newarray')
return newarray
}