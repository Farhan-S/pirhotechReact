import React from "react";
import logo from "../images/whitelogo.png";
import { NavLink } from "react-router-dom";


function Navbar() {
    return (
        <nav>
            <div className="nav-mid">
                <div className="company-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <NavLink to="/">
                                Home <span>{" />"}</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                About <span>{" />"}</span>
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to="/services">
                                Services <span>{" />"}</span>
                                <ul>
                                    <li>Web<span>{" />"}</span></li>
                                    <li>App<span>{" />"}</span></li>
                                    <li>SEO<span>{" />"}</span></li>
                                </ul>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">
                                Blog <span>{" />"}</span>
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to="contact">
                                Contact <span>{" />"}</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>




        </nav>



    );
}

export default Navbar;