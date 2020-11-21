import React from "react-dom";
import Footer from "./Footer";
import Header from "./Header";
import Homescreen from "./Homescreen";
import {Route} from "react-router-dom";
import AboutContent from "./AboutContent";
import PopularContent from "./PopularContent";
import Frontend from "./Frontend";
import AboutFrontend from "./AboutFrontend";
const App = () =>{
    return (
       <>
         <Header/>
         <Route path="/" exact={true} component={Homescreen} />
         <Route path="/AboutContent/:id" exact={true} component={AboutContent} />
         <Route path="/PopularContent/:id" exact={true} component={PopularContent} />
         <Route path="/frontent/" exact={true} component={Frontend} />
         <Route path="/Aboutfront/:id" exact={true} component = {AboutFrontend}/>
         <Footer/>
       </>
    );
}
export default App;