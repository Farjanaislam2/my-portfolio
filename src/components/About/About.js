import React from "react";
import cover1 from "../../assets/cover9.avif";

const About = () => {
  return (
    <div className="text-white ">
      <p className="text-4xl text-center mt-8">ABOUT ME</p>
      <div className=" mt-10 flex flex-col items-center justify-center md:flex-row p-5">
      <div className=" flex flex-col justify-center h-full w-1/2">
        <p className="lg:text-xl">Hi, I am Ruhul Amin from Bangladesh. I have always been passionate about web development, which led me to pursue a Bachelor of Computer Science degree. I am constantly seeking out new technologies and stay up-to-date on trends in the industry. <br/>

I have extensive knowledge of HTML, CSS, JavaScript, React, Node, and MongoDB. <br/>

I look forward to sharing more about my skills and experiences. Feel free to contact me at +88 01515607384 or farjananika2@gmail.com.

LinkedIn: www.linkedin.com/in/farjana-islam-anika
Github:https://github.com/Farjanaislam2?tab=repositories</p>
      </div>
      <div>
      <div className="card w-full p-10 shadow-xl">
            <figure>
              <img
                src="https://img.freepik.com/premium-vector/web-developer-semi-flat-color-vector-character-female-programmer-figure-person-white-self-employed-freelancer-isolated-modern-cartoon-style-illustration-graphic-design-animation_151150-5737.jpg?size=626&ext=jpg&ga=GA1.2.1819645791.1666648323&semt=sph"
                alt="Shoes"
                className="rounded-xl bg-blue-800"
              />
            </figure>
           
          </div>
      </div>
      </div>
    </div>
  );
};

export default About;
