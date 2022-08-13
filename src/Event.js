import React, { Component } from 'react';
class Event extends Component {

    state = { show: false };

    render() {
        const { event } = this.props;
        return (
            <div className="event">

            </div>
        ) 
    }
}

export default Event;