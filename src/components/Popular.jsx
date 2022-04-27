import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export const Popular = () => {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        GetPopular()
    }, [])

    const GetPopular = async() => {

        const local = localStorage.getItem('popular');

        if(local){
            setPopular(JSON.parse(local))
        }else{
            const res = await fetch(`${process.env.REACT_APP_URL}/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=7`);
            const data = await res.json();
            setPopular(data.recipes);
            localStorage.setItem('popular', JSON.stringify(data.recipes));
        }

    }
    return (
        <div>
            <h3 className='my-5 text-center text-2xl'>Popular</h3>
            <Splide 
                options={{
                    perPage:4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem',
                    breakpoints: {
                        1200: {
                          gap: '1rem'
                        }
                    }
                }}>
                {popular.map((item, index) => {
                    return(
                        <SplideSlide key={index}>
                            <Link to={`/recipe/${item.id}`} key={`${index}__${item.title}`}>
                                <motion.div className='relative h-[7rem] md:h-[13rem]'
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.4 },
                                    }}>
                                    <p className='absolute text-white z-20 text-center bottom-1.5 w-[90%] left-[5%] font-bold text-xs md:text-sm lg:text-lg'>{item.title}</p>
                                    <img  className='rounded-xl absolute h-full z-10 object-cover' src={item.image} alt={item.title} />
                                    <div className='rounded-xl absolute bg-black z-10 w-full h-full opacity-20'></div>
                                </motion.div>
                            </Link> 
                        </SplideSlide>
                    )
                })}
            </Splide>
        </div>
    )
}
