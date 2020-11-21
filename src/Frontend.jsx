import React from "react-dom";
import "./index.css";
import {Link,Route} from "react-router-dom";
import { PData,FrontentData } from "./Data";
const Frontend = () =>{
    console.log(PData);
    return (
       <>
         <main className="main">
             <div className="main-content">
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

         </main>
       </>
    );
}
export default Frontend;