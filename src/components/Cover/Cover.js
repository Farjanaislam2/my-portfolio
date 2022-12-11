import React from 'react';
import { Link } from 'react-router-dom';
import cover1 from '../../assets/cover9.avif'
import './Cover.css'

const Cover = () => {
    return (
        <div className='cover'>
            <div className='cover-image'>
        
                <img className='w-full' src={cover1} alt=""/>
            </div>
            <div className='content'>
                <p className='text-4xl font-bold'>PROJECTS</p>
                
            
            </div>
           
           
        </div>
    );
};

export default Cover;