# LVskripts 😀
LVskripts ir Javascript ar latviešu valodas sintaksi
# Instalācija
    npm install lv-skripts -global
# Izmatošana
LVskripts transpilēšana uz Javascript:
       
    lv-skripts -kompilēt tests.lv
    VAI
    lv-skripts -k tests.lv
Javascript transpilēšana uz LVskripts
    
    lv-skripts -otradi tests.js
# Sintakse
Skatīt sintakse.txt
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