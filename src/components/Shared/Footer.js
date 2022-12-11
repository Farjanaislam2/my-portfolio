import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';

const Footer = () => {
  const links = [
    {
      id: 1,
      child:(
       <>
      li <FaLinkedin></FaLinkedin>
       </> 
      ),
      href: 'https://www.linkedin.com/in/farjana-islam-anika/'
    },
    {
      id: 2,
      child:(
       <>
    git   <FaGithub></FaGithub>
       </> 
      ),
      href: 'https://github.com/Farjanaislam2?tab=repositories'
    },
    {
      id: 3,
      child:(
       <>
       <FaFacebook></FaFacebook>
       </> 
      ),
      href: 'https://www.facebook.com/Sohelfarjana123/'
    }
  ]
    return (
        <footer className="footer p-10">
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
    <Link to='/about' className="link link-hover">About</Link> 
    <Link to='/contact' className="link link-hover">Contact</Link> 
    <Link to='/resume' className="link link-hover">Resume</Link> 
    <Link to='/projects' className="link link-hover">Projects</Link>
  </div> 
  <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
      <ul>
      {
        links.map(({id,child,href}) =>{
          <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + ""} >
            <a href={href} className="flex justify-between items-center w-full text-white">
              {child}
            </a>
          </li>
        })
      }

</ul>

      
    </div>
  </div>
</footer>
    );
};

export default Footer;