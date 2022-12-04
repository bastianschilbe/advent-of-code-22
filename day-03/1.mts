const file = Bun.file("./input.txt");
const text = await file.text();

const rucksacks = text.split(/\n/);
const priorityScoreMap = new Map([..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((c, idx) => ([c, idx + 1])))

let prioScore = 0
for (const rucksack of rucksacks) { 
    const compartmentOne = new Set([...rucksack.slice(0, rucksack.length / 2)])
    const compartmentTwo = [...rucksack.slice(rucksack.length / 2)]
    const sameItem = compartmentTwo.find(c => compartmentOne.has(c))
    prioScore += priorityScoreMap.get(sameItem);
}
console.log(prioScore)