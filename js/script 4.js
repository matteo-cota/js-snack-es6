const teams = [
    { name: 'Juventus', points: 0, fouls: 0 },
    { name: 'Milan', points: 0, fouls: 0 },
    { name: 'Inter', points: 0, fouls: 0 },
    { name: 'Napoli', points: 0, fouls: 0 },
];

// Generare numeri random per punti e falli
teams.forEach(team => {
    team.points = Math.floor(Math.random() * 101); // da 0 a 100
    team.fouls = Math.floor(Math.random() * 51);   // da 0 a 50
});

// Creare un nuovo array con solo nomi e falli subiti
const namesAndFouls = teams.map(({ name, points, fouls }) => ({ name, points, fouls }));

// Stampare in pagina
const outputDiv = document.getElementById('output');
namesAndFouls.forEach(team => {
    const teamInfo = document.createElement('p');
    teamInfo.textContent = `Squadra: ${team.name}, Punti: ${team.points}, Falli subiti: ${team.fouls}`;
    outputDiv.appendChild(teamInfo);
});

console.log(namesAndFouls);
