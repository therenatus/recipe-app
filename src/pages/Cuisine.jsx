import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export const Cuisine = () => {
    let param = useParams();

    const [cuisine, setCuisine] = useState([])


    useEffect(() => {
        getCuisine(param.type);
    }, [param.type])
    const getCuisine = async(name) => {
        const res = await fetch(`${process.env.REACT_APP_URL}recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const data = await res.json();
        setCuisine(data.results)
    }
    return (
        <div className='grid grid-cols-4 gap-3'>
            {cuisine.map((item, index) => {
                return(
                    <div>
                        <img src={item.image} alt="" />
                        <p>{item.title}</p>
                    </div>
                )
            })}
        </div>
    )
}
