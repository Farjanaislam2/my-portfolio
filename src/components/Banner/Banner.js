import React from 'react';
import cover1 from '../../assets/cover3.webp'
import { Link } from 'react-router-dom';
import resume from './resume.pdf';


const Banner = () => {
    
    return (
        <div className="hero min-h-screen text-white" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/top-view-office-desk-with-laptop-pencils-cactus-gray-background-flat-lay-workspace-desk_271740-6086.jpg?size=626&ext=jpg&ga=GA1.2.1819645791.1666648323&semt=ais")` }}>
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
          <p className='text-3xl sm:'>HEY THERE!</p>
                 <h1 className='text-4xl mt-3'>I AM <span className='text-amber-400 font-bold'>FARJANA ISLAM</span></h1>
                 <h1 className='mt-3 text-2xl'>MERN Stack Developer</h1>
            <div className='mt-5'>
                <a href={resume} download>
                <button className="btn bg-gradient-to-r from-yellow-400 to-amber-600 mx-5">RESUME</button>
                </a>
            <a href='https://www.linkedin.com/in/farjana-islam-anika/'  target="_blank">
            <button className="btn btn-outline btn-warning">LINKEDIN</button>
            </a>
            
            </div>
          </div>
        </div>
      </div>
        // <div className='hero'>
        //     <div className='cover-img'>
        //         <img className='w-full' src={cover1} alt=""/>
        //     </div>
        //     <div className='content '>
        //         <p className='text-3xl sm:'>HEY THERE!</p>
        //         <h1 className='text-4xl mt-3'>I AM <span className='text-amber-400 font-bold'>FARJANA ISLAM</span></h1>
        //         <h1 className='text-2xl mt-2'>MERN Stack Developer</h1>
        //         <div className='mt-5'>
        //             <Link to='/resume.pdf'
        //             className=''
        //             >RESUME</Link>
        //              <Link to='/'
        //             className='btn btn-outline btn-warning'
        //             >LINKEDIN</Link>
        //         </div>
        //     </div>
           
        // </div>
    );
};

export default Banner;