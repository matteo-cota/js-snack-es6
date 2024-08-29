// SNACK 1: Creazione segnaposto per il tavolo Vip
const tableName = "Tavolo Vip";
const guests = [
    'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo',
    'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney',
    'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'
];

let placeholders = guests.map((guest, index) => {
    return {
        tableName: tableName,
        guestName: guest,
        place: index + 1
    };
});

console.log("Segnaposto per Tavolo Vip:");
console.log(placeholders);