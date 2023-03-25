import { GET_ALL_POKEMON, GET_ALL_TYPES } from "../actions/actions";

const initialState = {
    allPokemons: [],
    allTypes: []
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_POKEMON:
            return {
                ...state,
                allPokemons: payload,
            };
        case GET_ALL_TYPES:
            return {
                ...state,
                allTypes: payload
            }
        default:
            return state;
    }
};

export default rootReducer;
