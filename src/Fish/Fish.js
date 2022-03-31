import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FishDetail from '../FishDetail/FishDetail';

const Fish = () => {

    const [fishes, setFishes] = useState([])

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setFishes(data.meals))
    }, [])
    return (
        <div className='grid md:grid-cols-4 gap-4 m-2 p-3 sm:m-3 p-4'>

            {
                fishes.map(fish => <FishDetail key={fish.idMeal} fish={fish}></FishDetail>)
            }
        </div>
    );
};

export default Fish;