const file = Bun.file("./input.txt");
const text = await file.text();

const rucksacks = text.split(/\n/);
const priorityScoreMap = new Map([..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((c, idx) => ([c, idx + 1])))

let prioScore = 0
for (let line = 0; line < rucksacks.length; line = line + 3) {
    const rucksackOne = new Set([...rucksacks[line + 0]])
    const rucksackTwo = new Set([...rucksacks[line + 1]])
    const rucksackThree = new Set([...rucksacks[line + 2]])
    const inAllThree = [...rucksackOne].find(c => rucksackTwo.has(c) && rucksackThree.has(c))
    prioScore += priorityScoreMap.get(inAllThree);
}

console.log(prioScore)