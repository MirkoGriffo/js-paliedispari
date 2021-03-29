/* Palidroma


Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


var parola = prompt("Inserisci una parola").trim();
var parolaInversa = invertiParola(parola);



// creo la funzione che restituisce la parola inversa

function invertiParola(parola) {
    var parolaInversa = "";
    for (i = parola.length - 1; i >= 0; i--) {
        parolaInversa += parola[i];
    }
    return parolaInversa;

}

console.log(parolaInversa);


// Controllo se parola è palindorma

if (parola === parolaInversa) {
    console.log("è palindroma");
} else {
    console.log("non è palindroma");
}


/*
Pari e Dispari


L’utente sceglie pari o dispari
e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

var sceltaUtente = prompt("Pari o dispari?").toLowerCase().trim();
var n = prompt("inserire un numero da 1 a 5");
var nRandom = generaNumero(4);



// funzione che genera numero casuale

function generaNumero(num) {

    nRandom = parseInt(Math.random() * num + 1);

    return nRandom;
}

console.log(nRandom);

somma = parseInt(n) + parseInt(nRandom);

console.log(somma);


// funzione che stabilisce se un numero e pari o dispari

function pariDispari(num) {

    if (num % 2 === 0) {

        esito = "pari"
    }
    else {
        esito = "dispari"
    }

    return esito;

}

esito = pariDispari(somma);

console.log(esito);


// controllo se l'utente ha vinto o perso

if (esito === sceltaUtente) {

    console.log("Hai vinto");
}

else {
    console.log("Hai perso");
}