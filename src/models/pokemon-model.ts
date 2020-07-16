import { getPokemon } from "../data-services/pokemon-data-service";
import IPokemon from "../interfaces/IPokemon";
import dispatch from "../store/dispatch";
import { actionCreators } from "../store/bundles/pokemon-bundle";

export function loadPokemon(): void {
    getPokemon()
        .then((pokemon: ReadonlyArray<IPokemon>) => {
            dispatch(actionCreators.setPokemon(pokemon));
        });
}