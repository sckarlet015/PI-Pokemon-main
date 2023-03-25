import axios from "axios";
import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";

export default function Types(props) {
    console.log(props.types)
    const [typesPoke, setTypesPoke] = useState([])

    const handleGetPokeTypes = async (e) => {
        const {value} = e.target;
        let arrayPokes = await axios.get(`http://localhost:3001/types/${value}`)
        .then(response => response.data)
        .then(data => data)
        setTypesPoke(arrayPokes)
        console.log(typesPoke)
    }


    return (
        <div className="">
            <div>
                <h3>Botones de tipos</h3>
                {props.types.map((type) => (
                    <button key={type.id} value={type.nombre} onClick={handleGetPokeTypes}>{type.nombre}</button>  
                ))}
            </div>
            <Cards pokemons={typesPoke}></Cards>

        </div>
    )
}