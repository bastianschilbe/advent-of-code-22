// how many of one ranges completely contains another range
const file = Bun.file("./input.txt");
const text = await file.text();
const lines = text.trim().split(/\n/);

const stacks: string[][] = []

// build the stacks
for (let i = 7; i >= 0; i--) { 
    for (let p = 1, c = 0; p < 36; p = p + 4, c++) { 
        const crate = lines[i][p].trim()
        if (!crate) { 
            continue
        }
        const a = stacks[c] ?? []
        a.push(crate)
        stacks[c] = a
    }
}

// execute the commands
for (let i = 10; i < lines.length; i++) { 
    const [num, from, to] = lines[i].match(/\d+/g)
    for (let m = 0; m < Number(num); m++) { 
        const crate = stacks[Number(from) - 1].pop()
        stacks[Number(to) - 1].push(crate)
    }
}

const result = stacks.map(s => s.at(-1)).join('')
console.log(result)

