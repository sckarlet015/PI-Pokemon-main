import axios from "axios";
import { get_all_pokemon } from "./actions";

export function getAllPokemon() {
    return dispatch => {
        axios.get("http://localhost:3001/pokemons")
            .then(response => {
                const allpokemon = response.data;
                dispatch(get_all_pokemon(allpokemon));
            })
            .catch(error => {
                console.log(error);
            });
    }
}
