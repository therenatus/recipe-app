import React from 'react';
import { Popular, Vaggie } from '../components'
import { Home } from './Home';
import { Route, Routes} from 'react-router-dom';
import { Cuisine } from './Cuisine';

export const Pages = () => {
    return (
        <Routes>
            <Route exact path='/*' element={<Home />}/>
            <Route exact path='/cuisine/:type' element={<Cuisine />} />
        </Routes>
    )
}