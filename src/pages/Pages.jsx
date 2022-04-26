import React from 'react';
import { Home } from './Home';
import { Route, Routes} from 'react-router-dom';
import { Cuisine } from './Cuisine';
import { Search } from './Search';

export const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/cuisine/:type' element={<Cuisine />} />
            <Route path='/search/:query' element={<Search />} />
        </Routes>
    )
}