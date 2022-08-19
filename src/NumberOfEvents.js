import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        infoText: ''
    };
    
    handleInputChanged = (event) => {
        if (event.target.value <= 0 || event.target.value > 32) {
            this.setState({
                renderNumber: event.target.value,
                infoText: 'Please enter a number between 1 and 32'
            })
        } else {
            this.setState({
                renderNumber: event.target.value,
                infoText: ''
            });
        }
        //Error saying this beloew was not a function, but inoText works with or without it
       // this.props.updateEvents(undefined, event.target.value);
    }

    constructor() {
        super();
        this.state = {
            renderNumber: 32,
            errorText: ''
        }
    }

    render() {
        const { renderNumber } = this.state;

        return (
            <div className="number-of-events">
                <p className="input-label">Number of Events:</p>
                
                <input id="render-number" type="number" className="render-number" value={renderNumber} onChange={this.handleInputChanged}></input>
                <div>
                 <ErrorAlert text={this.state.infoText} />
                </div>
            </div>
        );
    }
}

export default NumberOfEvents;