import React from 'react';
import {Link, withRouter } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-sm navb mx-0" style={{background:'#6d0000'}}>
            <div>
                <Link to='/Best-Headlines' className="navbar-brand">Best-Headlines</Link>
            </div>
            {/* <!-- Toggler/collapsibe Button --> */}
            <button  className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span  className="navbar-toggler-icon"></span>
            </button>
            
            <div  className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul  className="navbar-nav">
                <li  className="nav-item">
                    <Link to='/Best-Headlines' className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/Best-Headlines/sports' className="nav-link">Sports</Link>
                </li>
                <li className="nav-item">
                    <Link to='/Best-Headlines/technology'  className="nav-link">Technology</Link>
                </li>
                <li className="nav-item">
                    <Link to='/Best-Headlines/entertainment' className="nav-link">Entertainment</Link>
                </li>
                <li className="nav-item">
                    <Link to='/Best-Headlines/health'  className="nav-link">Health</Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}
export default withRouter(NavBar);