import axios from "axios";
import { get_all_types } from "./actions";

export function getAllTypes(){
    return dispatch => {
        axios.get("http://localhost:3001/types")
        .then(response => {
            const allTypes = response.data;
            dispatch(get_all_types(allTypes))
        })
        .catch(error => {
            console.log(error)
        })
    }
}