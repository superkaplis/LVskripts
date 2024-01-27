#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

let noteikumi = {
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
  "paka": "package",
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

function apgriezt(obj) {
  const otradais = {};
  for (const key in obj) {
    otradais[obj[key]] = key;
  }
  noteikumi = otradais;
}

let beigas = 'js';

function transpile(inputFilePath) {
  try {
    const sakumaKods = fs.readFileSync(inputFilePath, 'utf8');
    const lines = sakumaKods.split('\n');
    let output = [];

    for (const line of lines) {
      if (line.trim() === '') {
        output.push('');
      } else {
        const linijasVardi = line.match(/(['"][^'"]*['"])|[^\s()]+|[()]/g) || [];

        const changedLine = linijasVardi.map(word => {
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
    const outputFilePath = path.join(path.dirname(inputFilePath), `${nosaukumsBezExt}.${beigas}`);

    fs.writeFileSync(outputFilePath, beigasOutput);
    console.log(`Kods transpilēts uz ${outputFilePath}`);
  } catch (error) {
    console.error('Kļūda:', error.message);
    process.exit(1);
  }
}

const args = process.argv.slice(2);
const inputFilePath = args[1];

if (args[0] == '-kompilēt' || args[0] == '-k' || args[0] == '-compile' || args[0] == '-c') {
  if (path.extname(inputFilePath) == '.lv') {
    beigas = 'js'
    transpile(inputFilePath);
  } else {
    console.error('Kļūda. Faila tipam jābūt .lv');
    process.exit(1);
  }
} else if (args[0] == '-otradi' || args[0] == '-o') {
  if (path.extname(inputFilePath) == '.js') {
    apgriezt(noteikumi)
    beigas = 'lv'
    transpile(inputFilePath);
  } else {
    console.error('Kļūda. Faila tipam jābūt .js');
    process.exit(1);
  }
} else {
  console.error('Kļūda. Izmanto -kompilēt (-k), lai pārveidotu uz JS. (vai -otradi lai parveidotu uz LVskriptu)');
}