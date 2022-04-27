import React, { useEffect, useState } from 'react';
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
                    gap: '5rem'
                }}>
                {popular.map((el, index) => {
                    return(
                        <SplideSlide key={index}>
                            <div className='relative min-h-[20rem]'>
                                <p className='absolute text-white z-20 text-center bottom-10 w-[90%] left-[5%] font-bold text-lg'>{el.title}</p>
                                <img  className='rounded-xl absolute h-full z-10 object-cover' src={el.image} alt={el.title} />
                                <div className='rounded-xl absolute bg-black z-10 w-full h-full opacity-20'></div>
                            </div>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </div>
    )
}
