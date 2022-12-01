const file = Bun.file('./aoc-input-1-1.txt')
const text = await file.text()

let mostCals = 0
for (const calories of text.split(/\n\n/)) { 
    const cals = calories.split(/\n/).map(Number).reduce((a, b) => a + b, 0)
    if (cals > mostCals) { 
        mostCals = cals
    }
}
console.log(mostCals)