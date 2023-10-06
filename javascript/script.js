// Chiedi all’utente il suo nome
let nome = prompt("Inserisci il tuo nome.");

// poi chiedi il suo cognome
let cognome = prompt("Inserisci il tuo cognomem, senza spazi se presenti.");

// poi chiedi il suo colore preferito
let favCol = prompt("Inserisci il tuo colore preferito.");

// Infine scrivi sulla pagina nomecognomecolorepreferito21
const numero = 21;

document.getElementById("password").innerHTML = `
<h2>
${nome}${cognome}${favCol}${numero}
    </h2>
`;
