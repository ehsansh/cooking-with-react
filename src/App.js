import React from 'react';
import RecipeList from './RecipeList';

function App() {
    return <RecipeList recipes={sampleRecipes} />;
}

const sampleRecipes = [
    {
        id: 1,
        name: 'chicken',
        servings: 3,
        cookTime: '1:00',
        instructions: `1. put salt
        2. put in oven
        3. eat it`,
        ingredients: [
            {
                id: 1,
                name: 'chicken',
                amount: 3,
            },
            {
                id: 2,
                name: 'salt',
                amount: '1 tbs',
            },
        ],
    },
    {
        id: 2,
        name: 'pizza',
        servings: 1,
        cookTime: '2:00',
        instructions: `1. put salt
        2. put in oven
        3. eat it`,
        ingredients: [
            {
                id: 1,
                name: 'pizza',
                amount: 3,
            },
            {
                id: 2,
                name: 'cheese',
                amount: '1 slice',
            },
        ],
    },
];

export default App;
