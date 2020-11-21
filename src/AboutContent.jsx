import React from "react";
import Data from "./Data";
import {Link} from "react-router-dom";


const AboutContent = (props) =>{
    const value = Data.find(x => x._id === props.match.params.id);
    console.log(process.env.PUBLIC_URL + value.image);
     return (
        <div className="aboutContent">
               <p><Link to ="/sunilblog/" style={{color:"#262626"}}><i className="fas fa-chevron-left"></i> Back</Link></p>
           <div>
               <img src= {process.env.PUBLIC_URL + value.image} alt="img"/>
               <h4>{value.desc}</h4>
               <p>{value.para}</p>
               <h5>{value.time}</h5>
           </div>
           <div>
              <form method="Post" action="">
              <h2>Leave a Comment...</h2>
                 <p>Comment</p>
                 <textarea cols="5" rows="7"></textarea>
                 <p>Name</p>
                 <input type="text" name="name"/>
                 <p>Email</p>
                  <input type="email" name="email"/><br/>
                  <button className="combtn">Submit</button>
              </form>
           </div>
           <div className="User-comment">
                <div>
                   <p><i class="fas fa-user"></i></p>
                </div>
                <div>
                   <p>Rahul Mathur</p>
                   <p style={{padding:"0px 0px 15px 0px"}}>2 , Dec 2019 5:23 AM</p>
                   <p>Please Launch Web Development Course</p>
                </div>
           </div>
        </div>
     )
}
export default AboutContent;