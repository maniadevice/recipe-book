import React from 'react';

const Recipe = (props) => (
    <div className='container'>
        <div className="page_bar">
            <h3 className='page_bar__title'>{props.location.state.recipe.title}</h3>
        </div>
        {console.log(props)}
        <div>
            <img height='368px' width='552px' src={props.location.state.recipe.image}></img>
        </div>
        <div className='recipe_block'>
            <h4>Ingredients</h4>
            {
                props.location.state.recipe.ingredients.map((ingredient) =>
                    <li key={ingredient.name}>{ingredient.name} ({ingredient.quantity}{ingredient.unit})</li>
                )
            }
        </div>
        <div className='recipe_block'>
            <h4>Method</h4>
            <p>{props.location.state.recipe.method}</p>
        </div>
    </div>
)

export default Recipe;