import React from 'react';
import cleaning from "../../assets/cleanig2.png";
import cleaning1 from "../../assets/cleaning-adds.png";
import cleaning2 from "../../assets/cleaning.png";

const Cleaning = () => {
    return (
        <div>
        <section className='ml-5 pl-5 lg:ml-16'>
        <h1 className='text-4xl text-center mt-4 text-amber-500'>Project Details</h1>
         <div className='mt-8 l'>
             <h1 className='text-2xl'><span className=' font-bold text-amber-500'>Project Name:</span> Cleaning Service </h1>
             <h2 className='text-2xl mt-2'>Used Technologys:</h2>
             <p className='mt-2'>React, Node Js, Express Js, Firebase, MongoDB, React Router and  Private Route, React Bootstrap</p>
         </div>
         <div>
             <h1 className='text-2xl mt-4'>Projects Overview: </h1>
             <div className='mt-2 mb-8'>
             <li>This is a cleaning service related website.</li>
             <li>A user can create an account or log in with an email/password on this site.</li>
             <li>The user can logs in using a google account with the Google Firebase Authentication system.</li>
             <li>Add service and reviews page is private. If a user wants to add any service and add review, the user must login.</li>
             <li>After login a user can see full details of the service by clicking on the service detail button from the home and the services section.</li>
             </div>
         </div>
         <div className=' mb-8 flex gap-3'>
        <div >
        <a href='https://marvelous-tiramisu-6017ee.netlify.app/'  target="_blank">
         <button className="btn btn-outline btn-warning">Live Site</button>
         </a>
        </div>
        <div>
        <a href='https://github.com/Farjanaislam2/Cleaning-service-server'  target="_blank">
         <button className="btn btn-outline btn-warning">Client site Code</button>
         </a>
        </div>
        <div>
        <a href='https://github.com/Farjanaislam2/Cleaning-service-server'  target="_blank">
         <button className="btn btn-outline btn-warning">Server Site Code</button>
         </a>
        </div>
         </div>
        </section>
        <section>
         <div>
             <h1  className='text-4xl text-center text-amber-500 mb-8'>Project Preview</h1>
         </div>
         <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-3'>
             <div className='md:w-full lg:w-3/5 '>
             <img className='rounded-md' src={cleaning} alt=""/>
             </div>
             <div className='md:w-full lg:w-3/5'>
             <img className='rounded-md' src={cleaning1} alt=""/>
             </div>
             <div className='md:w-full lg:w-3/5'>
             <img className='rounded-md' src={cleaning2} alt=""/>
             </div>
         </div>
        </section>
     </div>
    );
};

export default Cleaning;