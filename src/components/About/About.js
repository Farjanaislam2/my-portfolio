import React from "react";
import cover1 from "../../assets/cover9.avif";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="cover-image">
          <img className="w-full" src={cover1} alt="" />
        </div>
        <div className="content">
          <p className="text-4xl font-bold">ABOUT ME</p>
         <div className="mt-5 lg:text-xl">
         <p className="">
            Hi, I am Farjana Islam from Bangladesh. I have always been
            passionate about web development. I am constantly seeking out new
            technologies and stay up-to-date on trends in the industry.
          </p>
          <p className="mt-5">
            I have extensive knowledge of HTML, CSS, JavaScript, React, Node,
            and MongoDB.
          </p>
          <p className="mt-5">
            I look forward to sharing more about my skills and experiences. Feel
            free to contact me at +88 01515607384 or farjanaanika2@gmail.com{" "}
          </p>
          <p className="mt-5">
            LinkedIn: linkedin.com/in/farjana-islam-anika Github:
            https://github.com/Farjanaislam2?tab=repositories
          </p>
         </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default About;
