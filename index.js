#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vm = require('vm');

let rules = {
  "argumenti": "arguments",
  "gaidīt": "await",
  "pārtraukt": "break",
  "gadījums": "case",
  "noķert": "catch",
  "klase": "class",
  "printēt": "console.log",
  "konstante": "const",
  "konstruktors": "constructor",
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

function reverseRules(obj) {
  const reverse = {};
  for (const key in obj) {
    reverse[obj[key]] = key;
  }
  rules = reverse;
}

function transpile(inputFilePath) {
  try {
    const inputCode = fs.readFileSync(inputFilePath, 'utf8');
    const lines = inputCode.split('\n');
    let output = [];

    for (const line of lines) {
      if (line.trim() === '') {
        output.push('');
      } else {
        const lineWords = line.match(/(['"][^'"]*['"])|[^\s();]+|[();]|\s+/g) || [];

        const changedLine = lineWords.map(word => {
          if (word in rules) {
            return rules[word];
          } else {
            return word;
          }
        }).join('');

        output.push(changedLine);
      }
    }
    output = output.join('\n');
    return output

  } catch (error) {
    console.error('Kļūda:', error.message);
    process.exit(1);
  }
}

function writeOutputFile(code, extension) {
  const { dir, name } = path.parse(inputFilePath);
  const outputFilePath = path.join(dir, `${name}${extension}`);
  fs.writeFileSync(outputFilePath, code);
  console.log(`Kods transpilēts uz ${outputFilePath}`);
}

let [command, inputFilePath] = process.argv.slice(2, 4);

if (['-k', '-kompilet', '-compile', '-c'].includes(command)) {
  if (path.extname(inputFilePath) == '.lv') {
    writeOutputFile(transpile(inputFilePath), '.js')
  } else {
    console.error('Kļūda. Faila tipam jābūt .lv');
    process.exit(1);
  }
} else if (['-reverse', '-otradi', '-o'].includes(command)) {
  if (path.extname(inputFilePath) == '.js') {
    reverseRules(rules)
    writeOutputFile(transpile(inputFilePath), '.lv')
  } else {
    console.error('Kļūda. Faila tipam jābūt .js');
    process.exit(1);
  }
} else if (['-run', '-r'].includes(command) || (inputFilePath === undefined && command !== undefined &&command.includes('.lv'))) {
  if (inputFilePath === undefined) {
    inputFilePath = command;
  }
  if (path.extname(inputFilePath) == '.lv') {
    try {
      vm.runInThisContext(transpile(inputFilePath));
    } catch (error) {
      console.error('Kļūda:', error.message);
      process.exit(1);
    }
  } else {
    console.error('Kļūda: Faila tipam jābūt .lv');
    process.exit(1);
  }
} else {
  console.error('Kļūda: Izmanto -kompilet (-k), lai pārveidotu uz JS. (vai -otradi (-o) lai parveidotu uz LVskriptu)');
}
