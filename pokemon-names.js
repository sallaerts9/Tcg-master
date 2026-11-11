
window.POKEMON_NAMES = [];

fetch("https://pokeapi.co/api/v2/pokemon-species?limit=2000")
  .then(response => response.json())
  .then(data => {
    window.POKEMON_NAMES = data.results.map(pokemon =>
      pokemon.name
        .split("-")
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join("-")
    );
    console.log("Pokémon geladen:", window.POKEMON_NAMES.length);
  })
  .catch(error => {
    console.error("Pokémonlijst kon niet geladen worden:", error);
  });
