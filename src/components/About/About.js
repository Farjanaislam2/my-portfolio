import React from "react";
import cover1 from "../../assets/cover9.avif";

const About = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-photo/wooden-black-office-desk-table-with-laptop-top-view_146508-2907.jpg?size=626&ext=jpg&ga=GA1.2.1819645791.1666648323&semt=ais")`,
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="mx-auto max-w-screen-lg flex flex-col md:flex-row items-center justify-center px-4">
          <div className="justify-center text-center align-middle md:mt-12 md:pt11 lg:mt-5">
            <h1 className="text-center">ABOUT ME</h1>
            <p>
              Hi, I am Ruhul Amin from Bangladesh. I have always been passionate
              about web development, which led me to pursue a Bachelor of
              Computer Science degree. I am constantly seeking out new
              technologies and stay up-to-date on trends in the industry. I have
              extensive knowledge of HTML, CSS, JavaScript, React, Node, and
              MongoDB. I look forward to sharing more about my skills and
              experiences. Feel free to contact me at +88 01739713724 or
              ruhulaminbd99@gmail.com. LinkedIn: linkedin.com/ruhulzero7 Github:
              github.com/ruhulzero7
            </p>
          </div>
          <div>
            <div className="card w-96 mt-7">
              <figure>
                <img
                  src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?size=338&ext=jpg&ga=GA1.2.1819645791.1666648323"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
