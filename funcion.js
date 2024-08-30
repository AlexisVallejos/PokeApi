const API_URL = "https://pokeapi.co/api/v2/pokemon";
const root = document.getElementById("root");
const form = document.getElementById("agregado");
form.addEventListener("submit", (event) => {

  event.preventDefault();
  const nombre= document.getElementById("nombre").value;
  fetch(`${API_URL}/${nombre}`)
    .then((response) => response.json())
    .then((newPokemon) => {

      const div = document.createElement("div");
      const image = document.createElement("img");
      const name = document.createElement("h1");
      div.className = "card";
      image.src = newPokemon.sprites.other.dream_world.front_default;
      name.textContent = newPokemon.name;
      div.appendChild(name);
      div.appendChild(image);
      root.appendChild(div);

  });
});