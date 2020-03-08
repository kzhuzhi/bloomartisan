import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div id="about">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 about-img"> </div>
                        <div className="col-xs-12 col-md-3 col-md-offset-1">
                            <div className="about-text">
                                <div className="section-title">
                                    <h2>Find Us</h2>
                                </div>
                                <p>Block 999 Yishun #01-01</p>
                                <p>Singapore 753001</p>
                                <p><a href="https://www.google.com.sg/maps/place/Northpoint+City/@1.4279686,103.8342265,17z/data=!3m2!4b1!5s0x31da146fa6f1f141:0xaa7671850a1fbee0!4m5!3m4!1s0x31da1536e4fe14f5:0xa09b38053717b429!8m2!3d1.4279686!4d103.8364152" target="_blank">Google Map</a></p>
                                <br></br>
                                <h5>Operating Hours:</h5>
                                <p>Mon-Thurs: 10:00 AM - 10:00 PM</p>
                                <p>Fri-Sun: 10:00 AM - 10:00 PM</p>
                                <br></br>
                                <h5>Getting Here:</h5>
                                <p>Nearest MRT: Yishun (North-South Line)</p>
                                <p>Bus: 66, 69, 190</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default About;