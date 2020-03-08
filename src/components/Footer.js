import React from 'react'

const Footer = () => {

    return (
        <footer className="text-center container">
            <div className="container">
                © {new Date().getFullYear()} Copyright:
            <a target="blank" href="http://dverybest.dx.am/">
                    DveryBest
            </a>
            </div>
        </footer>
    )
}
export default Footer;