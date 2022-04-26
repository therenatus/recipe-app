import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Search = () => {
    const params = useParams();
    const [data, setData] = useState([]);

    const getSearch = async(name) => {
        const res = await fetch(`${process.env.REACT_APP_URL}recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const data = await res.json();
        setData(data.results)
    };

    useEffect(() => {
        getSearch(params.query)
    }, [params.query])
    

    return (
        <div className='grid grid-cols-4 gap-3'>
            {data.map((item, index) => {
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
