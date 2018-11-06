import React from 'react';
import RecipeList from './RecipeList';
import {Link, NavLink} from 'react-router-dom';

const RecipeDashboard = (props) => (
    <div className='container'>
        <div className='page_bar'>
            <h3 className='page_bar__title'>Your Recipes</h3>
        </div>
        <NavLink to={{ pathname: "/add_recipe/" }}>Add New</NavLink>
        <RecipeList />
    </div>
)

export default RecipeDashboard;