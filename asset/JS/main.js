// 1) Creo l'oggetto student 
var studente = {

    nome: 'Andrea',
    cognome: 'Monti',
    age: '26',

}

console.log(studente);

// 2) Trmite ciclo "for - IN" stampo a schermo le chiavi dell'oggetto
var studenteEl = document.getElementById('studente');
for (var key in studente) {
    studenteEl.innerHTML += `<ul>${key}: ${studente[key]}</ul>`;
}

// 3) Creo una matrice contentente oggetti "studente"

var matriceStudenti = [

    {
        nome: 'Andrea',
        cognome: 'Monti',
        age: '26',

    },

    {
        nome: 'Giulia',
        cognome: 'Cattaneo',
        age: '32',

    },

    {
        nome: 'Cecilia',
        cognome: 'Borghi',
        age: '27',

    }


]


// 4) Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
