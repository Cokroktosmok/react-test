import React, { Component } from 'react';
import CounterIncrementer from '../../components/CounterIncrementer';

class HomePage extends Component {
    render() {
        return (
            <div>
                This is a home page with title {this.props.title}.
                <CounterIncrementer onIncrement={console.log.bind(null, 'Counter is:')}/>
            </div>
        ); 
    }
}

export default HomePage;