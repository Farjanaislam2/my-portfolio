import React from "react";
import mobile from "../../assets/mobile.png";

const Project = () => {
  return (
    <div className="mt-16">
      <h1 className="text-5xl text-center mb-9 text-amber-500 ">Projects</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5">
        <div className="card w-96 text-black bg-base-100 shadow-xl">
          <figure>
            <img src={mobile} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Used Mobile Resale Market</h2>
            <p>Technology Used: React, Firebase, </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Project;
