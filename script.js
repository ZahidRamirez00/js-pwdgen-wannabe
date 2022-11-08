let nome = prompt("Inserisci il tuo nome: ");
let cognome = prompt("Inserisci il tuo cognome: ");
let colore = prompt("Inserisci il tuo colore preferito: ");
let numero1 = prompt("Inserisci il primo numero: ");
let numero2 = prompt("Inserisci il secondo numero: ");
let divisione = numero1 / numero2;

console.log(nome);
document.getElementById("nome").value = nome;
console.log(cognome);
document.getElementById("cognome").value = cognome;
console.log(colore);
document.getElementById("colore").value = colore;
console.log(numero1);
console.log(numero2);
console.log(divisione);

let password = nome + cognome + colore + divisione;

console.log(password);
document.getElementById("password").value = password;