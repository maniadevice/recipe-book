import React from 'react';
import RecipeList from './RecipeList';
import { NavLink } from 'react-router-dom';


class RecipeDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titleSearchString: '',
            ingredientSearchString: ''
        }

        this.setFilter = this.setFilter.bind(this);
    }

    setFilter(event) {

        const titleSearchString = '';
        const ingredientSearchString = '';

        const searchFilter = event.target.id;
        const searchValue = event.target.value;
        console.log(searchValue);
        if(searchFilter === 'title_search') {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    titleSearchString: searchValue
                }

            })
        } else {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    ingredientSearchString: searchValue
                }
            })
        }
        console.log(this.state);
    }

    render() {
        return (
            <div className='container'>
                <div className='page_bar'>
                    <h3 className='page_bar__title'>Your Recipes</h3>
                </div>
                <span className="label">Search by Title:</span>
                <input type="text" id='title_search' className="field" onChange={this.setFilter} />
                <span className="label">Search by Ingredient:</span>
                <input type="text" id='title_ingredient' className="field" onChange={this.setFilter} />
                <NavLink to={{ pathname: "/add_recipe/" }}>Add New</NavLink>
                <RecipeList searchFilter={this.state} />
            </div>
        )

    }
}

export default RecipeDashboard;