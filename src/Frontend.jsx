import React from "react-dom";
import "./index.css";
import {Link} from "react-router-dom";
import { PData,FrontentData } from "./Data";
const Frontend = () =>{

    const closeMenu = () =>{
        document.querySelector('.mobile-menu').classList.remove("open");
    }
    
    console.log(PData);
    return (
       <>
         <main className="main">
             <div className="main-content" onClick={closeMenu}>
             {
                 FrontentData.map((val) =>{
                     return (
                        <div>
                        <Link to={'/Aboutfront/' + val._id}>
                            <img src={process.env.PUBLIC_URL + val.image} alt="img"/>
                        </Link>
                             <h4>{val.desc}</h4>
                             <p>{val.para}</p>
                             <h5>{val.time}</h5>
                        </div>
                         )
                 })
             }
             </div>

             <div className="side-content">
                   <h2>Most Popular Right Now</h2>
                   
              {
                 PData.map((val) =>{
                     return (
                        <div>
                        <Link to={'/PopularContent/' + val._id}>
                            <img src={process.env.PUBLIC_URL + val.image} alt="img"/>
                        </Link>
                             <p>{val.desc}</p>
                        </div>
                         )
                 })
              }

             </div>
             <div className="top">
               <a href="#cursor_top"><i class="fas fa-angle-up"></i></a>
            </div>
         </main>
       </>
    );
}
export default Frontend;