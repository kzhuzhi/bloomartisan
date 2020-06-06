import React, { Component } from 'react';

class SignatureDishes extends Component {
    render() {
        return (
            <div id="signatures" className="text-center">
                <div className="container">
                    <div className="section-title">
                        <h2>our specials</h2>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-5">
                            <div className="signatures-item">
                                <img src="img/gallery/ice_cream_waffle.png" className="img-responsive" alt="" />
                                <br></br>
                                <h3>butter milk waffle</h3>
                                <p>Simple yet delicious homemade waffle made with real buttermilk, giving it that rich buttery flavour. Light and crispy on the outside, soft and tender on the inside. Pair it with a scoop of our homemade gelato for the best experience.</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-2"> </div>
                        
                        <div className="col-xs-12 col-sm-5">
                            <div className="signatures-item">
                                <img src="img/gallery/gelato_cone.png" className="img-responsive" alt="" />
                                <br></br>
                                <h3>gelato</h3>
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