import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div id="about" className="text-center">
                <div className="container">
                    <div className="section-title">
                        <h2>about</h2>
                    </div>
                    <p>We are a cosy and homely cafe in Singapore committed to offering affordable, handcrafted gelatos, bakes and beverages that can be enjoyed by people from all walks of life. 
                    100% homemade with our very own Bloom Artisan recipes, we believe in classic ol’ simplicity of reaping what you sow - which goes into the craft of our making and baking, using only top-quality ingredients and grinding it out ourselves.
                    Constantly keeping our community in mind, we aim to give back by doing what we can to support charities and non-profits, whether it’s through the more tangible donations or by simply just being an extra voice. 
                    <br/><br/>Feel free to ask our friendly staff about what we do!</p>
                </div>
            </div>
        );
    }
}
export default About;