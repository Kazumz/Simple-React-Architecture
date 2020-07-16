import IPokemon from "../../interfaces/IPokemon";

enum ActionTypes {
    SET_POKEMON = "POKEMON_BUNDLE_SET_POKEMON"
}

interface ISetPokemonAction {
    type: ActionTypes.SET_POKEMON,
    pokemon: ReadonlyArray<IPokemon>
}

// Action Combinator
type Action = ISetPokemonAction;

// State Slice Definition
export interface IPokemonState {
    pokemon: ReadonlyArray<IPokemon>;
}

// Action Creators
export const actionCreators = {
    setPokemon(pokemon: ReadonlyArray<IPokemon>): ISetPokemonAction {
        return {
            type: ActionTypes.SET_POKEMON,
            pokemon: pokemon
        }
    }
}

// Sub-Reducers
function setPokemonAction(state: IPokemonState = getDefault(), action: Action): IPokemonState {
    return {
        ...state,
        pokemon: action.pokemon
    }
}

// Get Default
export function getDefault(): IPokemonState {
    return {
        pokemon: []
    }
}

export default function reducer(state: IPokemonState, action: Action): IPokemonState {
    switch (action.type) {
        case ActionTypes.SET_POKEMON:
            return setPokemonAction(state, action)
        default:
            return state
    }
}