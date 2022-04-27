import React from 'react';
import { Home } from './Home';
import { Route, Routes, useLocation} from 'react-router-dom';
import { Cuisine } from './Cuisine';
import { Search } from './Search';
import { Recipes } from './Recipes';
import { AnimatePresence } from 'framer-motion';

export const Pages = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />}/>
                <Route path='/cuisine/:type' element={<Cuisine />} />
                <Route path='/search/:query' element={<Search />} />
                <Route path='/recipe/:recipe' element={<Recipes />} />
            </Routes>
        </AnimatePresence>
    )
}