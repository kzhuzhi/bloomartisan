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
                        <div className="col-xs-12 col-sm-6">
                            <div className="signatures-item">
                                <h3>Butter Milk Waffle</h3>
                                <img src="img/gallery/2.jpg" className="img-responsive" alt="" />
                                <p>Simple yet delicious homemade waffle made with real buttermilk, giving it that rich buttery flavour. Light and crispy on the outside, soft and tender on the inside. Pair it with a scoop of our homemade gelato for the best experience.</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div className="signatures-item">
                                <h3>Gelato</h3>
                                <img src="img/gallery/3.jpg" className="img-responsive" alt="" />
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