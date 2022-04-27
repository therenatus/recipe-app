import React from 'react';
import { Popular, Vaggie } from '../components';
import { motion } from 'framer-motion';

export const Home = () => {
    return (
        <motion.div className='mb-20'
          animate={{opacity: 1}}
          initial={{opacity:0}}
          exit={{ opacity: 0}}
          transition={{duration: 0.5}}>
            <Popular />
            <Vaggie />
        </motion.div>
    )
}
