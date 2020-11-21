import React from "react-dom";
import "./index.css";
const Footer = () =>{
    const href = "#";
    return (
       <>
         <footer>
           <div className="footer-about">
               <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
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