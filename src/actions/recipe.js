import uuid from 'uuid';

// ADD_RECIPE
export const addRecipe = ({ title, image='', ingredients=[], method = '' } = {}) => ({
    type: 'ADD_RECIPE',
    recipe: {
        id: uuid(),
        title,
        image,
        ingredients,
        method
    }
})

// REMOVE_RECIPE
export const removeRecipe = ({id}) => ({
    type: 'REMOVE_RECIPE',
    id
})