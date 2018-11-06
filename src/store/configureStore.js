import { createStore } from 'redux';

export default () => {
    const store = createStore(recipeReducer);
    return store;
}
