import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';


export const Cuisine = () => {
    let param = useParams();

    const [cuisine, setCuisine] = useState([])


    useEffect(() => {
        getCuisine(param.type);
    }, [param.type])
    const getCuisine = async(name) => {
        const res = await fetch(`${process.env.REACT_APP_URL}/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const data = await res.json();
        setCuisine(data.results)
    }
    return (
        <motion.div className='grid grid-cols-4 gap-3'
          animate={{opacity: 1}}
          initial={{opacity:0}}
          exit={{ opacity: 0}}
          transition={{duration: 0.5}}
          >
            <h1 className='mb-5 mt-7 col-span-4 text-center text-4xl text-black'>{param.type}</h1>
            {cuisine.map((item, index) => {
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
        </motion.div>
    )
}
