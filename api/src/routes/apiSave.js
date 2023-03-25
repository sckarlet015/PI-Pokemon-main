const axios = require("axios");
const { get } = require("superagent");
const { Pokemon, Tipo } = require("../db.js")

const URL = "https://pokeapi.co/api/v2/pokemon/"

// Función para obtener datos de un pokemon por su ID
async function getPokemonData(id) {
  try {
    const response = await axios.get(`${URL}${id}`);
    const { name, id: pokeId, stats, sprites, height, weight, types } = response.data;
    const statsObject = stats.reduce((obj, stat) => {
      obj[stat.stat.name] = stat.base_stat;
      return obj;
    }, {});
    return {
      name,
      id: pokeId,
      vida: statsObject.hp,
      ataque: statsObject.attack,
      defensa: statsObject.defense,
      velocidad: statsObject.speed,
      altura: height,
      peso: weight,
      image: sprites.front_default,
      tipo1: types[0].type.name,
      tipo2: types[1]?.type.name,
    };
  } catch (error) {
    console.error(error);
  }
}

// Función para obtener los primeros 150 pokemons y guardarlos en la base de datos
async function getAndSavePokemons() {
  try {
    for (let i = 1; i <= 20; i++) {
      const pokemonData = await getPokemonData(i);
      await Pokemon.create(pokemonData);

      // Buscar el Tipo en la base de datos y obtener su ID
      const tipo1 = pokemonData.tipo1 ? await Tipo.findOne({ where: { nombre: pokemonData.tipo1 } }) : null;
      const tipo1Id = tipo1 ? tipo1.id : null;
      const tipo2 = pokemonData.tipo2 ? await Tipo.findOne({ where: { nombre: pokemonData.tipo2 } }) : null;
      const tipo2Id = tipo2 ? tipo2.id : null;

      if (tipo1Id) {
        tipo1.addPokemons(pokemonData.id)
      }
      if (tipo2Id) {
        tipo2.addPokemons(pokemonData.id)
      }
    }
  } catch (error) {
    console.error(error);
  }
}


module.exports = getAndSavePokemons;
