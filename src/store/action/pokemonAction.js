import axios from 'axios';

import api from '../../services/api';
import { GET_POKEMON, GET_POKEMON_DETAILS, GET_DETAILS_INFO, ERROR } from './types';

export const getPokemon = () => {
  return async dispatch => {
    const res = await api.get(`/pokemon?limit=10`)

    /* res.data.results.map(poke => getPokemonDetails(poke.url)); */

    try {
      dispatch({
        type: GET_POKEMON,
        pokemon: res.data.results,
        loading: false
      })
    } catch (error) {
      dispatch({ type: ERROR, errorStatus: res.data, loading: false })
    }
  }
}

export const getPokemonDetails = (urlPokemon, idImage, pokeDetails) => {
  return async dispatch => {
    const res = await axios.get(urlPokemon);
    
    idImage.push(res.data.id);
    pokeDetails.push(res.data);

    try {
      dispatch({ type: GET_POKEMON_DETAILS, pokemonDetails: pokeDetails, pokeImageId: idImage, loading: false })
    } catch (error) {
      dispatch({ type: ERROR, errorStatus: res.data, loading: false })
    }
  }
}

export const getDetailsInfo = (detailsInfo) => {
  return dispatch => {
    dispatch({ type: GET_DETAILS_INFO, detailsInfo })
  }
}
