import IPokemon from "../../interfaces/IPokemon";

import { useStateSelector } from '../useStateSelector';

export const GetPokemon = (): ReadonlyArray<IPokemon> => useStateSelector(state => state.pokemonState.pokemon);