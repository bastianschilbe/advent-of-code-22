import { Directory } from './Directory'

const file = Bun.file("./input.txt");
const text = await file.text();
const lines = text.trim().split(/\n/)

const allDirectories = new Set<Directory>();
let current: Directory | undefined = undefined;
for (const line of lines) {
  if (line.startsWith("$")) {
    const cd = line.match(/\$ cd (.+)/);
    if (cd) {
      const path = cd[1];
      if (path === "..") {
        current = current?.parent;
      } else {
        if (!current) {
          current = new Directory(path, undefined);
        } else {
          current = current.gotoDirectory(path);
        }
        allDirectories.add(current);
      }
    }
  } else {
    const file = line.match(/(\d+) (.+)/);
    if (file) {
      current.addFile(file[2], +file[1]);
    }
  }
}

const allDirectoriesWithLessThan1ksize = [...allDirectories].filter(dir => dir.size < 100_000)
const sum = allDirectoriesWithLessThan1ksize.reduce((sum, dir) => sum + dir.size, 0);

console.log(sum)
