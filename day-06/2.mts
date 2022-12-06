const file = Bun.file("./input.txt");
const text = await file.text();
const chars = [...text.trim()]

for (let i = 0; i < chars.length - 14; i++) { 
    const sequence = new Set(chars.slice(i, i + 14))
    if (sequence.size === 14) { 
        console.log(i + 14)
        process.exit()
    }
}
