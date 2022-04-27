import React from 'react'
import { FaPizzaSlice, FaHamburger, FaCheese } from 'react-icons/fa';
import { GiNoodles } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

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
        name: 'French',
        icon: FaCheese,
        path: '/cuisine/French'
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
                    <NavLink to={category.path} key={`${category.name}__${index}`} className='category'>
                        <category.icon className='text-white' />
                        <p className='text-center top-[35%] text-white'>{category.name}</p>
                    </NavLink>
                )
            })}
        </header>
    )
}