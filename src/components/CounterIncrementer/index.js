import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CounterIncrementer extends Component {
    
    state = {   
        counter: 0
    };

    static defaultProps = {
        onIncrement: () => {}
    }

    increment(event) {
        this.setState({ counter: ++this.state.counter });
        this.props.onIncrement(this.state.counter);
    }

    render() { 
        return (
            <button onClick={() => this.increment()}>Counter: {this.state.counter}</button>
        );
    }
}

CounterIncrementer.propTypes = {
    onIncrement: PropTypes.func
}

export default CounterIncrementer;