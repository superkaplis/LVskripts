# LVskripts 😀
LVskripts ir Javascript ar latviešu valodas sintaksi
# Instalācija
    npm install lv-skripts -global
# Izmatošana
LVskripts transpilēšana uz Javascript:
       
    lv-skripts compile tests.lv
    VAI
    lv-skripts -c tests.lv
Javascript transpilēšana uz LVskripts
    
    lv-skripts -otradi tests.js
# Sintakse
Skatīt sintakse.txt
# Piemērs
Javascript
```
const skaitlis = 4;
let kāpināt = true;

if (kāpināt) {
console.log(skaitlis**2);
} else {
console.log(skaitlis);
}
```
LVskripts
```
konsante skaitlis = 4;
mainīgais kāpināt = patiess ;

ja (kāpināt) {
  printēt(skaitlis**2);
} citādi {
  printēt(skaitlis)
}
```