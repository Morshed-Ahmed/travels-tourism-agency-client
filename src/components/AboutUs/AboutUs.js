import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <div className="row container">

                <div className="col-6">
                    <img className="img-fluid mt-5 ms-3" src={'https://i.ibb.co/9tsbMm7/about-1-bcfbc984.png'} alt="" />
                </div>
                <div className="col-6">
                    <h6 className="mt-5">About TourX</h6>
                    <h4>The Best Travel Agency Company.</h4>
                    <p>Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris. Nunc nec ornare nisi, vel elementum est. Proin malesuada venenatis ex, eu fringilla justo scelerisque sit amet. Sed fringilla nec purus non venenatis. Aliquam nec turpis pharetra, bibendum lorem in, sollicitudin nibh. Nulla sit amet lacus diam.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;