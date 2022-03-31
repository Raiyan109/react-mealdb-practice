import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css'
const Restaurant = (props) => {

    const [searchText, setSearchText] = useState('')

    const [meals, setMeals] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    const searchFood = e => {
        setSearchText(e.target.value)
    }
    const {
        name,
        id,
        label,
        placeholder,

    } = props

    return (
        <div>
            <h2>find the food you want </h2>

            <div onChange={searchFood} className="tw-input-field">
                <input
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none leading-normal" type="email"
                    placeholder="jane@example.com"
                />
            </div>
            <br />
            <h3>Result found : {meals.length}</h3>
            <div className='meals-container'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurant;