import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Search = () => {
    const params = useParams();
    const [data, setData] = useState([]);

    const getSearch = async(name) => {
        const res = await fetch(`${process.env.REACT_APP_URL}/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const data = await res.json();
        setData(data.results)
    };

    useEffect(() => {
        getSearch(params.query)
    }, [params.query])
    

    return (
        <div className='grid grid-cols-4 gap-3'>
            <h1 className='mb-5 mt-7 col-span-4 text-center text-4xl text-black'>{params.query}</h1>
            {data.map((item, index) => {
                return(
                    <Link to={`/recipe/${item.id}`} key={`${index}__${item.title}`}>
                        <motion.div
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.4 },
                        }}>
                        <img src={item.image} alt={item.title} className='rounded-lg' />
                        <p>{item.title}</p>
                        </motion.div>
                    </Link>
                )
            })}
        </div>
    )
}
