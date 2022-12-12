import React from 'react';
import quiz from "../../assets/quiz1.png";
import quiz1 from "../../assets/quiz2.png";
import quiz2 from "../../assets/quiz3.png";
import quiz3 from "../../assets/quiz4.png";

const Quiz = () => {
    return (
        <div>
        <section className='ml-5 pl-5 lg:ml-16'>
        <h1 className='text-4xl text-center mt-4 text-amber-500'>Project Details</h1>
         <div className='mt-8 l'>
             <h1 className='text-2xl'><span className=' font-bold text-amber-500'>Project Name:</span>Quiz Templete </h1>
             <h2 className='text-2xl mt-2'>Used Technologys:</h2>
             <p className='mt-2'>React, Firebase, React Bootstrap, React Router and Private Route.</p>
         </div>
         <div>
             <h1 className='text-2xl mt-4'>Projects Overview: </h1>
             <div className='mt-2 mb-8'>
             <li>It's a quiz-based website. </li>
             <li>Here are quizzes on 4 topics.
</li>
             <li>If you click on the correct answer then a modal will open and it will show the correct answer.</li>
             <li>If you click on the wrong answer,  a modal opens and shows the wrong answer.</li>
             <li>There is a blog section</li>
             <li>And there is a statistics option that shows a chart
</li>
             </div>
         </div>
         <div className=' mb-8 flex gap-3'>
        <div >
        <a href='https://cosmic-torrone-d886af.netlify.app/'  target="_blank">
         <button className="btn btn-outline btn-warning">Live Site</button>
         </a>
        </div>
        <div>
        <a href='https://github.com/programming-hero-web-course2/b6-quiz-crackerz-Farjanaislam2'  target="_blank">
         <button className="btn btn-outline btn-warning">Code</button>
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
             <img className='rounded-md' src={quiz} alt=""/>
             </div>
             <div className='md:w-full lg:w-3/5'>
             <img className='rounded-md' src={quiz1} alt=""/>
             </div>
             <div className='md:w-full lg:w-3/5'>
             <img className='rounded-md' src={quiz2} alt=""/>
             </div>
             <div className='md:w-full lg:w-3/5'>
             <img className='rounded-md' src={quiz3} alt=""/>
             </div>
         </div>
        </section>
     </div>
    );
};

export default Quiz;