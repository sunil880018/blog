import React from "react-dom";
import "./index.css";
const Footer = () =>{
    const href = "#";
    return (
       <>
         <footer>
           <div className="footer-about">
               <p>A full stack developer is a web developer or engineer who works with both the front and back ends of a website or application—meaning they can tackle projects that involve databases, building user-facing websites, or even work with clients during the planning phase of projects.</p>
               <br/>
               <h4>
                   &copy; copyright 2020 All Right reserved.
               </h4>
           </div>
           <div>
               <h3>Contact Us On : </h3>
               <a href={href}><i class="fab fa-facebook"></i></a>
               <a href={href}><i class="fab fa-instagram"></i></a>
               <a href={href}><i class="fab fa-linkedin-in"></i></a>
           </div>
         </footer>
       </>
    );
}
export default Footer;