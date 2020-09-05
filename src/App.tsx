import React from 'react';
import logo from './logo.svg';

import './App.css';

import { loadPokemon } from './models/pokemon-model';
import IPokemon from './interfaces/IPokemon';
import { GetPokemon } from './store/bundles/selectors';

interface IAppProps {
}

const App: React.FC<IAppProps> = (props) => {
  const pokemon: ReadonlyArray<IPokemon> = GetPokemon();

  React.useEffect(
    () => {
      loadPokemon();
    },
    []
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Redux with models, data services, and selectors example
        </p>
        <p>
          {pokemon.map(x => {
            return <p>{x.name}</p>;
          })}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;