const kmInput = prompt("Quanti km deve percorrere il tuo treno?");
const ageInput = prompt("Quanti anni hai?")

const km = parseInt(kmInput)
const age = parseInt(ageInput)

//debug
// console.log(ageInput, typeof ageInput)
// console.log(kmInput, typeof kmInput)

if (isNaN(kmInput)) {
    alert("Inserisci correttamente il numero dei km, senza lettere o caratteri speciali.")
} else if (isNaN(ageInput)) {
    alert("Inserisci correttamente la tua età, senza lettere o caratteri speciali.")
} 

const defaultPrice = km * 0.21

//debug
// console.log(defaultPrice)

if (age < 18) {
    finalPrice = defaultPrice - (defaultPrice / 100 * 20);
  } else if (age > 65) {
    finalPrice = defaultPrice - (defaultPrice / 100 * 40);
} else [
    finalPrice = defaultPrice
]

const finalPriceRounded = finalPrice.toFixed(2);

const result = `Il prezzo del tuo biglietto ammonta a ${finalPriceRounded}€`

console.log(result)


