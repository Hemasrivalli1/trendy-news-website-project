import React from 'react';
import { NavLink,useNavigate } from "react-router-dom";

function SiteNavbar(){
    const navigate = useNavigate();
    return(
        <nav className="navbar navbar-expand-lg navbar-dark siteNavbar sticky-top">

            <div className="container">
                <NavLink to="/" className="navbar-brand fw-bold brandText">
                Trendind News</NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>

                         <li className="nav-item">
                            <NavLink to="/news" className="nav-link">News</NavLink>
                        </li>

                         <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>

                         <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                        <li className="nav-item ms-lg-3">
                         <button className="btn navCta" onClick={()=> navigate("/news")}>Explore News</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default SiteNavbar;