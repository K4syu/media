#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const mediaDir = path.resolve(__dirname, '..');
const videosDir = path.join(mediaDir, 'videos');
const outFile = path.join(videosDir, 'list.json');

function isVideoFile(name) {
  const exts = ['.mp4', '.webm', '.ogg', '.mov', '.m4v'];
  return exts.includes(path.extname(name).toLowerCase());
}

try {
  const files = fs.readdirSync(videosDir, { withFileTypes: true });
  const videos = files
    .filter(f => f.isFile() && isVideoFile(f.name))
    .map(f => ({ name: f.name, path: `videos/${f.name}` }));

  fs.writeFileSync(outFile, JSON.stringify(videos, null, 2), 'utf8');
  console.log(`Wrote ${videos.length} entries to ${outFile}`);
} catch (err) {
  console.error('Error generating video list:', err.message);
  process.exit(1);
}
