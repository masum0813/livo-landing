import {cpSync, existsSync, mkdirSync, rmSync} from 'node:fs';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const SITE_DIR = resolve(SCRIPT_DIR, '..');
const REPO_DIR = resolve(SITE_DIR, '..');

const syncTargets = [
  {
    source: resolve(REPO_DIR, 'iptv'),
    destination: resolve(SITE_DIR, 'static', 'iptv'),
    label: 'iptv',
  },
];

for (const target of syncTargets) {
  if (!existsSync(target.source)) {
    continue;
  }

  rmSync(target.destination, {recursive: true, force: true});
  mkdirSync(target.destination, {recursive: true});
  cpSync(target.source, target.destination, {recursive: true});
  process.stdout.write(`Synced ${target.label} assets to ${target.destination}\n`);
}
