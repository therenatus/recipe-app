import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import './Category.scss'

const nav = [
    {
        name: 'Italian',
        icon: FaPizzaSlice,
        path: '/cuisine/Italian'
    },
    {
        name: 'American',
        icon: FaHamburger,
        path: '/cuisine/American'
    },
    {
        name: 'Japanase',
        icon: GiChopsticks,
        path: '/cuisine/Japanase'
    },
    {
        name: 'Korean',
        icon: GiNoodles,
        path: '/cuisine/Korean'
    },
];

export const Category = () => {
    return (
        <header className='flex justify-around'>
            {nav.map((category, index) => {
                return(
                    <NavLink to={category.path} key={`${category.name}__${index}`} className='a'>
                        <category.icon className='text-white' />
                        <p className='text-center top-[35%] text-white'>{category.name}</p>
                    </NavLink>
                )
            })}
        </header>
    )
}