import React, { Component } from 'react';

export default class Navbar extends Component {
    state = {
        loadedNavbar: false,
    }
    handleNavbarLoaded = () => {
        this.setState({ loadedNavbar: true })
    }

    render(){
        return(
        <div className={this.state.loadedNavbar ? 'nav fade_in' : 'hide'} onLoad={this.handleNavbarLoaded}>
            <div className="container">
                <h1 className="title">Ignacio Argel</h1>
            
            <span>
                <a
                    href="https://github.com/NachoArgel"
                    
                >
                    <img
                    width="30" height="30"
                    className="social-link social-github"
                    src="github.png"
                    alt="github"
                    />
                </a>
                <a
                    href="mailto:ignacioargel99@gmail.com"
                >
                    <img
                    width="30" height="20"
                    className="social-link social-gmail"
                    src="mail.png"
                    alt="gmail"
                    />
                </a>
            </span>
            </div>
        </div>   
    )
    };
};