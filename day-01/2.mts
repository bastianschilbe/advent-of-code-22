const file = Bun.file('./aoc-input-1-1.txt')
const text = await file.text()

const allCals = [];
for (const calories of text.split(/\n\n/)) {
  allCals.push( calories
    .split(/\n/)
    .map(Number)
    .reduce((a, b) => a + b, 0));
}
allCals.sort((a, b) => b - a)

const calsOfTopThree = allCals[0] + allCals[1] + allCals[2]
console.log(calsOfTopThree);