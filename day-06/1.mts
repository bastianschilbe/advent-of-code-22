const file = Bun.file("./input.txt");
const text = await file.text();
const chars = [...text.trim()]

for (let i = 0; i < chars.length - 4; i++) { 
    const sequence = new Set(chars.slice(i, i + 4))
    if (sequence.size === 4) { 
        console.log(i + 4)
        process.exit()
    }
}
