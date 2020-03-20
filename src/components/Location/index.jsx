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
                <p><a href="https://www.google.com.sg/maps/place/Block+645+HDB+Yishun/@1.421977,103.8362123,17z/data=!3m1!4b1!4m5!3m4!1s0x31da146c9af5f647:0x2acc29152f904e8a!8m2!3d1.421977!4d103.838401" target="_blank">Google Map</a></p>
                <br></br>
                <h5>Operating Hours:</h5>
                <p>Mon-Sun: 11:00 AM - 10:00 PM</p>
                <br></br>
                <h5>Getting Here:</h5>
                <p>Nearest MRT: Yishun (North-South Line)</p>
                <p>Bus: 66, 69, 190</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="findus-img"><img src="img/map.png" alt="..." /></div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Location;