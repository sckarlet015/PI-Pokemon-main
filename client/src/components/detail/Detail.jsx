import {useEffect, useState} from "react";
import axios from "axios"
import style from "./Card.module.css"
import { useParams, useNavigate } from "react-router-dom";



export default function Detail(props) {

    const [pokemon, setPokemon] = useState({})
    const {pokeId} = useParams();

    useEffect(() => {
        axios(`http://localhost:3001/pokemons/${pokeId}`)
        .then(response => response.data)
        .then(data => setPokemon(data))
    },[])

    return (
      <div className={style.card}>
        <h2>Detalles del pokemon</h2>
        <img src={pokemon.image} alt="Pokemon" />
        <div className={style.info}>
          <h2 className={style.name}>#{pokemon.id} {props.name}</h2>
          <p className={style.id}>ID: {pokemon.id}</p>
          <p className={style.stat}>Vida: {pokemon.vida}</p>
          <p className={style.stat}>Ataque: {pokemon.ataque}</p>
          <p className={style.stat}>Defensa: {pokemon.defensa}</p>
          <p className={style.stat}>Velocidad: {pokemon.velocidad}</p>
          <p className={style.stat}>Altura: {pokemon.altura} m</p>
          <p className={style.stat}>Peso: {pokemon.peso} kg</p>
        </div>
        <div className={style.type}>
          <span className={style.grass}>Grass</span>
          <span className={style.poison}>Poison</span>
        </div>
      </div>
    )
  }