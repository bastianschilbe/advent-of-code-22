export class File {
  constructor(public size: number, readonly name: string) {}
}

export class Directory extends File {
  readonly children: Map<string, Directory> = new Map();
  readonly files: File[] = [];
  constructor(name: string, readonly parent: Directory | undefined) {
    super(0, name);
  }

  addFile(name: string, size: number) {
    const file = new File(size, name);
    this.files.push(file);
    this.size += size;
    let parent = this.parent;
    while (parent) {
      parent.size += size;
      parent = parent.parent;
    }
  }

  gotoDirectory(name: string) {
    if (this.children.has(name)) {
      return this.children.get(name)!;
    }
    const dir = new Directory(name, this);
    this.children.set(name, dir);
    return dir;
  }
}
