I put this project together to demonstrate a simple pattern for retrieving data from an external source and making said data available in a Redux bundle for React components to consume.

## Description of Architecture
I'll attempt to describe the flow of the example starting with a React component.

Get Data Flow:
App.tsx > Model > Data Services > External Source (Async Request)

Retrieve Data Flow:
External Source (Async Response) > Data Service > Model > PokemonBundle > App.tsx (Selector)

### Components
#### App.tsx
To keep things simple, I created the example solution using Create-React-App with TypeScript. I've avoided creating new components in this solution and have simply repurposed the App.tsx component to call 'loadPokemon'. This 'loadPokemon' function exists in a 'model' and makes our pokemon data available to us to select via the 'GetPokemon' selector.

Here I simply render out the result of the 'GetPokemon' selector to prove that it works.

## Models
A model is a concept where we can implement generic behind-the-scenes logic for fetching data from an external source and doing something with it. Ofcourse, we can also use the model for other things apart from fetching data via the data services; it is mearly a layer of abstraction to keep components clean.

In my example here, I have a function that can be called from anywhere that calls a data service. When the data service responds via a Promise we push the pokemon data returned in to the Redux 'PokemonBundle' which is a state slice I've created to hold said data.

As a further example of keeping things generic, I could reuse the 'loadPokemon' function in the example model in many different components, it is agnostic of where it is used and does not rely on it's consumer.

I considered a thunk approach here, but I think this is far simpler and allows us to be completely disconnected from relying on Redux where we can simply expose 'dispatch' to the application via a module.

## Data Services
A data service is a concept where we can implement specific data requests. A data service function will know the endpoint it needs to use, the verb and may take in a number of params to construct a body - it will then typically forward on the request to a generic http-utils over fetch API (or axios etc) module to perform the data retrieval. 

In the example here, I simply resolve a promise with some example data to keep it simple.

## Redux Bundle
The Redux pattern applied here is inspired a little bit by the 'Ducks' Redux pattern, but has some differences.

What I found using the typical Redux approach is that lots of files are merged together with very little seperation and in some cases, too much seperation.

A bundle is a concept that contains all of the logic relating to a particular state slice. For example, rather than having one massive State object, we now break them down in to logical slices. As a further example, an application may have a 'CarBundle', 'BicycleBundle', 'BoatBundle' and would be represented like so in State:

IState
> ICarState;
> IBicycleState;
> IBoatState.

Each bundle contains it's relevant state interface definition, action creators, handlers, and reducer. If you want to extend the application to fetch some additional data from an external source that pertains to 'Cars', then we can simply expand the 'CarBundle' with a new action type, action creator, handler (Sub-Reducer), and implement it in our reducer. At that point, we haven't affected ANY of our other bundles and we can be pretty sure we've not broken anything along the way that may be unrelated.

## Selectors
The selectors pattern here is an approach I've introduced to be compatable with Functional Components only; that pattern is unlikely to worth with the old school Class Based Components.

This pattern is effectively a custom React Hook that wraps a 'useStateSelector' hook which is a typed definition of the hook exposed from the Redux package itself.

Component > Selectors (GetPokemon) > UseStateSelector.
In here, we can simply target state.pokemonState.pokemon to get our data.

Using this type of pattern means we can also use jest.SpyOn when testing our components to become agnostic of the store and to return any data we feel fit. 

In comparison to the old-school connect pattern, this is far simpler and cleaner.
