import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        return (
            <div id="gallery">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-6 col-md-3">
                            <div className="gallery-item"> <img src="img/gallery/4.JPG" className="img-responsive" alt="" /></div>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <div className="gallery-item"> <img src="img/gallery/2.JPG" className="img-responsive" alt="" /></div>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <div className="gallery-item"> <img src="img/gallery/3.JPG" className="img-responsive" alt="" /></div>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <div className="gallery-item"> <img src="img/gallery/1.JPG" className="img-responsive" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Gallery;