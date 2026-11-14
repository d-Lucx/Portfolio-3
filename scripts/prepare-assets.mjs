import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const [source, name, width = '1600'] = process.argv.slice(2);
if (!source || !/^[a-z0-9-]+$/.test(name ?? '') || !/^\d+$/.test(width)) {
  throw new Error('Usage: npm run assets -- <source-file> <lowercase-name> [width]');
}
const root = path.resolve('public/projects');
await mkdir(root, { recursive: true });
const output = path.join(root, `${name}.webp`);
const info = await sharp(source).rotate().resize({ width: Number(width), withoutEnlargement: true }).webp({ quality: 86 }).toFile(output);
console.log(JSON.stringify({ file: `public/projects/${name}.webp`, width: info.width, height: info.height, bytes: info.size }));
