// Lista de personajes y sus imágenes
const characters = [
    { name: "Josh", image: "images/josh.jpg" },
    { name: "Jacky", image: "images/jacky.jpg" },
    { name: "Dutch", image: "images/dutch.jpg" },
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
