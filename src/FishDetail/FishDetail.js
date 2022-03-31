import React from 'react';
import './FishDetail.css'
const FishDetail = (props) => {
    const { strMealThumb, strMeal } = props.fish
    return (
        <div>
            <img src={strMealThumb} alt="" />
            <h2 className='text-4xl m-5 '>{strMeal}</h2>
        </div>
    );
};

export default FishDetail;