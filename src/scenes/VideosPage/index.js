import React, { Component } from 'react';
import CounterIncrementer from '../../components/CounterIncrementer';

class VideosPage extends Component {
    render() {
        return (
            <div>
                This is a videos page with title {this.props.title}.
                <CounterIncrementer onIncrement={console.log.bind(null, 'Counter is:')}/>
            </div>
        ); 
    }
}

export default VideosPage;