const file = Bun.file("./input.txt");
const text = await file.text();

const games = text.split(/\n/)
let points = 0
for (const game of games) {
    const [hand1, hand2] = game.split(/ /)
    if (hand1 === undefined || hand2 === undefined) {
        continue
    }
    points += score(hand1 as any, hand2 as any)
}
console.log(points)

//A rock, B paper, C scissors
//X rock, Y paper, Z scissors 1,2,3
function score(a: 'A' | 'B' | 'C', b: 'X' | 'Y' | 'Z'): number { 
    if (b === 'X') { 
        if (a === 'C') { 
            return 1 + 6
        } else if (a === 'A') { 
            return 1 + 3
        } else {
            return 1
        }
    } else if (b === 'Y') {
        if (a === 'A') { 
            return 2 + 6
        } else if (a === 'B') { 
            return 2 + 3
        } else {
            return 2
        }
    } else if (b === 'Z') {
        if (a === 'B') { 
            return 3 + 6
        } else if (a === 'C') { 
            return 3 + 3
        } else {
            return 3
        }
    }
    throw new Error(`score error ${a} ${b}`)
}
