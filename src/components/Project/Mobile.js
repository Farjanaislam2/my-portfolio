import React from 'react';
import mobile from "../../assets/addmobile.png";
import mobile1 from "../../assets/mobileadmin.png";
import mobile2 from "../../assets/selleradd.png";

const Mobile = () => {
    return (
        <div>
           <section className='ml-5 pl-5 lg:ml-16'>
           <h1 className='text-4xl text-center mt-4 text-amber-500'>Project Details</h1>
            <div className='mt-8 l'>
                <h1 className='text-2xl'><span className=' font-bold text-amber-500'>Project Name:</span> Used Mobile Resale Market </h1>
                <h2 className='text-2xl mt-2'>Used Technologys:</h2>
                <p className='mt-2'>React, Node Js, Express Js, Firebase, MongoDB, React Router and  Private Route, React Hook Form and Tailwind</p>
            </div>
            <div>
                <h1 className='text-2xl mt-4'>Projects Overview: </h1>
                <div className='mt-2 mb-8'>
                <li>There are two types of user login systems, using email/password and using a google account with Firebase Authentication system.</li>
                <li>There is a dashboard section, based on the normal user & admin role.</li>
                <li>A normal user can place an order, manage his orders and post a review.</li>
                <li>An admin can manage all orders, add or remove a product.</li>
                <li>Admin can make a new admin by providing an email address.</li>
                </div>
            </div>
            <div className=' mb-8 flex gap-3'>
           <div >
           <a href='https://second-hand-phone.web.app/'  target="_blank">
            <button className="btn btn-outline btn-warning">Live Site</button>
            </a>
           </div>
           <div>
           <a href='https://github.com/Farjanaislam2/used-mobile-resale-client'  target="_blank">
            <button className="btn btn-outline btn-warning">Client site Code</button>
            </a>
           </div>
           <div>
           <a href='https://github.com/Farjanaislam2/used-mobile-resale-server'  target="_blank">
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
                <img className='rounded-md' src={mobile} alt=""/>
                </div>
                <div className='md:w-full lg:w-3/5'>
                <img className='rounded-md' src={mobile1} alt=""/>
                </div>
                <div className='md:w-full lg:w-3/5'>
                <img className='rounded-md' src={mobile2} alt=""/>
                </div>
            </div>
           </section>
        </div>
    );
};

export default Mobile;