import { combineReducers } from 'redux';

import { pokemonReducer } from './pokemonReducer';
// import { starshipsReducer } from './starshipsReducer';

const reducers = combineReducers({
  pokemonReducer,
  // starshipsReducer
});

export default reducers;