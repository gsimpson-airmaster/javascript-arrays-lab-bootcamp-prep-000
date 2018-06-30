const app = "I don't do much."
kittens = ['Milo', 'Otis', 'Garfield']


function destructivelyAppendKitten(s) {
  return kittens.push(s);
}

function destructivelyPrependKitten(s) {
  return kittens.unshift(s);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(s) {
  return kittens.concat(s)
}

function prependKittens(s) {
  return
}