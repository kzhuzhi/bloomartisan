import React, { Component } from 'react';

class SignatureDishes extends Component {
    render() {
        return (
            <div id="signatures" className="text-center">
                <div className="container">
                    <div className="section-title">
                        <h2>signatures</h2>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-5">
                            <div className="signatures-item">
                                <img src="img/gallery/feature_waffle.png" className="img-responsive" alt="" />
                                <br></br>
                                <h3>BROWN BUTTER SOURDOUGH WAFFLE</h3>
                                <p>A simple yet delicious sourdough waffle made from scratch with brown butter that lends rich nutty notes, enhancing the savoury flavour. Light and crispy on the outside while soft and tender on the inside, pair it with a scoop of our homemade gelato for the perfect combination.</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-2"> </div>
                        
                        <div className="col-xs-12 col-sm-5">
                            <div className="signatures-item">
                                <img src="img/gallery/feature_cone.png" className="img-responsive" alt="" />
                                <br></br>
                                <h3>GELATO</h3>
                                <p>100% homemade gelato, made fresh everyday for your enjoyment. Our gelato comes in various curated flavours to suit all kinds of cravings that you have! Pair it with our homemade baked goods for that complete dessert experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default SignatureDishes;