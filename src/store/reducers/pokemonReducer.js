import { GET_POKEMON, GET_POKEMON_DETAILS, GET_DETAILS_INFO,  ERROR } from '../action/types';

const initialState = {
  pokemon: [],
  pokemonDetails: [],
  detailsInfo: [],
  pokeImageId: [],
  pages: [],
  loading: true,
  errorStatus: ''
}

export function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON:
      return { ...state, pokemon: action.pokemon, loading: false }
      case GET_POKEMON_DETAILS:
        return { 
          ...state, 
          pokemonDetails: action.pokemonDetails,
          pokeImageId: action.pokeImageId,
          loading: false }
    case GET_DETAILS_INFO:
          return { ...state,  detailsInfo: action.detailsInfo }
    case ERROR:
      return { ...state, errorStatus: action.errorStatus }
    default:
      return state;
  }
}