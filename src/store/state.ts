import IPokemon from "../interfaces/IPokemon";
import { IPokemonState } from "./bundles/pokemon-bundle";

export default interface IState {
    pokemonState: IPokemonState;
}