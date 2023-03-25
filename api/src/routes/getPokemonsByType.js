const {Pokemon, Tipo} = require("../db.js");

const getPokemonsByType = async (req, res) => {
    const {type} = req.params;
    // const type = "flying";
  try {
    const tipo = await Tipo.findOne({ where: { nombre: type } });
    const pokemons = await tipo.getPokemons();
    return res.status(200).json(pokemons);
  } catch (error) {
    console.error(error);
  }
}

module.exports = getPokemonsByType;