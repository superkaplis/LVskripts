# LVskripts 🇱🇻
LVskripts ir Javascript ar latviešu valodas sintaksi
# Instalācija
    npm install lvskripts -global
# Izmantošana
LVskripts koda izpildīšana:
       
    lvskripts -run tests.lv
LVskripts transpilēšana uz Javascript:
       
    lvskripts -compile tests.lv
Javascript transpilēšana uz LVskripts
    
    lvskripts -reverse tests.js
# Sintakse
Skatīt *sintakse.md* priekš visiem rezervētajiem vārdiem 
# Piemērs
Javascript
```
const cipari = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i of cipari) {
    if (i % 2 === 1) {
        console.log(i);
    }
}
```
LVskripts
```
konstante cipari = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

priekš (mainīgais i no cipari) {
    ja (i % 2 === 1) {
      printēt(i);
    }
}
```
# Visual studio paplašinājums
Instalē 'LVskripts' paplašinājumu no VS marketplace, priekš sintakses iezīmēšanas un koda automātiskās pabeigšanas.
