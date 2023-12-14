import React from "react";

const Footer = () =>{

    const d = new Date();
    let year = d.getFullYear();

    return (
        <>
            <footer className="footer">
                  <p>Copyright © {year}</p>
            </footer>
        </>
    );
};

export default Footer;