const app = "I don't do much.";
//describe('Arrays', function() {
//  beforeEach(function() {
//    window.kittens = ['Milo', 'Otis', 'Garfield'];
//  });

//describe('kittens', function() {
//  it('defines kittens as `var kittens = ["Milo", "Otis", "Garfield"]`', function() {
//    expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
function kittens()
{
  var kittens = ['Milo','Otid','Garfield'];
}
//describe('destructivelyAppendKitten(name)', function() {
//  it('appends a kitten to the end of the kittens array', function() {
//    destructivelyAppendKitten('Ralph')
//    expect(window.kittens).toEqual(["Milo", "Otis", "Garfield", "Ralph"])
function destructivelyAppendKitten(name)
{
  kittens.push(name);
}
//describe('destructivelyPrependKitten(name)', function() {
//  it('prepends a kitten to the beginning of the kittens array', function() {
//    destructivelyPrependKitten("Bob")
//    expect(window.kittens).toEqual(["Bob", "Milo", "Otis", "Garfield"])
function destructivelyPrependKitten(name)
{
  kittens.unshift(name);
}
//describe('destructivelyRemoveLastKitten()', function() {
//  it('removes the last kitten from the kittens array', function() {
//    destructivelyRemoveLastKitten()
//    expect(window.kittens).toEqual(["Milo", "Otis"])
function destructivelyRemoveLastKitten()
{
  kittens.pop();
}
//describe('destructivelyRemoveFirstKitten()', function() {
//  it('removes the First kitten from the kittens array', function() {
//    destructivelyRemoveFirstKitten()
//    expect(window.kittens).toEqual(["Otis", "Garfield"])
function destructivelyRemoveFirstKitten()
{
  kittens.shift();
}
//describe('appendKitten(name)', function() {
//  it('appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
//    expect(appendKitten("Broom")).toEqual(["Milo", "Otis", "Garfield", "Broom"])
//    expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
function appendKitten(name)
{
  return [...kittens, name];
}
//describe('prependKitten(name)', function() {
//  it('prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
//    expect(prependKitten("Arnold")).toEqual(["Arnold", "Milo", "Otis", "Garfield"])
//    expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
function prependKitten(name)
{
  return [name, ...kittens];
}
//describe('removeLastKitten()', function() {
//  it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
//    expect(removeLastKitten()).toEqual(["Milo", "Otis"])
//    expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
function removeLastKitten()
{
  return kittens.slice(0, kittens.length - 1);
}
//describe('removeFirstKitten()', function() {
//  it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
//    expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])
//    expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
function removeFirstKitten()
{
  return kittens.slice(1);
}
