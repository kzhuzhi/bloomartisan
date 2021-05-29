import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav id="menu" className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><a href="#home" className="page-scroll">Home</a></li>
                            <li><a href="#about" className="page-scroll">About</a></li>
                            <li><a href="#signatures" className="page-scroll">Signatures</a></li>
                            <li><a href="#restaurant-menu" className="page-scroll">Menu</a></li>
                            <li><a href="#findus" className="page-scroll">Find Us</a></li>
                            <li><a href="https://bloomartisan.oddle.me/en_SG" target="_blank" rel="noopener noreferrer" className="page-scroll">Order Online</a></li>
                            
                        </ul>
                        <ul className="nav navbar-nav-right">
                            <ul>
                                <li><a href="https://www.instagram.com/bloomartisancafe/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                            </ul>   
                        </ul>
                        <ul className="nav navbar-nav-right">
                            <ul>
                                <li><a href="https://www.facebook.com/bloomartisancafe" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square"></i></a></li>
                            </ul>   
                        </ul>
                        
                    </div>
                </div>
            </nav>

        );
    }
}
export default Navbar;