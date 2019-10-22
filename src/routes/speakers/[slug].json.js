import fs from 'fs';
import fm from 'front-matter';
import marked from 'marked';

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;
  const speakersPath = './src/cc-markdowns/speakers/';

  if (fs.existsSync(`${speakersPath}${slug}.md`)) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    let speakerMD = fs.readFileSync(`${speakersPath}${slug}.md`, 'utf8');
    let speaker   = fm(speakerMD);

    speaker.html = marked(speaker.body);

    //console.log("DEBUG", speaker.html);

    res.end(JSON.stringify(speaker));
  } 
  else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: `Not found`
    }));
  }
}
