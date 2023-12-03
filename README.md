# LVskripts 😀
LVskripts ir Javascript ar latviešu valodas sintaksi
# Instalācija
    npm install lv-skripts -global
# Izmatošana
LVskripts faila transpilēšana uz Javascript failu:
     lv-skripts compile tests.js
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