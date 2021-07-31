import React, { Component } from 'react';
import Cards from '../shared/cards';

class Game extends Component {
    render() {
        return(
            <React.Fragment>
                <h1>Game Page!</h1>
                <Cards />
            </React.Fragment>
            
        );
    }
}
export default Game;