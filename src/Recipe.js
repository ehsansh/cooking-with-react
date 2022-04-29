import React from 'react';

export default function Recipe(props) {
    const { name, servings, cookTime, instructions } = props;
    return (
        <>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <button>Edit</button>
                <button>delete</button>
            </div>
            <div>
                <span>cook time</span>
                <span>{cookTime}</span>
            </div>
            <div>
                <span>servings</span>
                <span>{servings}</span>
            </div>
            <div>
                <span>instructions</span>
                <div>{instructions}</div>
            </div>
        </>
    );
}
