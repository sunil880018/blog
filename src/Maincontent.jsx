import React from "react-dom";
import "./index.css";
import Data from "./Data";
import {PData} from "./Data";
import {Link,Route} from "react-router-dom";
import AboutContent from "./AboutContent";
const Maincontent = () =>{
    return (
       <>
         <main className="main">
             <div className="main-content">
             <Route exact path="/AboutContent/" component={AboutContent}/>
             {
                 Data.map((val) =>{
                     return (
                        <div>
                        <Link to={'/AboutContent/' + val._id}>
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
export default Maincontent;