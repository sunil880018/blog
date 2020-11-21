import React from "react";
import {PData} from "./Data";
import {Link} from "react-router-dom";

const PopularContent = (props) =>{
    const val = PData.find(x => x._id === props.match.params.id);
    console.log(val.image);
     return (
        <div className="aboutContent">
               <p className="Back"><Link to ="/"><i className="fas fa-chevron-left"></i> Back</Link></p>
           <div>
               <img src={val.image} alt="img"/>
               <p>{val.desc}</p>
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
        </div>
     )
}
export default PopularContent;