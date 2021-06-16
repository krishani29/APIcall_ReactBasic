import React, { Component } from 'react';

class ChildAPI extends Component {
    render() {
        return (
            <div>
                <h1>Data from Child</h1>
                <h3>Name : {this.props.name}</h3>
                <h3>Email: {this.props.Email}</h3>
                <img src={this.props.imgsrc} />
            </div>
        );
    }
}

export default ChildAPI;