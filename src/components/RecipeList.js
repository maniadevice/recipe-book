import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeRecipe } from '../actions/recipe';

const RecipeList = (props) => (
    <div>
        <ul className='recipe_list'>
            {
                props.recipes.map((recipe) => {

                    // filter for search string (title/ingredientName), 
                    // passed down as props by RecipeDashboard
                    if (recipe.title.toLowerCase()
                        .search(props.searchFilter.titleSearchString.toLowerCase()) === -1) {
                        return null;
                    }

                    let recipeMatch = false;
                    for (let i = 0; i < recipe.ingredients.length; i++) {
                        if (recipe.ingredients[i].name.toLowerCase()
                            .search(props.searchFilter.ingredientSearchString.toLowerCase()) > -1) {
                            recipeMatch = true;
                        }
                    }

                    if (recipeMatch === false) {
                        return null;
                    }

                    return (

                        <li className='recipe_list__item' key={recipe.id} >
                            <Link
                                className='recipe_list__item__link'
                                to={{ pathname: "/view_recipe/" + recipe.id, state: { recipe } }}
                            >{recipe.title}
                            </Link>
                            <input type="button" className='button' id={recipe.id} onClick={props.onRemoveRecipe} value="Remove" />
                        </li>
                    )
                })

            }
        </ul>
    </div>
)

// we need the entire state as props here
const mapStoreToProps = (state) => {
    return {
        recipes: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveRecipe: event => {
            const recipeID = event.target.id;
            dispatch(removeRecipe({ id: recipeID }))
        }
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(RecipeList);