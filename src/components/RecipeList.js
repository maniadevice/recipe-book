import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeRecipe } from '../actions/recipe';

const RecipeList = (props) => (
    <div>
        <ul className='recipe_list'>
            {
                props.recipes.map((recipe) =>
                    <li className='recipe_list__item' key={recipe.id}>
                        <Link 
                            className='recipe_list__item__link'
                            to={{ pathname: "/view_recipe/" + recipe.id, state: { recipe } }}
                        >{recipe.title}
                        </Link>
                        <input type="button" className='button' id={recipe.id} onClick={props.onRemoveRecipe} value="Remove" />
                    </li>
                )

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
            dispatch(removeRecipe({id: recipeID}))
        }
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(RecipeList);