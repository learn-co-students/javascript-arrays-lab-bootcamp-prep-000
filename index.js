const app = "I don't do much."

function Arrays()
{
   kittens = ['Milo', 'Otis', 'Garfield']
}
function kittens()
{
  var kittens = ['Milo', 'Otis', 'Garfield']

}

Arrays()

function destructivelyAppendKitten(name)
{
  kittens.push(name)
  return kittens
}

destructivelyAppendKitten('Ralph')

Arrays()

function destructivelyPrependKitten(name)
{
  kittens.unshift(name)
  return kittens
}

destructivelyPrependKitten('Bob')

Arrays()

function destructivelyRemoveLastKitten()
{
  kittens.pop()
  return kittens

}

destructivelyRemoveLastKitten()

Arrays()

function destructivelyRemoveFirstKitten()
{
  kittens.shift()
}

destructivelyRemoveFirstKitten()

Arrays()


function appendKitten(name)
{
  return [...kittens,name]
}

appendKitten('Broom')

Arrays()

function prependKitten(name)
{
  return[name,...kittens]
}

Arrays()

function removeLastKitten()
{
   return kittens.slice(0,(kittens.length-1))

}

removeLastKitten()

Arrays()

function removeFirstKitten()
{
  return kittens.slice(1)
}
