import React, { Component } from 'react';
import HomePage from './scenes/HomePage';
import VideosPage from './scenes/VideosPage';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const HeaderLink = ({ target, name }) => (
    <Link to={target} className="button">{name}</Link>
);

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <header>
                        <HeaderLink target="/" name="Home"/>
                        <HeaderLink target="/videos" name="Videos"/>
                    </header>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/videos" component={VideosPage} />
                </div>
            </Router>
        );
    }

}

export default App;