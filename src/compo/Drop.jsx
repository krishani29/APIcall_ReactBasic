import React, { Component } from 'react';

class Drop extends Component {
    constructor() {
        super();
        this.state = {
            DDL1: [],
            DDL2: [],
            selectDDL: ''
        }
    }
    componentDidMount() {
        this.setState({
            DDL1: [
                { name: 'Colors', DDL2: ['Red', 'black', "blue"] },
                { name: 'Sports', DDL2: ['cricket', 'hockey', "tennis"] },
                { name: 'Fruits', DDL2: ['banana', 'apple', "orangee"] },
                { name: 'State', DDL2: ['Guj', 'PB', "MH"] },
            ]
        })
    }
    selectChange(e) {
        this.setState({ selectDDL: e.target.value });
        this.setState({ DDL2: this.state.DDL1.find(x => x.name === e.target.value).DDL2 })
    }
    render() {
        return (

            <div className="container">
                <h1>Dependent Dropdown</h1>

                <select value={this.state.selectDDL} onChange={this.selectChange.bind(this)}>
                    <option>--Select--</option>
                    {this.state.DDL1.map(x => {
                        return (<option>{x.name}</option>)
                    })}
                </select>

                <select className="mx-4">
                    <option selected disabled>------</option>
                    {
                        this.state.DDL2.map(x => {
                            return <option>{x}</option>
                        })
                    }


                </select><hr/>

            </div>


        );
    }
}

export default Drop;