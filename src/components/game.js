import React, { Component } from 'react';
import Cards from '../shared/cards';

class Game extends Component {
    render() {
        return(
            <div id="game">
                <h1>Matching Game</h1>
                <Cards />
            </div>
            
        );
    }
}
export default Game;