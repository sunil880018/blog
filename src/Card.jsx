import React from "react";

const Card = (props) =>{
    return(
        <>
                <div>
                    <img src={props.imgsrc} alt="img"/>
                    <h4>{props.desc}</h4>
                    <h3>{props.p}</h3>
                    <h5>{props.time}</h5>
                </div>
        </>
    )
}
export default Card;