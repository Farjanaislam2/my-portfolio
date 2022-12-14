import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer mt-12 p-10">
      <div>
        <span className="footer-title">KNOW FOR FARJANA</span>
        <p className="link link-hover">Javascript</p>
        <p className="link link-hover">React</p>
        <p className="link link-hover">Node JS</p>
        <p className="link link-hover">MongoDB</p>
        <p className="link link-hover">Express</p>
        <p className="link link-hover">UI Design</p>
      </div>
      <div>
        <span className="footer-title">QUICK LINKS</span>
        <Link to="/about" className="link link-hover">
          About
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
        <Link to="/resume" className="link link-hover">
          Resume
        </Link>
        <Link to="/projects" className="link link-hover">
          Projects
        </Link>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/Farjanaislam2?tab=repositories"
            target="_blank"
          >
            <FaGithub></FaGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/farjana-islam-anika/"
            target="_blank"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            href="https://www.facebook.com/Sohelfarjana123"
            target="_blank"
          >
            <FaFacebook></FaFacebook>
          </a>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
