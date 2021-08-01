import React, { Component } from 'react';

class About extends Component {
    render() {
        return(
            <React.Fragment>
            <h1>About The Game</h1>
            <div id="about" className="about-div">
                <h3>Game Rules</h3>
                <p>The object of this game is to find matching cards. Flip over one card and randomly select another card. If the cards match, then you get a point and those 
                    two cards are removed from the deck. If you turn over two cards and they do not match, the cards will be turned over and you have to try again. This is a 
                    super simple game, but it really test's your memory. Don't forget to have fun! 
                </p>
            </div>
            </React.Fragment>
        );
    }
}
export default About;