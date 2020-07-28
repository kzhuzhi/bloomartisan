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
                                <h3 className="menu-section-title">GELATO</h3>
                                <div className="menu-item">
                                    <div className="menu-item-name">single scoop</div>
                                    <div className="menu-item-price"> 3.5 </div>
                                    <div className="menu-item-name">single premium</div>
                                    <div className="menu-item-price"> 4.2 </div>
                                    <div className="menu-item-name">double scoop</div>
                                    <div className="menu-item-price"> 6 </div>
                                    <div className="menu-item-name">double premium</div>
                                    <div className="menu-item-price"> 6.7 </div>
                                    <div className="menu-item-name">16oz classic pint</div>
                                    <div className="menu-item-price"> 12</div>
                                    <div className="menu-item-name">26oz classic pint</div>
                                    <div className="menu-item-price"> 18 </div>
                                    <div className="menu-item-name">16oz premium pint</div>
                                    <div className="menu-item-price"> 16 </div>
                                    <div className="menu-item-name">26oz premium pint</div>
                                    <div className="menu-item-price"> 23 </div>
                                </div>
                                <br />
                                <h3 className="menu-section-title">WAFFLE</h3>
                                <div className="menu-item">
                                    <div className="menu-item-name">browned butter waffle</div>
                                    <div className="menu-item-price"> 4 </div>
                                </div>
                                <br />
                                <h3 className="menu-section-title">MILKSHAKE</h3>
                                <div className="menu-item">
                                    <div className="menu-item-name">regular flavour</div>
                                    <div className="menu-item-price"> 6 </div>
                                    <div className="menu-item-name">premium flavour</div>
                                    <div className="menu-item-price"> 6.7 </div>
                                    <div className="menu-item-name">additional regular scoop</div>
                                    <div className="menu-item-price"> 2 </div>
                                    <div className="menu-item-name">additional premium scoop</div>
                                    <div className="menu-item-price"> 2.7 </div>
                                </div>
                                <br />
                                <h3 className="menu-section-title">BAKES (subject to availability)</h3>
                            </div>
                            <br />
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div className="menu-section">
                                <h3 className="menu-section-title">COFFEE</h3>
                                <div className="menu-item">
                                    <div className="menu-item-name">espresso</div>
                                    <div className="menu-item-price"> 3 </div>
                                    <div className="menu-item-name">americano</div>
                                    <div className="menu-item-price"> 3 </div>
                                    <div className="menu-item-name">latte</div>
                                    <div className="menu-item-price"> 4 </div>
                                    <div className="menu-item-name">cappuccino</div>
                                    <div className="menu-item-price"> 4.5 </div>
                                    <div className="menu-item-name">affogato</div>
                                    <div className="menu-item-price"> 6 </div>
                                    <div className="menu-item-name">iced</div>
                                    <div className="menu-item-price"> +1 </div>
                                </div>
                                <br />
                                <h3 className="menu-section-title">TEA</h3>
                                <div className="menu-item">
                                    <div className="menu-item-name">english breakfast</div>
                                    <div className="menu-item-price"> 4 </div>
                                    <div className="menu-item-name">earl grey</div>
                                    <div className="menu-item-price"> 4 </div>
                                    <div className="menu-item-name">chamomile</div>
                                    <div className="menu-item-price"> 4 </div>
                                    <div className="menu-item-name">peppermint</div>
                                    <div className="menu-item-price"> 4 </div>
                                    <div className="menu-item-name">green tea</div>
                                    <div className="menu-item-price"> 4 </div>
                                </div>
                                <br />
                                <h3 className="menu-section-title">COOLER (weekend exclusive)</h3>
                                <div className="menu-item">
                                    <div className="menu-item-name">iced shaken earl grey lavender</div>
                                    <div className="menu-item-price"> 5 </div>
                                    <div className="menu-item-name">iced shaken coconut mint</div>
                                    <div className="menu-item-price"> 5 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>*menu subject to changes</div>
                </div>
            </div>

        );
    }
}
export default Menu;