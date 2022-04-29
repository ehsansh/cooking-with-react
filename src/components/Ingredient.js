import React from 'react';

export default function Ingredient({ name, amount }) {
    // console.log(name);
    return (
        <>
            <span>{name}</span>
            <span>{amount}</span>
        </>
    );
}
