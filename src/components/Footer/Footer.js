import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-style mt-5">
            <div className="row container py-5">


                <div className="col-6 footer-card">
                    <img className="img-fluid footer-img" src={'https://i.ibb.co/k4gS9Lq/download.png'} alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid maxime aut ut voluptate dolorum nisi ducimus ratione</p>
                </div>
                <div className="col-3 footer-card">
                    <h4>Contact Us</h4>
                    <small>+01852-1265122 <br />
                        +01852-1265122</small>
                    <small>info@example.com <br /> support@example.com</small>
                    <small>2752 Willison Street Eagan, United State</small>
                </div>
                <div className="col-3 footer-card">
                    <h4>Support</h4> <br />
                    <small>Contact Us</small><br />
                    <small>About Us</small><br />
                    <small>Destinations</small><br />
                    <small>Our Blogs</small><br />
                    <small>Package</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;