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
    },
    {
        id: 2,
        name: 'pizza',
        servings: 1,
        cookTime: '2:00',
        instructions: `1. put salt
        2. put in oven
        3. eat it`,
    },
];

export default App;
