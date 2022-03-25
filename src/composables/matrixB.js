// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
var haslo = "HERE IS A SECRET MESSAGE ENCIPHERED BY TRANSPOSITION";
var klucz = "CONVENIENCE";
function matrixB(haslo,klucz){
    haslo = haslo.replace(/\s/g, '')
haslo = haslo.toLowerCase();
klucz = klucz.toLowerCase();
var kluczLength = klucz.length;
var hasloLength = haslo.length;
var tab = [];
var z = 0;
var iloscWierszy = Math.ceil(hasloLength/kluczLength);
for (var i = 0; i < iloscWierszy; i++) {
            tab[i] = [];
        }
for (var k = 0; k < iloscWierszy; k++){
    for(var l=0;l<kluczLength;l++){
        tab[k][l] = haslo[z];
        z++;
        if(z > hasloLength){
            tab[k][l] = ""; 
        }
    }
    
}
var napis = "";
for (var w = 0; w < kluczLength; w++){
    for(var k=0;k<iloscWierszy;k++){
        napis = napis + tab[k][w]
    }
}
return napis
}
console.log(matrixB("HERE IS A SECRET MESSAGE ENCIPHERED BY TRANSPOSITION","CONVENIENCE"))


