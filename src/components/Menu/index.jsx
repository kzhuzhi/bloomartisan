import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div id="restaurant-menu">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>menu</h2>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="menu-section">
                                <h3 className="menu-section-title">breakfast & starters</h3>
                                <div className="menu-item">
                                    <div className="menu-item-name">tortellini skewers</div>
                                    <div className="menu-item-price"> $9 </div>
                                    <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
                                </div>
                                <div className="menu-item">
                                    <div className="menu-item-name">fried ravioli</div>
                                    <div className="menu-item-price"> $7 </div>
                                    <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
                                </div>
                                <div className="menu-item">
                                    <div className="menu-item-name">wild mushroom arancini</div>
                                    <div className="menu-item-price"> $9 </div>
                                    <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
                                </div>
                                <div className="menu-item">
                                    <div className="menu-item-name">mozzarella sticks</div>
                                    <div className="menu-item-price"> $10 </div>
                                    <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div className="menu-section">
                                <h3 className="menu-section-title">main course</h3>
                                <div className="menu-item">
                                    <div className="menu-item-name">roast stuffed chicken</div>
                                    <div className="menu-item-price"> $18 </div>
                                    <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
                                </div>
                                <div className="menu-item">
                                    <div className="menu-item-name">chicken & mushroom pasta</div>
                                    <div className="menu-item-price"> $20 </div>
                                    <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
                                </div>
                                <div className="menu-item">
                                    <div className="menu-item-name">beef lasagne</div>
                                    <div className="menu-item-price"> $14 </div>
                                    <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
                                </div>
                                <div className="menu-item">
                                    <div className="menu-item-name">chicken goujons</div>
                                    <div className="menu-item-price"> $19 </div>
                                    <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Menu;