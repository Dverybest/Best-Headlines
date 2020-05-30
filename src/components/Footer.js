import React from 'react'

const Footer = () => {

    return (
        <footer className="text-center d-flex justify-content-center align-items-center">
            <p className="text-center my-0">  © {new Date().getFullYear()} Copyright - 
                <a target="blank" href="http://dverybest.dx.am/">DveryBest</a>
            </p>
        </footer>
    )
}
export default Footer;