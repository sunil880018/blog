import React from "react-dom";
import "./index.css";
import {Link} from "react-router-dom";
const Header = () =>{
    const openMenu = () =>{
        document.querySelector('.mobile-menu').classList.add("open");
    }
    const closeMenu = () =>{
        document.querySelector('.mobile-menu').classList.remove("open");
    }
    const href = "/";
    return (
       <>
         <header className="header"  id="cursor_top">
            <div className="mobile-logo">
                <div className="logo"><Link to ="/"><i className="fas fa-code"></i></Link></div>
                <p className="bar" onClick={openMenu}><i class="fas fa-bars"></i></p>
            </div>
            <div className="menu">
                <div>
                <Link to ="/sunilblog/">Home</Link>
                </div>
                <div>
                <Link to="/frontent/">Frontend</Link>
                </div>
                <div>
                <Link to ="/sunilblog/">Backend</Link>
                </div>
                <div>
                <Link to ="/sunilblog/">API</Link>
                </div>
                <div>
                <Link to ="/sunilblog/">About us</Link>
                </div>
            </div>

            <div className="input">
               <input type="text" name ="search" placeholder="Search..."/>
               <button>Search</button>
            </div>
            <article className="mobile-menu">
            <section className="list">
                <p className="menu-head">MENU <span onClick={closeMenu}>X</span></p>
                <div>
                <Link to ="/sunilblog/">Home</Link>
                </div>
                <div>
                <Link to="/frontent/">Frontend</Link>
                </div>
                <div>
                <Link to ="/sunilblog/">Backend</Link>
                </div>
                <div>
                <Link to ="/sunilblog/">API</Link>
                </div>
                <div>
                <Link to ="/sunilblog/">About us</Link>
                </div>
                <div>
                    <input type="text" placeholder="Search"/><br/>
                </div>
                <div>
                    <button>Search</button>
                </div>
            </section>
        </article>
         </header>
       </>
    );
}
export default Header;