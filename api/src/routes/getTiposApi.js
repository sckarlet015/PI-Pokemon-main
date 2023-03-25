const axios = require("axios");
const {Tipo} = require("../db.js")

async function getTiposApi(){
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/type');
        const tiposDePokemon = response.data.results;
        // Crear una nueva fila en la tabla Tipo por cada tipo de Pokemon
        tiposDePokemon.forEach(async (tipo) => {
        const tipoId = tipo.url.split('/')[6]; // Obtener el ID del tipo de Pokemon a partir de la URL
        await Tipo.create({
          id: tipoId,
          nombre: tipo.name
        });
      });
      console.log('Tipos de Pokemon guardados en la base de datos');
    } catch (error) {
        console.error(error);
    }
}

module.exports = getTiposApi;

