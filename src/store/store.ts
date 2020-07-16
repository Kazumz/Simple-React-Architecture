import {
    createStore,
    Store
} from 'redux'

import rootReducer from './root-reducer'
import IState from './state'

const store: Store<IState> = createStore(rootReducer);

export default store;