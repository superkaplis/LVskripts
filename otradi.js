const fs = require('fs');
const path = require('path');

const mappingRules = {
  "function": "funkcija",
  "let": "mainīgais",
  "const": "konstante",
  "else": "citādi",
  "if": "ja",
  "for": "priekš",
  "while": "kamēr",
  "do": "dari",
  "switch": "gadījumi",
  "case": "gadijums",
  "true": "patiess",
  "false": "nepatiess",
  "new": "jauns",
  "this": "šis",
  "class": "klase",
  "console.log": "printēt",
  "prompt": "jautā"
}

function transpileFromFile(inputFilePath) {
  try {
    const code = fs.readFileSync(inputFilePath, 'utf8').replaceAll('(', ' (');
    const wordArray = code.split(/(['"][^'"]*['"])|\s+/);
    const jsOutput = [];

    for (const word of wordArray) {
      if (word in mappingRules) {
        jsOutput.push(mappingRules[word]);
      } else {
        jsOutput.push(word);
      }
    }

    const formattedOutput = jsOutput.join(' ').replaceAll(';', ';\n').replaceAll('{', '{\n');
    const outputFilePath = path.join(path.dirname(inputFilePath), `${path.basename(inputFilePath, path.extname(inputFilePath))}.latviski`);
    fs.writeFileSync(outputFilePath, formattedOutput);

    console.log(`Transpiled code has been written to ${outputFilePath}`);
  } catch (error) {
    console.error('Error reading or transpiling the file:', error.message);
    process.exit(1);
  }
}

const args = process.argv.slice(2);

if (args.length !== 2 || args[0] !== 'compile') {
  console.error('Usage: my-app compile <input-file>');
  process.exit(1);
}

const inputFilePath = args[1];

transpileFromFile(inputFilePath);