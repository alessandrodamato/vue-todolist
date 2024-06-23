Vue To Do List
===
**Descrizione**  
Rifare l’esercizio della To Do List.   
Questa volta però ogni Todo sarà un oggetto, formato da due proprietà:  
- text, una stringa che indica il testo del Todo  
- done, un booleano (true/false) che indica se il Todo è stato fatto oppure no
-   
**Milestone 1**   
Stampare all’interno di una lista HTML un item per ogni Todo.  
Se la proprietà done è uguale a true, visualizzare il testo del Todo sbarrato.
  
**Milestone 2**  
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il Todo viene rimosso dalla lista.

**Milestone 3**  
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo Todo, che quindi viene aggiunto alla lista dei Todo esistenti.  
Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il Todo alla lista  

**Bonus**  
1 - esporre un messaggio di errore se il testo inserito ha meno di 4 caratteri  
2 - cliccando sul testo dell’item, invertire il valore della proprietà done del Todo corrispondente (se done era uguale a false, impostare true e viceversa)  
3 - rendere eliminabili solo i task con done === true. In caso contrario esporre un messaggio di errore diverso dal precedente  
4 - Se la lista è vuota stampare “Non sono presenti task” al posto della lista 

## Svolgimento
1. creare un array di oggetti, contenenti due proprietà: text e done
2. stampare dinamicamente con un v-for ogni `<li>` e di default qualcuno di essi avrà il text sbarrato
3. creare una funzione che cancelli gli elementi dall'array in base all'indice corrispettivo
4. creare una variabile temporanea
5. creare una funzione che aggiunga elementi alla lista tramite invio sull'input e click sul bottone
