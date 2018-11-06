import React from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipe';

class AddRecipe extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            ingredientCount: 0
        };
        this.setIngredientCount = this.setIngredientCount.bind(this);

        console.log(props);
    }

    setIngredientCount(event) {
        const ingredientCount = event.target.value;
        this.setState((prevState) => ({ ingredientCount }));
    }

    drawIngredientsInput() {

        const ingredientsInputList = [];
        for (let i = 0; i < this.state.ingredientCount; i++) {
            ingredientsInputList.push(<br key={"br_" + i} />);
            ingredientsInputList.push();
            ingredientsInputList.push(<span className="label" key={"nameLabel_" + i}>Ingredient Name:</span>);
            ingredientsInputList.push(<input className="field" type="text" key={"name_" + i} name={"name_" + i} />);
            ingredientsInputList.push(<span className="label" key={"qtyLabel" + i}>Quantity:</span>);
            ingredientsInputList.push(<input className="field" type="text" key={"qty_" + i} name={"qty_" + i} />);
            ingredientsInputList.push(<span className="label" key={"unitsLabel" + i}>Units:</span>);
            ingredientsInputList.push(<input className="field" type="text" key={"unit_" + i} name={"unit_" + i} />);
        }

        return ingredientsInputList;
    }

    render() {
        return (
            <div className='container'>
                <div className="page_bar">
                    <h3 className='page_bar__title'>Add new recipe</h3>
                </div>
                <form onSubmit={this.props.onAddRecipe}>
                    <span className="label">Title:</span>
                    <input type="text" name="title" id="title" className="field" />
                    <br />
                    <span className="label">Choose Image:</span>
                    <input type="file"  className="field" 
                        id="image" name="image"
                        accept="image/png, image/jpeg" />
                    <br />
                    <span className="label">Number of ingredients:</span>
                    <input  className="field" type="text" name="ingredientCount" id="ingredientCount" onChange={this.setIngredientCount} value={this.state.ingredientCount} />
                    {
                        this.drawIngredientsInput()
                    }
                    <br />
                    <span className="label">Method:</span>
                    <textarea id="method" name="method" rows="4" cols="50"></textarea>
                    <br />
                    <button className="button" type="submit">Add Recipe</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddRecipe: event => {
            event.preventDefault();
            console.log(event.target.elements.file);
            // build the ingredients list
            const ingredientList = [];
            for (let i = 0; i < parseInt(event.target.elements.ingredientCount.value); i++) {

                var ingredient = {};
                ingredient["name"] = event.target.elements["name_" + i].value;
                ingredient["quantity"] = event.target.elements["qty_" + i].value;
                ingredient["unit"] = event.target.elements["unit_" + i].value;

                ingredientList.push(ingredient);
            }

            const recipeObject = {
                title: event.target.elements.title.value.trim(),
                method: event.target.elements.method.value.trim(),
                ingredients: ingredientList
            };

            // finally read the image
            const reader = new FileReader();
            let image;
            reader.onload = function (e) {
                recipeObject.image = reader.result.toString();
                console.log(recipeObject);

                // once the image data is saved, we dispatch the entire object
                dispatch(addRecipe(recipeObject));
            };

            // if there is no image, dispatch directly
            if(document.getElementById('image').files[0] != undefined) {
                reader.readAsDataURL(document.getElementById('image').files[0]);
            } else {
                dispatch(addRecipe(recipeObject));
            }
            
            window.location.href = "/";
        }
    }
}

export default connect(undefined, mapDispatchToProps)(AddRecipe);