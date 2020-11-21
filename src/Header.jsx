import React from "react-dom";
import "./index.css";
import {Link} from "react-router-dom";
const Header = () =>{
    const onMenu = () =>{
        document.querySelector(".mobile-menu").classList.toggle("open-menu");
      }
    const href = "/";
    return (
       <>
         <header className="header">
            <div className="mobile-logo">
                <div className="logo"><Link to ="/"><i className="fas fa-code"></i></Link></div>
                <p className="bar" onClick={onMenu}><i class="fas fa-bars"></i></p>
            </div>
            <div className="menu">
                <div>
                <Link to ="/">Home</Link>
                </div>
                <div>
                <Link to="/frontent/">Frontend</Link>
                </div>
                <div>
                <Link to ="/">Backend</Link>
                </div>
                <div>
                <Link to ="/">API</Link>
                </div>
                <div>
                <Link to ="/">About Us</Link>
                </div>
            </div>

            <div className="input">
               <input type="text" name ="search" placeholder="Search..."/>
               <button>Search</button>
            </div>
            <article className="mobile-menu">
            <section className="list">
                <div>
                <Link to ="/">Home</Link>
                </div>
                <div>
                <Link to="/frontent/">Frontend</Link>
                </div>
                <div>
                <Link to ="/">Backend</Link>
                </div>
                <div>
                <Link to ="/">API</Link>
                </div>
                <div>
                <Link to ="/">About Us</Link>
                </div>
            </section>
        </article>
         </header>
       </>
    );
}
export default Header;