// Lista de personajes y sus imágenes
const characters = [
    { name: "JACKY MURIETA", image: "images/JACKY_MURIETA.webp" },
    { name: "PRETTY LUZENA", image: "images/PRETTY_LUZENA.webp" },
    { name: "JESSE JONES", image: "images/JESSE_JONES.webp" },
    { name: "RADDIE SNAKE", image: "images/RADDIE_SNAKE.webp" },
    { name: "JOSH McCLOUD", image: "images/JOSH_McCLOUD.webp" },
    { name: "ROSE DOOLAN", image: "images/ROSE_DOOLAN.webp" },
    { name: "BART CASSIDY", image: "images/BART_CASSIDY.webp" },
    { name: "JOURDONNAIS", image: "images/JOURDONNAIS.webp" },
    { name: "SID KETCHUM", image: "images/SID_KETCHUM.webp" },
    { name: "BLACK JACK", image: "images/BLACK_JACK.webp" },
    { name: "KIT CARLSON", image: "images/KIT_CARLSON.webp" },
    { name: "SIMEON PICOS", image: "images/SIMEON_PICOS.webp" },
    { name: "CALAMITY JANET", image: "images/CALAMITY_JANET.webp" },
    { name: "LUCKY DUKE", image: "images/LUCKY_DUKE.webp" },
    { name: "SLAB THE KILLER", image: "images/SLAB_THE_KILLER.webp" },
    { name: "DON BELL", image: "images/DON_BELL.webp" },
    { name: "MADAM YTO", image: "images/MADAM_YTO.webp" },
    { name: "SUZY LAFAYETTE", image: "images/SUZY_LAFAYETTE.webp" },
    { name: "DUTCH WILL", image: "images/DUTCH_WILL.webp" },
    { name: "PAUL REGRET", image: "images/PAUL_REGRET.webp" },
    { name: "VULTURE SAM", image: "images/VULTURE_SAM.webp" },
    { name: "EL GRINGO", image: "images/EL_GRINGO.webp" },
    { name: "PEDRO RAMIREZ", image: "images/PEDRO_RAMIREZ.webp" },
    { name: "WILLY THE KID", image: "images/WILLY_THE_KID.webp" }
    // Añade los que quieras...
];

document.getElementById("assignBtn").addEventListener("click", assign);

function assign() {
    const playersText = document.getElementById("players").value.trim();
    if (playersText === "") return;

    const players = playersText
        .split("\n")
        .map(p => p.trim())
        .filter(p => p.length > 0);

    if (players.length === 0) return;

    // Random shuffle de personajes
    const shuffled = [...characters].sort(() => Math.random() - 0.5);

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    players.forEach((player, i) => {
        const character = shuffled[i % shuffled.length];

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${player}</h3>
            <img src="${character.image}" alt="${character.name}">
            <p>${character.name}</p>
        `;
        resultsDiv.appendChild(card);
    });
}
