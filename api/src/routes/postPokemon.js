const { Pokemon } = require("../db.js");

const postPokemon = async(req, res) => {
    try {
        const {name, id, vida, ataque, defensa, velocidad, altura, peso, image, tipo1, tipo2} = req.body;

        // Verificar que se proporcionen todos los datos necesarios
        if(!name || !id || !vida || !ataque || !defensa || !velocidad || !altura || !peso || !image){
            return res.status(400).json({message: 'Faltan datos por completar'})
        }

        // Verificar que los valores numéricos sean números válidos
        if(isNaN(id) || isNaN(vida) || isNaN(ataque) || isNaN(defensa) || isNaN(velocidad) || isNaN(altura) || isNaN(peso)) {
            return res.status(400).json({message: 'Los valores numéricos deben ser números válidos'})
        }

        // Verificar que el ID del Pokémon no esté duplicado
        const existingPokemon = await Pokemon.findOne({ where: { id }});
        if (existingPokemon) {
            return res.status(400).json({message: 'El ID del Pokémon ya existe'})
        }

        // Agregar el Pokémon a la base de datos
        const poke = await Pokemon.create({
            name,
            id,
            vida,
            ataque,
            defensa,
            velocidad,
            altura,
            peso,
            image,
            tipo1,
            tipo2
        });

        return res.status(200).json(poke)
    } catch (error) {
        return res.status(404).json({message: error.message}) 
    }
}

module.exports = postPokemon;
