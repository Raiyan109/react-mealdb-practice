import React from 'react';

const Meal = (props) => {
    const { strMeal, strInstructions, strMealThumb } = props.meal
    const { handleAddToOrder, meal } = props
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h4 className='text-yellow-100 text-4xl font-mono'>{strMeal}</h4>
            <p className='text-yellow-100 text-2xl font-mono'>{strInstructions.slice(0, 100)}</p>
            <button className='text-yellow-100 text-2xl border-b-4 border-indigo-500' onClick={() => handleAddToOrder(meal)}>Add this food</button>

        </div>
    );
};

export default Meal;