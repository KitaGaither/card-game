import React, { Component } from 'react';
import Header from './header';
import Game from './game';
import About from './about';
import Contact from './contact';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
        const GamePage = () => {
            return (
                <Game />
            );
        };
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path='/#game' component={GamePage} />
                    <Route exact path='/#about' component={About} />
                    <Route exact path='/#contact' component={Contact} />
                    <Redirect to='/#game' />
                </Switch>
            </div>
        );
    }
}
export default Main;