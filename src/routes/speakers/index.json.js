/**
 * Note: this file is evaluated on the server-side, like all .json.js files.
 */

import fs from 'fs';
import fm from 'front-matter';

const speakersPath = './src/cc-markdowns/speakers/'
const speakersAry = fs.readdirSync(speakersPath).filter(file => (file.substr(-3) == ".md"));

let speakers = [];
for (let speakerFile of speakersAry) {
  let speakerMD = fs.readFileSync(`${speakersPath}${speakerFile}`, 'utf8');
  speakers.push(fm(speakerMD));
}

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify(speakers));
}