import React from 'react';
import Banner from '../Banner/Banner';
import Project from './../Project/Project';
import About from './../About/About';
import Contact from '../Contact/Contact';
import Knowlwdge from '../Knowlwdge/Knowlwdge';




const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Project></Project>
        
        <Knowlwdge></Knowlwdge>
        <About></About>
        <Contact></Contact>
        </div>
        
    );
};

export default Home;