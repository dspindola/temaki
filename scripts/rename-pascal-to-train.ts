#!/usr/bin/env bun

import { readdirSync, renameSync, statSync } from 'node:fs';
import { basename, dirname, extname, join } from 'node:path';

function pascalToTrainCase(str: string): string {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}

function snakeToTrainCase(str: string): string {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}

function camelToTrainCase(str: string): string {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}

function isSnakeCase(str: string): boolean {
  return /^[a-z][a-z0-9]*$/.test(str);
}

function isCamelCase(str: string): boolean {
  return /^[a-z][a-zA-Z0-9]*$/.test(str);
}

function isPascalCase(str: string): boolean {
  return /^[A-Z][a-zA-Z0-9]*$/.test(str);
}



function renameFilesRecursively(dir: string): void {
  const entries = readdirSync(dir);

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      renameFilesRecursively(fullPath);
    } else if (stat.isFile()) {
      const ext = extname(entry);
      const nameWithoutExt = basename(entry, ext);

      if (isPascalCase(nameWithoutExt)) {
        const newName = pascalToTrainCase(nameWithoutExt) + ext;
        const newPath = join(dirname(fullPath), newName);

        console.log(`Renaming: ${entry} -> ${newName}`);
        renameSync(fullPath, newPath);
      }
      if (isSnakeCase(nameWithoutExt)) {
        const newName = snakeToTrainCase(nameWithoutExt) + ext;
        const newPath = join(dirname(fullPath), newName);

        console.log(`Renaming: ${entry} -> ${newName}`);
        renameSync(fullPath, newPath);
      }
      if (isCamelCase(nameWithoutExt)) {
        const newName = camelToTrainCase(nameWithoutExt) + ext;
        const newPath = join(dirname(fullPath), newName);

        console.log(`Renaming: ${entry} -> ${newName}`);
        renameSync(fullPath, newPath);
      }
    }
  }
}

const componentsDir = ['./components', './components/ui', './hooks'];

for (const dir of componentsDir) {
  try {
    console.log(`Renaming PascalCase files to train-case in ${dir}...`);
    renameFilesRecursively(dir);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}
