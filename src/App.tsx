import React from 'react';
import logo from './logo.svg';

import './App.css';

import { loadPokemon } from './models/pokemon-model';
import { connect } from 'react-redux';
import IPokemon from './interfaces/IPokemon';
import IState from './store/state';
import { AnyAction } from 'redux';
import { getPokemon } from './store/bundles/selectors';

interface IOwnProps {
}

interface IMapProps {
  pokemon: ReadonlyArray<IPokemon>;
}

interface IDispatchProps {
  dispatch: (action: AnyAction) => AnyAction;
}

type IAppProps = IOwnProps & IMapProps & IDispatchProps;

const App: React.FC<IAppProps> = (props) => {
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
          {props.pokemon.map(x => {
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

function mapStateToProps(state: IState, props: IOwnProps): IMapProps {
  return {
    pokemon: getPokemon(state.pokemonState)
  }
}

export default connect<IMapProps, {}, IOwnProps, IState>(mapStateToProps)(App);
