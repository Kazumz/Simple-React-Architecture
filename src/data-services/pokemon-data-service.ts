import IPokemon from "../interfaces/IPokemon";

export function getPokemon(): Promise<ReadonlyArray<IPokemon>> {
    return Promise.resolve([
        {
            name: "Charizard"
        }
    ])
}