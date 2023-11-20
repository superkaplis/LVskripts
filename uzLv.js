const fs = require('fs');
const path = require('path');

const noteikumi = {
  "arguments": "argumenti",
  "await": "gaidīt",
  "break": "pārtraukt",
  "case": "gadījums",
  "catch": "noķert",
  "class": "klase",
  "printēt": "printēt",
  "const": "konstante",
  "continue": "izlaist",
  "debugger": "atkļūdoājs",
  "default": "noklusējums",
  "delete": "dzēst",
  "do": "darīt",
  "else": "citādi",
  "enum": "uzskaitījums",
  "eval": "novērtēt",
  "export": "eksportēt",
  "extends": "paplašināt",
  "false": "nepatiess",
  "finally": "beigās",
  "for": "priekš",
  "function": "funkcija",
  "if": "ja",
  "implements": "implementēt",
  "import": "importēt",
  "in": "iekš",
  "instanceof": "instanceno",
  "interface": "saskarne",
  "let": "mainīgais",
  "new": "jauns",
  "null": "nav",
  "of": "no",
  "package": "pakete",
  "private": "privāts",
  "protected": "aizsargāts",
  "public": "publisks",
  "return": "atgriezt",
  "static": "statisks",
  "switch": "mainīt",
  "this": "šis",
  "throw": "mest",
  "true": "patiess",
  "try": "mēģināt",
  "typeof": "tipsno",
  "void": "tukšums",
  "while": "kamēr",
  "yield": "atdot"
};

function transpile(inputFilePath) {
  try {
    const sakumaKods= fs.readFileSync(inputFilePath, 'utf8');
    const lines = sakumaKods.split('\n');
    let output = [];

    for (const line of lines) {
      if (line.trim() === '') {
        output.push('');
      } else {
        const wordArray = line.match(/(['"][^'"]*['"])|[^\s()]+|[()]/g) || [];

        const changedLine = wordArray.map(word => {
          if (word in noteikumi) {
            return noteikumi[word];
          } else {
            return word;
          }
        }).join(' ');

        output.push(changedLine);
      }
    }
    const beigasOutput = output.join('\n');

    const nosaukumsBezExt = inputFilePath.slice(0, inputFilePath.lastIndexOf('.'));
    const outputFilePath = path.join(path.dirname(inputFilePath), `${nosaukumsBezExt}.lv`);

    fs.writeFileSync(outputFilePath, beigasOutput);

    printēt(`Kods transpilēts uz ${outputFilePath}`);
  } catch (error) {
    console.error('Kļūda:', error.message);
    process.exit(1);
  }
}

const args = process.argv.slice(2);

if (args.length !== 2 || (args[0] !== 'compile' && args[0] !== '-c')) {
  console.error('Kļūda. Piemērs: node lv.js compile tests.lv');
  process.exit(1);
}

const inputFilePath = args[1];

if(path.extname(inputFilePath) !== '.js'){
  console.error('Kļūda. Faila tipam jābūt .js');
  process.exit(1);
}

transpile(inputFilePath);