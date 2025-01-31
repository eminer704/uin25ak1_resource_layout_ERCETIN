/* Importerer data fra ressurser.js */
import { resources } from "./ressurser.js";

// Henter <nav> menyen 
const nav = document.querySelector("nav");

// Lager en liste over kategorier ved å hente 'category' fra hver ressurs.
const categories = resources.map((resource) => resource.category);

// Oppretter en knapp for hver kategori og legger den til i navigasjonsmenyen
categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category;
    button.classList.add("category-button");

    // Viser innholdet for valgt kategori ved klikk.
    button.addEventListener("click", () => showCategory(category));

    // Legger knappen til i navigasjonsmenyen
    nav.appendChild(button);
});

//Når nettsiden åpnes, skal HTML-kategorien vises først.
document.addEventListener("DOMContentLoaded", () => {
    showCategory("HTML");
});

/* Funksjon for å vise innholdet til den valgte kategorien */
function showCategory(selectedCategory) {
    const main = document.querySelector("main");

    // Filtrerer ressursene for å finne den valgte kategorien
    const filteredCategory = resources.filter(
        (resource) => resource.category === selectedCategory
    )[0];

    // Oppretter HTML struktur for kategoriens innhold
    let content = `
        <h2>${filteredCategory.category}</h2>
        <p>${filteredCategory.text}</p>
        <ul>
            ${filteredCategory.sources
            .map(
                (source) =>
                    `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`
            )
            .join("")}
        </ul>
    `;

    // Legger innholdet til (<main>)
    main.innerHTML = content;

    // Marker den valgte kategorien ved å endre CSS-klassen 'selected'
    document.querySelectorAll(".category-button").forEach((button) => {
        button.classList.remove("selected");
        if (button.textContent === selectedCategory) {
            button.classList.add("selected");
        }
    });
}
