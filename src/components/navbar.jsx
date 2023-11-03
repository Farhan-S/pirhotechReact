import React, { useState } from "react";
import logo from "../images/whitelogo.png";
import { NavLink } from "react-router-dom";
import profilePic from "../images/profilePic.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <div className="nav-mid">
                <div className="company-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu">
                    <ul className="mainMenu">
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
                                Pricing <span>{" />"}</span>
                                <ul className="subMenu">
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
                        <li className="profileBtn">
                            <button className="userButton" onClick={toggleMenu}><img src={profilePic} alt="profile" /></button>
                            {menuOpen && (
                                <ul className="userDropMenu">
                                    <li><a href="/" onClick={toggleMenu}>Profile</a></li>
                                    <li>
                                        <NavLink to="myprojects" className="myProject" onClick={toggleMenu}>My Projects</NavLink>

                                    </li>
                                    <li><a href="/" onClick={toggleMenu}>Settings</a></li>
                                    <li><a href="/" onClick={toggleMenu}>LogOut</a></li>
                                </ul>
                            )}

                        </li>
                    </ul>
                </div>
            </div>




        </nav>



    );
}

export default Navbar;