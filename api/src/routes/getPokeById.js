const { Pokemon } = require("../db.js")
const axios = require("axios")

const URL = "https://pokeapi.co/api/v2/pokemon/"

const getPokeById = async (req, res) => {
    const { id } = req.params;
    try {
        let poke = await Pokemon.findByPk(id)
        if (!poke) {
            const response = await axios.get(`${URL}${id}`)
            const { name, id: pokeId, stats, sprites, height, weight, types } = response.data;
            const statsObject = stats.reduce((obj, stat) => {
                obj[stat.stat.name] = stat.base_stat;
                return obj;
            }, {});
            poke = await Pokemon.create({
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
                tipo2: types[1]?.type.name
            })
            //Aqui hay que realizar la relacion con la tabla tipo
        }
        return res.status(200).json(poke)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = getPokeById;