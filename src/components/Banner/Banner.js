import React from 'react';
import cover1 from '../../assets/cover3.webp'
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='hero'>
            <div className='cover-img'>
                <img className='w-full' src={cover1} alt=""/>
            </div>
            <div className='content'>
                <p className='text-3xl'>HEY THERE!</p>
                <h1 className='text-4xl mt-3'>I AM <span className='text-amber-400 font-bold'>FARJANA ISLAM</span></h1>
                <h1 className='text-2xl mt-2'>MERN Stack Developer</h1>
                <div className='mt-5'>
                    <Link to='/'
                    className='btn btn-warning mx-5'
                    >RESUME</Link>
                     <Link to='/'
                    className='btn btn-outline btn-warning'
                    >LINKEDIN</Link>
                </div>
            </div>
           
        </div>
    );
};

export default Banner;