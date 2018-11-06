import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import AppRouter from './routers/AppRouter';
import recipeReducer from './reducers/recipe';
import { createStore } from 'redux';

import './styles/styles.scss'
import 'normalize.css/normalize.css'

// Get the redux store built from the recipe reducer
const store = createStore(recipeReducer);

store.subscribe(() => {
    console.log(store.getState());
    console.log("saving data");
    const json = JSON.stringify(store.getState());

    localStorage.setItem('recipes', json);
})

const appJSX = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(appJSX, document.getElementById('app'));