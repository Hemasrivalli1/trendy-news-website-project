import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer(){
    return (
        <footer className="siteFooter">
            <div className="container py-4">
                <div className="row align-items-center g-3">

                    <div className="col-md-6">
                        <h5 className="mb-2">Trendy News</h5>
                        <p className="mb-0 footerText">
                            A project built with React,routing,API data and Botstrap styling.
                        </p>
                    </div>
                    <div className="col-md-6 text-md-end footerLinks">
                        <NavLink to="/" className="footerLink me-3">Home</NavLink>
                        <NavLink to="/news" className="footerLink me-3">News</NavLink>
                        <NavLink to="/about" className="footerLink">About</NavLink>
                        <NavLink to="/contact" className="footerLink">Contact</NavLink>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;