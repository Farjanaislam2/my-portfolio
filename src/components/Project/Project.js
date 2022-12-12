import React from "react";
import mobile from "../../assets/mobile.png";
import quiz from "../../assets/quiz.png";
import cleaning from "../../assets/cleaning.png";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="mt-16">
      <h1 className="text-5xl text-center mb-9 text-amber-500 ">Projects</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5 ml-5 p-5">
        <div className="card w-full text-white bg-black shadow-xl">
          <figure>
            <img src={mobile} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Used Mobile Resale Market</h2>
            <p>Technology Used: : React, Node Js, Express Js, Firebase, MongoDB, React Router and React Nesting Router, Private Route, React Hook Form </p>
            <div className="card-actions justify-end">
              <Link to='/mobile'>
              <button className="btn btn-outline btn-warning">VIEW DETAILS</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-full bg-black shadow-xl">
  <figure><img src={cleaning} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Cleaning Service</h2>
    <p>Technology used:React, React Bootstrap, Firebase, Node.js, Express Js, MongoDB, React Router, React Private Route.</p>

    <div className="card-actions justify-end">
<Link to='/cleaning'>
<button className="btn btn-outline btn-warning">VIEW DETAILS</button>
</Link>
    </div>
  </div>
</div>
<div className="card w-full bg-black shadow-xl">
  <figure><img src={quiz} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Quiz Templete</h2>
    <p>React, Firebase, React Bootstrap, React Router and Private Route.</p>
    <div className="card-actions justify-end">
     <Link to='/quiz'>
     <button className="btn btn-outline btn-warning">VIEW DETAILS</button></Link>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Project;
