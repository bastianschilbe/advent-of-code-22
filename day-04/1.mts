// how many of one ranges completely contains another range
const file = Bun.file("./input.txt");
const text = await file.text();
const lines = text.split(/\n/);

class Range { 
    constructor(readonly start: number, readonly end: number) { }
    contains(other) { 
        return other.start >= this.start && other.end <= this.end
    }
}

let numberOfFullContainments = 0
for (const line of lines) { 
    const [, elf1Start, elf1End, elf2Start, elf2End] = line.match(
      /(\d+)\-(\d+),(\d+)-(\d+)/
    );
    const elf1Range = new Range(+elf1Start, +elf1End)
    const elf2Range = new Range(+elf2Start, +elf2End)
    if (elf1Range.contains(elf2Range) || elf2Range.contains(elf1Range)) { 
        numberOfFullContainments++
    }
}
console.log(numberOfFullContainments)