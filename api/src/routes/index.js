const { Router } = require('express');
const getAllPokemon = require('./allPokemos');
const getPokeById = require('./getPokeById');
const getPokeByName = require('./getPokeByName');
const getPokemonsByType = require('./getPokemonsByType');
const getTipos = require('./getTipos');
const postPokemon = require('./postPokemon');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/pokemons", getAllPokemon)
router.get("/pokemons/name", getPokeByName)
router.get("/pokemons/:id", getPokeById)
router.post("/pokemons/post", postPokemon)
router.get("/types", getTipos)
router.get("/types/:type", getPokemonsByType)






module.exports = router;
