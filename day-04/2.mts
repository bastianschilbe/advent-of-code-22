const file = Bun.file("./input.txt");
const text = await file.text();
const lines = text.split(/\n/);

class Range { 
    constructor(readonly start: number, readonly end: number) { }
    overlaps(other) { 
        return other.start <= this.end && other.end >= this.start
    }
}

let numberOfOverlaps = 0
for (const line of lines) { 
    const [, elf1Start, elf1End, elf2Start, elf2End] = line.match(
      /(\d+)\-(\d+),(\d+)-(\d+)/
    );
    const elf1Range = new Range(+elf1Start, +elf1End);
    const elf2Range = new Range(+elf2Start, +elf2End);
    if (elf1Range.overlaps(elf2Range) || elf2Range.overlaps(elf1Range)) { 
        numberOfOverlaps++
    }
}
console.log(numberOfOverlaps)