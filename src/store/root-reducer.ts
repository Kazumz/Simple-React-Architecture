import { combineReducers } from 'redux';

import pokemonReducer from './bundles/pokemon-bundle';

export default combineReducers({
    pokemonState: pokemonReducer, 
})