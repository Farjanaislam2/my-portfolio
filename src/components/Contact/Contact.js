import React from 'react';

const Contact = () => {
    return (
        <div name='contact' className='text-white w-full h-screen flex justify-center items-center'>
        <form method='POST' action='https://getform.io/f/73718b76-5496-41df-83bc-f295f840efd6' className='flex flex-col w-full max-w-[600px]'>
            <div>
                <p className='text-4xl text-center text-amber-500 pb-8'>CONTACT ME</p>
            </div>
            <input className='p-2 rounded-md' type="text" name="name" placeholder='Your Name'/>
            <input className='my-4 p-4 rounded-md' type="email" name="email" placeholder='Your Email'/>
            <textarea className='rounded-md p-2 text-black' rows="10" name='message' placeholder='your Message'></textarea>
           <div className='mt-4'>
           <button className="btn btn-outline btn-warning">LET'S COLLABORATE</button>
           </div>
        </form>
        </div>
    );
};

export default Contact;