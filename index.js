const app = "I don't do much."


//  'kittens' 
kittens(); {
    var kittens = ["Milo", "Otis", "Garfield"]
    return kittens
    }
  
//describe('destructivelyAppendKitten(name)', function() {
destructivelyAppendKitten('Ralph'){
    kitten.push(Ralph)
    return kittens
    }

//describe('destructivelyPrependKitten(name)', function() {
destructivelyPrependKitten("Bob"){
    kitten.unshift(Bob)
    return kittens
    }
  
//
destructivelyRemoveLastKitten(){
    kitten.pop()
    return kittens
    }

//describe('destructivelyRemoveFirstKitten()', function() {
destructivelyRemoveFirstKitten(){
    kitten.shift()
    return kittens
    }

//describe('appendKitten(name)', function() {
appendKitten("Broom"){
    var appendKitten = [...kittens, "Broom"]
    return appendKitten
     // expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    }

//describe('prependKitten(name)', function() {
prependKitten("Arnold"){
    var prependKitten = ["Arnold", ...kittens]
    return prependKitten
      //expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    }

//describe('removeLastKitten()', function() {
removeLastKitten(){
    var removeLastKitten = kittens.slice(0, array.length - 1)    
    return removeLastKitten
    }

//describe('removeFirstKitten()', function() {
removeFirstKitten(){
    var removeFirstKitten = kittens.slice(1)
    return removeFirstKitten
    }