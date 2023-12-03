#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const noteikumi = {
  "argumenti": "arguments",
  "gaidīt": "await",
  "pārtraukt": "break",
  "gadījums": "case",
  "noķert": "catch",
  "klase": "class",
  "printēt": "console.log",
  "konstante": "const",
  "izlaist": "continue",
  "atkļūdoājs": "debugger",
  "noklusējums": "default",
  "dzēst": "delete",
  "darīt": "do",
  "citādi": "else",
  "uzskaitījums": "enum",
  "novērtēt": "eval",
  "eksportēt": "export",
  "paplašināt": "extends",
  "nepatiess": "false",
  "beigās": "finally",
  "priekš": "for",
  "funkcija": "function",
  "ja": "if",
  "implementēt": "implements",
  "importēt": "import",
  "iekš": "in",
  "instanceno": "instanceof",
  "saskarne": "interface",
  "mainīgais": "let",
  "jauns": "new",
  "nav": "null",
  "no": "of",
  "pakete": "package",
  "privāts": "private",
  "aizsargāts": "protected",
  "publisks": "public",
  "atgriezt": "return",
  "statisks": "static",
  "mainīt": "switch",
  "šis": "this",
  "mest": "throw",
  "patiess": "true",
  "mēģināt": "try",
  "tipsno": "typeof",
  "tukšums": "void",
  "kamēr": "while",
  "atdot": "yield",
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
    const outputFilePath = path.join(path.dirname(inputFilePath), `${nosaukumsBezExt}.js`);

    fs.writeFileSync(outputFilePath, beigasOutput);

    console.log(`Kods transpilēts uz ${outputFilePath}`);
  } catch (error) {
    console.error('Kļūda:', error.message);
    process.exit(1);
  }
}

const args = process.argv.slice(2);

if (args.length !== 2 || (args[0] !== 'compile' && args[0] !== '-c')) {
  console.error('Kļūda. Piemērs: node lv.js compile tests.js');
  process.exit(1);
}

const inputFilePath = args[1];

if(path.extname(inputFilePath) !== '.lv'){
  console.error('Kļūda. Faila tipam jābūt .lv');
  process.exit(1);
}

transpile(inputFilePath);