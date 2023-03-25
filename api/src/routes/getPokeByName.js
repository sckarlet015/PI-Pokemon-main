const { Pokemon, sequelize } = require("../db.js");
const axios = require("axios");
const { Op } = require('sequelize');

const getPokeByName = async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
        return res.status(400).json({ error: 'Debe proporcionar un nombre de pokemon válido' });
    }
    // Buscar en la base de datos
    let pokemonsDb = await Pokemon.findAll({
      where: { name: { [Op.iLike]: `%${name}%` } },
      limit: 20 // Límite de registros a devolver
    });

    // Buscar en la API
    if(pokemonsDb.length === 0){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const { name: pokeName, id: pokeId, stats, sprites, height, weight, types } = response.data;
        const statsObject = stats.reduce((obj, stat) => {
            obj[stat.stat.name] = stat.base_stat;
            return obj;
        }, {});
        const createdPokemon = await Pokemon.create({
            name: pokeName,
            id: pokeId,
            vida: statsObject.hp,
            ataque: statsObject.attack,
            defensa: statsObject.defense,
            velocidad: statsObject.speed,
            altura: height,
            peso: weight,
            image: sprites.front_default,
            tipo1: types[0].type.name,
            tipo2: types[1]?.type.name
        });
        pokemonsDb = [createdPokemon];
        //Aqui hay que realizar la relacion con la tabla tipo
    }
    return res.status(200).json(pokemonsDb)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar los pokemons' });
  }
};

module.exports = getPokeByName;

