import React from "react";

const Knowlwdge = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-black to-gray-900 p-16">
      <h1 className="text-4xl text-center text-amber-500 mb-16 mt-10">KNOWLEDGE</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
         
          <div className="card w-full bg-gradient-to-r from-black to-gray-900 shadow-xl">
            <figure className="px-8 pt-8">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">JAVASCRIPT</h2>
              <li>Can solve problems</li>
              <li>Good at DOM</li>
              <li>Know Core Functions</li>
            </div>
          </div>
          <div className="card w-full bg-gradient-to-r from-black to-gray-900 shadow-xl">
            <figure className="px-8 pt-8">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1183/1183672.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">REACT</h2>
              <li>React Core things and components</li>
              <li>Good at React-Router</li>
              <li>NPM GIT JSX and More</li>
            </div>
          </div>
          <div className="card w-full bg-gradient-to-r from-black to-gray-900 shadow-xl">
            <figure className="px-8 pt-8">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">NODE JS</h2>
              <li>Package Management</li>
              <li>Databases and Node JS NPM</li>
              <li>Source & Security</li>
            </div>
          </div>
          <div className="card w-full bg-gradient-to-r from-black to-gray-900 shadow-xl">
            <figure className="px-8 pt-8">
              <img
                src="https://cdn-icons-png.flaticon.com/128/892/892917.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">MongoDB</h2>
              <li>MongoDb Essential</li>
              <li>Performance</li>
              <li>Data Security</li>
            </div>
          </div>
          <div className="card w-full bg-gradient-to-r from-black to-gray-900 shadow-xl">
            <figure className="px-8 pt-8">
              <img
                src="https://seeklogo.com/images/E/express-js-logo-FA36FF1D3F-seeklogo.com.png"
                alt="Shoes"
                className="rounded-xl bg-blue-800"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">EXPRESS JS</h2>
              <li>Done Concept</li>
              <li>Good at Express</li>
              <li>Core things</li>
            </div>
          </div>
          <div className="card w-full bg-gradient-to-r from-black to-gray-900 shadow-xl">
            <figure className="px-8 pt-8">
              <img
                src="https://qph.fs.quoracdn.net/main-qimg-073ea8b86447ed9310e7e73bd89894b3"
                alt="Shoes"
                className="rounded-xl bg-blue-800"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">MERN STACK</h2>
              <li>Whole things</li>
              <li>Best in MERN</li>
              <li>Projects</li>
        
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowlwdge;
