import React, { Component } from 'react';


class Location extends Component {
  render() {
    return (
      <div id="findus">
        <div className="container-fluid">
          <div id="row">
            <div className="col-md-6">
              <div className="col-md-10 col-md-offset-1">
                <div className="section-title">
                  <h2>find us</h2>
                </div>
                <p>Blk 645 Yishun Street 61 #01-322</p>
                <p>Singapore 760645</p>
                <p><a href="https://www.google.com.sg/maps/place/Bloom+Artisan/@1.4219296,103.8360067,17z/data=!3m1!4b1!4m5!3m4!1s0x31da15d40dfa7a81:0xae439f254e544d25!8m2!3d1.4219296!4d103.8381954" target="_blank" rel="noopener noreferrer">Google Map</a></p>
                <br></br>
                <h5>operating hours</h5>
                <p>Mon, Wed & Thurs: 12noon till 10pm</p>
                <p>Fri: 12noon till 11pm</p>
                <p>Sat: 11am till 11pm</p>
                <p>Sun: 11am till 10pm</p>
                <p>(closed on Tues)</p>
                <br></br>
                <h5>contact information</h5>
                <p>bloomartisancafe@gmail.com</p>
                <p>+65 9889 0366</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="findus-img">
                <a href="https://www.google.com.sg/maps/place/Bloom+Artisan/@1.4219296,103.8360067,17z/data=!3m1!4b1!4m5!3m4!1s0x31da15d40dfa7a81:0xae439f254e544d25!8m2!3d1.4219296!4d103.8381954" target="_blank" rel="noopener noreferrer">
                  <img src="img/map.png" alt="..." />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Location;