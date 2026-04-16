import {copyFileSync, existsSync, readdirSync, readFileSync, writeFileSync} from 'node:fs';
import {dirname, extname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const SITE_DIR = resolve(SCRIPT_DIR, '..');
const BUILD_DIR = join(SITE_DIR, 'build');
const STATIC_DIR = join(SITE_DIR, 'static');

const manifestFiles = ['_redirects', 'home.css'];
const stylesheetLinkPattern = /<link rel="stylesheet" href="([^"]*\/assets\/css\/[^"]+\.css)">/g;

function getHtmlFiles(rootDir) {
  const htmlFiles = [];
  const entries = readdirSync(rootDir, {withFileTypes: true});

  for (const entry of entries) {
    const entryPath = join(rootDir, entry.name);

    if (entry.isDirectory()) {
      htmlFiles.push(...getHtmlFiles(entryPath));
      continue;
    }

    if (entry.isFile() && extname(entry.name) === '.html') {
      htmlFiles.push(entryPath);
    }
  }

  return htmlFiles;
}

function makeAsyncStylesheetMarkup(href) {
  return [
    `<link rel="preload" href="${href}" as="style">`,
    `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'">`,
    `<noscript><link rel="stylesheet" href="${href}"></noscript>`,
  ].join('');
}

function optimizeRenderBlockingStyles(buildDir) {
  if (!existsSync(buildDir)) {
    return;
  }

  for (const htmlFile of getHtmlFiles(buildDir)) {
    const source = readFileSync(htmlFile, 'utf8');
    let didReplace = false;

    const updated = source.replace(stylesheetLinkPattern, (_match, href) => {
      didReplace = true;
      return makeAsyncStylesheetMarkup(href);
    });

    if (!didReplace || updated === source) {
      continue;
    }

    writeFileSync(htmlFile, updated);
    process.stdout.write(`Optimized stylesheet loading in ${htmlFile}\n`);
  }
}

for (const manifestFile of manifestFiles) {
  const sourcePath = join(STATIC_DIR, manifestFile);
  const destinationPath = join(BUILD_DIR, manifestFile);

  if (!existsSync(sourcePath) || !existsSync(BUILD_DIR)) {
    continue;
  }

  copyFileSync(sourcePath, destinationPath);
  process.stdout.write(`Synced ${manifestFile} to ${destinationPath}\n`);
}

optimizeRenderBlockingStyles(BUILD_DIR);
