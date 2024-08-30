const bikes = [
    { name: 'Bianchi', weight: 7.2 },
    { name: 'Pinarello', weight: 6.8 },
    { name: 'Colnago', weight: 7.0 },
    { name: 'Trek', weight: 6.9 }
];

const lightestBike = bikes.reduce((lightest, current) => current.weight < lightest.weight ? current : lightest);

const { name, weight } = lightestBike;
const resultText = `La Bici con il peso minore è ${name} con un peso di ${weight} kg.`;


document.getElementById('result').innerText = resultText;