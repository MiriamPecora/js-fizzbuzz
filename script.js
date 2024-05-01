// Dichiaro le variabili contenenti le stringhe che utilizzerò
const fizzBuzz = "FizzBuzz";
const fizz = "Fizz";
const buzz = "Buzz";

// Inizio il ciclo for
for (let isDivisible = 1; isDivisible <= 100; isDivisible++ ) {

    // Dichiaro le variabili che mi serviranno per creare nuovi elementi nel DOM
    const numberList = document.getElementById("number_list");
    const liElement = document.createElement('li');

    // Faccio svolgere le operazioni condizionali per determinare quali numeri sono divisibili per 3, 5, 15 o nessuno dei tre
    if (isDivisible % 3 !== 0 && isDivisible % 5 !== 0)
    {
        // Determino cosa conterrà il nuovo elemento lista
        liElement.innerHTML = isDivisible;
        // Lo inserisco dentro il contenitore "ul" in html
        numberList.append(liElement)
        // Stampo il risultato anche in console
        console.log(isDivisible)
    }
    else if (isDivisible % 15 == 0)
    {
        liElement.innerHTML = fizzBuzz;
        numberList.append(liElement)
        console.log(fizzBuzz)
    }
    else if (isDivisible % 3 === 0)
    {
        liElement.innerHTML = fizz;
        numberList.append(liElement)
        console.log(fizz)
    }
    else if (isDivisible % 5 === 0)
    {
        liElement.innerHTML = buzz;
        numberList.append(liElement)
        console.log(buzz)
    }
    

}