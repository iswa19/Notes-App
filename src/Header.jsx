import React from "react";
import logo from "./Images/Color logo - no background.png";

const Header = () =>{
    return(
        <>
           <div className="header">
              <img src={logo} alt="logo" height={50} width={100}/>
           </div>
        </>
    )
};

export default Header;
