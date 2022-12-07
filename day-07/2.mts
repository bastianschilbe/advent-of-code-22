import { Directory } from './Directory'

const file = Bun.file("./input.txt");
const text = await file.text();
const lines = text.trim().split(/\n/)

const allDirectories = new Set<Directory>()
let current: Directory | undefined = undefined
let root: Directory | undefined = undefined
for (const line of lines) { 
    if (line.startsWith('$')) { 
        const cd = line.match(/\$ cd (.+)/)
        if (cd) {
            const path = cd[1]
            if (path === "..") {
                current = current?.parent
            } else { 
                if (!current) {
                    current = root = new Directory(path, undefined)
                } else { 
                    current = current.gotoDirectory(path)
                }
                allDirectories.add(current)
            }
        }
    } else { 
        const file = line.match(/(\d+) (.+)/)
        if (file) {
            current.addFile(file[2], +file[1])
        }
    }
}

const total_disk_space = 70000000;
const unused_space_needed = 30000000;

const currently_unused = total_disk_space - root.size;
const needed_space = unused_space_needed - currently_unused;

const possible = [...allDirectories].filter(d => d.size > needed_space).sort((a,b) => a.size - b.size)
console.log(possible[0].size)

