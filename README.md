# LVskripts 😀
LVskripts ir Javascript ar latviešu valodas sintaksi
# Instalācija
    npm install lvskripts -global
# Izmatošana
LVskripts transpilēšana uz Javascript:
       
    lvskripts -kompilet tests.lv
    VAI
    lvskripts -k tests.lv
Javascript transpilēšana uz LVskripts
    
    lvskripts -otradi tests.js
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