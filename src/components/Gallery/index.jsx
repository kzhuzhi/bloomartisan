import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        return (
            <div id="gallery">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-6 col-md-3">
                            <div className="gallery-item"> <img src="img/gallery/bloom-website-small-image-cones.jpg" className="img-responsive" alt="" /></div>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <div className="gallery-item"> <img src="img/gallery/bloom-website-small-image-scoop.jpg" className="img-responsive" alt="" /></div>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <div className="gallery-item"> <img src="img/gallery/bloom-website-small-image-coffee.jpg" className="img-responsive" alt="" /></div>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <div className="gallery-item"> <img src="img/gallery/bloom-website-small-image-waffle.jpg" className="img-responsive" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Gallery;