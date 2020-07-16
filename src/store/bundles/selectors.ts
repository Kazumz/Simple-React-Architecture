import {
    IPokemonState,
    getState
} from "./pokemon-bundle";
import IPokemon from "../../interfaces/IPokemon";

export function getPokemon(state: IPokemonState = getState()): ReadonlyArray<IPokemon> {
    return state.pokemon;
}