import {copyFileSync, existsSync} from 'node:fs';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const SITE_DIR = resolve(SCRIPT_DIR, '..');
const BUILD_DIR = join(SITE_DIR, 'build');
const STATIC_DIR = join(SITE_DIR, 'static');

const manifestFiles = ['_redirects'];

for (const manifestFile of manifestFiles) {
  const sourcePath = join(STATIC_DIR, manifestFile);
  const destinationPath = join(BUILD_DIR, manifestFile);

  if (!existsSync(sourcePath) || !existsSync(BUILD_DIR)) {
    continue;
  }

  copyFileSync(sourcePath, destinationPath);
  process.stdout.write(`Synced ${manifestFile} to ${destinationPath}\n`);
}
