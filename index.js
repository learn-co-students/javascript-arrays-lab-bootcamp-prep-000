var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

/*destructivelyAppendKitten function
appends a kitten ot the end of the kittens array*/
function destructivelyAppendKitten(name){
  kittens = [...kittens, name]
  return kittens
}

/*destructivelyPrependKitten function
prepends a kitten to the beginning of the kittens array*/
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

/*destructivelyRemoveLastKitten function
removes the last kitten from the kittens array*/
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

/*destructivelyRemoveFirstKitten function
removes the First kitten from the kittens array*/
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

/*appendKitten function
appends a kitten to the kittens array and returns a new
array, leaving the kittens array unchanged*/
function appendKitten(name){
  var akittens = kittens
  var bkittens = [...akittens]
  bkittens.push(name)
  return bkittens
  akittens
}

/*prependKitten function
prepends a kitten to the kittens array and returns a new array,
leaving the kittens array unchanged*/
function prependKitten(name){
  var ckittens = kittens
  var dkittens = [...ckittens]
  dkittens.unshift(name)
  return dkittens
  ckittens
}

/*removeLastKitten function
removes the last kitten in the kittens array and returns a
new array, leaving the kittens uchanged*/
function removeLastKitten(){
  var ekittens = kittens
  var fkittens = [...ekittens]
  fkittens.pop()
  return fkittens
  ekittens
}

/*removeFirstKitten function
removes the first kitten from the kittens array and returns
a new array, leaving the kittens array unchanged*/
function removeFirstKitten(){
  var gkittens = kittens
  var hkittens = [...gkittens]
  hkittens.shift()
  return hkittens
  gkittens
}
