import React from 'react';
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">MY Hotel
                    {/* <img src="logo.png" alt="Hotel Booking Logo" /> */}
                    <p>elit. Id odit
                        ullam iste repellat consequatur<br></br> libero reiciendis, blanditiis
                        accusantium.</p>
                </div>
                {/* <div className='links'> */}
                <div className="footer-links">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/rooms">Rooms</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <ul>
                        <li><a href="#"><FaTwitter /></a></li>
                        <li><a href="#"><FaFacebook /></a></li>
                        <li><a href="#"><FaInstagram /></a></li>
                        <li><a href="#"><FaWhatsapp /></a></li>
                    </ul>
                </div>
                {/* </div> */}
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Hotel Booking. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
