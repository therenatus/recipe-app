import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export const Vaggie = () => {

    const [vaggie, setVaggie] = useState([]);

    useEffect(() => {
        GetVaggie()
    }, [])

    const GetVaggie = async() => {

        const local = localStorage.getItem('vegetarian');

        if(local){
            setVaggie(JSON.parse(local))
        }else{
            const res = await fetch(`${process.env.REACT_APP_URL}/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=7&tags=vegetarian`);
            const data = await res.json();
            setVaggie(data.recipes);
            localStorage.setItem('vegetarian', JSON.stringify(data.recipes));
            console.log(data.recipes)
        }

    }
    return (
        <div>
            <h3 className='my-5 text-center text-2xl'>Veggie</h3>
            <Splide 
                options={{
                    perPage:3,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '8rem'
                }}>
                {vaggie.map((el, index) => {
                    return(
                        <SplideSlide key={index}>
                            <div className='relative h-[20rem]'>
                                <p className='absolute text-white z-20 text-center bottom-10 w-[90%] left-[5%] font-bold text-lg'>{el.title}</p>
                                <img  className='rounded-xl absolute h-full z-10 object-center' src={el.image} alt={el.title} />
                                <div className='rounded-xl absolute bg-black z-10 w-full h-full opacity-20'></div>
                            </div>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </div>
    )
}
