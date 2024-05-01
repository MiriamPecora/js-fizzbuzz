<!-- Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
Ricordate: il primo push dovrà essere un file README.md contenente la risoluzione dell’esercizio in linguaggio naturale!
Buon lavoro e buon divertimento! -->

<!-- RISOLUZIONE DEL PROBLEMA -->
-Dichiaro una variabile con valore "1" all'interno di un ciclo for
    -Le do istruzioni di eseguire il ciclo finché la variabile dichiarata sarà minore di 101 e che ad ogni controllo, dovrà aumentare il suo valore di una cifra
    -Inserisco l'istruzione condizionale if/else e, man mano che il ciclo si esegue:
        -(if) Se il valore della variabile non è divisibile né per 3 né per 5, verrà stampato in console nient'altro che il valore della variabile
        -(else if) Se il valore della variabile è divisibile sia per 3 che per 5, allora verrà sovrascritta dalla stringa "FizzBuzz" e stampata in console
        -(else if) Se la variabile ha un valore che è possibile dividere per 3, dovrà essere sovrascritta dalla stringa "Fizz" e stampata in console
        -(else) Se la variabile ha un valore che è possibile dividere per 5, dovrà essere sovrascritta dalla stringa "Buzz" e stampata in console
<!-- PRIMO BONUS -->
-Su HTML, creo un container con all'interno un tag <ul></ul>
-Torno all'interno del ciclo for e, per ogni condizione, usufruisco della funzione append() per creare un elemento all'interno del DOM (<li></li>) con scritto il valore della variabile
<!-- SECONDO BONUS -->
-Tramite CSS aggiungo delle classi per caratterizzare l'interfaccia del programma
