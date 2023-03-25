const {Pokemon} = require("../db.js")

const getAllPokemon = async(req, res) =>{
    try {
        const pokemons = await Pokemon.findAll();
        console.log("Pokeons encontrados con exito", pokemons.map(p => p.toJSON()));
        res.status(200).json(pokemons)
        
    } catch (error) {
        return res.status(400).json({ message: 'Error al buscar pokemons.' })
    }
}

module.exports = getAllPokemon;