import React from "react";
import {PData} from "./Data";
import {Link} from "react-router-dom";

const PopularContent = (props) =>{
   const closeMenu = () =>{
      document.querySelector('.mobile-menu').classList.remove("open");
  }

    const val = PData.find(x => x._id === props.match.params.id);
    console.log(val.image);
     return (
        <div className="aboutContent" onClick={closeMenu}>
               <p className="Back"><Link to ="/sunilblog/"><i className="fas fa-chevron-left"></i> Back</Link></p>
           <div>
               <img src={process.env.PUBLIC_URL + val.image} alt="img"/>
               <p>{val.desc}</p>
           </div>
           <div>
              <form method="Post" action="">
              <h2>Leave a Comment...</h2>
                 <p>Comment <span style={{color:"#ff0040"}}>*</span></p>
                 <textarea cols="5" rows="7"></textarea>
                 <p>Name <span style={{color:"#ff0040"}}>*</span></p>
                 <input type="text" name="name"/>
                 <p>Email <span style={{color:"#ff0040"}}>*</span></p>
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
                <div>
                   <i class="fas fa-reply"></i>
                </div>
           </div>
           </div>
        </div>
     )
}
export default PopularContent;