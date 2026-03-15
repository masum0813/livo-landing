import {cpSync, existsSync, mkdirSync, rmSync} from 'node:fs';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const SITE_DIR = resolve(SCRIPT_DIR, '..');
const BUILD_DIR = join(SITE_DIR, 'build');
const DIST_DIR = resolve(SITE_DIR, '..', 'dist');

if (!existsSync(BUILD_DIR)) {
  throw new Error(`Build output not found at ${BUILD_DIR}. Run "npm run build" first.`);
}

rmSync(DIST_DIR, {recursive: true, force: true});
mkdirSync(DIST_DIR, {recursive: true});
cpSync(BUILD_DIR, DIST_DIR, {recursive: true});

process.stdout.write(`Exported ${BUILD_DIR} to ${DIST_DIR}\n`);
