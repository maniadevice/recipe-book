import React from 'react';
import uuid from 'uuid';

let recipeReducerDefaultState = [
    {
        id: uuid(),
        title: 'Red Thai Salmon Curry',
        image: "https://images.all-free-download.com/images/graphicthumb/food_picture_05_hd_picture_167554.jpg",
        ingredients: [
            {
                name: 'Salmon fillets', quantity: 500, unit: 'gms'
            },
            {
                name: 'Thai red curry paste', quantity: 1, unit: 'tbsp'
            },
            {
                name: 'Onion', quantity: 1, unit: ''
            },
            {
                name: 'Cocounut milk', quantity: 250, unit: 'ml'
            },
            {
                name: 'Sunflower oil', quantity: 1, unit: 'tsp'
            },
            {
                name: 'Green bean', quantity: 200, unit: 'gms'
            }
        ],
        method: 'Heat the oil in a large pan, then add the curry paste. Stir in the onion, then cook gently for about 5 mins \
        until softened. Pour in the coconut milk and bring to the boil. Reduce to a simmer, then add the salmon chunks and beans. \
        Leave to gently simmer for 5 mins until the fish flakes easily and the beans are tender. \
        Scatter with the coriander or basil, and serve with plain rice.'
    },
    {
        id: uuid(),
        title: 'Spicy Chicken Kebabs',
        image: "https://images.all-free-download.com/images/graphiclarge/delicious_food_04_hd_pictures_167550.jpg",
        ingredients: [
            {
                name: 'Small chicken fillets, cut into cubes', quantity: 4, unit: ''
            },
            {
                name: 'Cherry tomatoes', quantity: 20, unit: ''
            },
            {
                name: 'Button mushrooms', quantity: 20, unit: ''
            },
            {
                name: 'Spring onions', quantity: 3, unit: ''
            },
            {
                name: 'Honey', quantity: 2, unit: 'tbsp'
            },
            {
                name: 'Soy sauce', quantity: 1, unit: 'tbsp'
            },
            {
                name: 'Vegetable oil', quantity: 2, unit: 'tbsp'
            },
            {
                name: 'Large red peppers', quantity: 2, unit: ''
            },
        ],
        method: 'Grind the garlic, ginger, orange zest and spring onions to a paste in a food processor. Add the honey, orange juice, soy sauce and oil, then blend again. Pour the mixture over the cubed chicken and leave to marinate for at least 1 hr, but preferably overnight. Toss in the mushrooms for the last half an hour so they take on some of the flavour, too. \
        Thread the chicken, tomatoes, mushrooms and peppers onto 20 wooden skewers, then cook on a griddle pan for 7-8 mins each side or until the chicken is thoroughly cooked and golden brown. Turn the kebabs frequently and baste with the marinade from time to time until evenly cooked. Arrange on a platter, scatter with chopped spring onion and eat with your fingers.'
    },
    {
        id: uuid(),
        title: 'Cumin & onion marinated beef',
        image: "https://images.all-free-download.com/images/graphiclarge/food_picture_02_hd_pictures_167557.jpg",
        ingredients: [
            {
                name: 'Bavette or onglet steak', quantity: 1, unit: 'kg'
            },
            {
                name: 'Worcestershire sauce', quantity: 2, unit: 'tbsp'
            },
            {
                name: 'Crushed garlic cloves', quantity: 3, unit: 'tbsp'
            },
            {
                name: 'Lime', quantity: 2, unit: ''
            },
            {
                name: 'Red wine vinegar', quantity: 2, unit: 'tbsp'
            },
            {
                name: 'Cumin seed', quantity: 1, unit: 'tbsp'
            },
            {
                name: 'Chilli flakes', quantity: 1, unit: 'tbsp'
            },
            {
                name: 'Small grated onion', quantity: 1, unit: ''
            },
            {
                name: 'Olive oil', quantity: 2, unit: 'tbsp'
            },
        ],
        method: 'Cut the steak into 6 or 7 chunks. In a small bowl, mix together the Worcestershire, garlic, lime juice, vinegar, spices, \
        onion and olive oil. Season meat well on both sides, then place in a flat non-metallic dish or baking tray. Cover with the marinade \
        and chill for up to 1 day. Bring to room temperature 1 hr before grilling. Heat an outdoor grill or griddle pan until very hot. \
        Pat the meat dry and drizzle with a little more oil, then season. Thread 2 thin metal skewers through 2 of the steaks and repeat \
        with the others. Grill for 3-4 mins on one side, then turn over and repeat. Let the beef skewers rest under foil for 10 mins, \
        then slice and serve with the sauces'
    },
    {
        id: uuid(),
        title: 'Quinoa, lentil & feta salad',
        image: "https://images.all-free-download.com/images/graphiclarge/delicious_food_salad_03_hd_picture_167551.jpg",
        ingredients: [
            {
                name: 'Quinoa', quantity: 200, unit: 'gms'
            },
            {
                name: 'Olive oil', quantity: 1, unit: 'tsp'
            },
            {
                name: 'Small onion', quantity: 1, unit: ''
            },
            {
                name: 'Green lentils', quantity: 400, unit: 'gms'
            },
            {
                name: 'Cucumber', quantity: '¼', unit: ''
            },
            {
                name: 'Feta cheese', quantity: 100, unit: 'gms'
            },
            {
                name: 'Spring onions', quantity: 6, unit: ''
            },
            {
                name: 'Red or white wine vinegar', quantity: 1, unit: 'tbsp'
            }

        ],
        method: 'Cook the quinoa in a large pan of boiling water for 10-15 mins until tender, drain well, then set aside to cool. \
        Meanwhile, heat the oil in a small pan, then cook the shallot or onion for a few mins until softened. Add the tarragon, stir well, then remove from the heat.\
        Stir the softened shallot and tarragon into the cooled quinoa along with the lentils, cucumber, feta, spring onions, orange zest and juice and vinegar. Toss well together and chill until ready to serve.'
    }
]

const json = localStorage.getItem('recipes');
const recipes = JSON.parse(json);

if(recipes != null) {
    recipeReducerDefaultState = recipes;
}

export default (state = recipeReducerDefaultState, action) => {

    switch (action.type) {
        case 'ADD_RECIPE':
            return [
                ...state,
                action.recipe
            ];
        case 'REMOVE_RECIPE':
            return state.filter((recipe) => recipe.id != action.id);
        default:
            return state;
    }
}