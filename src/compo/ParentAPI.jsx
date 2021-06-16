import React, { Component } from 'react';
import ChildAPI from './ChildAPI';

class ParentAPI extends Component {
    state = {
        loading: true,
        person: null
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false })
        console.log(data.results[0]);
    }

    render() {
       
        return (
            <div>
                <h1>API Call From Parent</h1>
                {this.state.loading || !this.state.person ? (<div>Loading...</div>) :
                    (<div>
                        <h3 className="person">Name: {this.state.person.name.first} {this.state.person.name.last}</h3>
                        <h3 className="person">Gender:  {this.state.person.gender} </h3>
                        <h3 className="person">Email:  {this.state.person.email} </h3>
                        <h3 className="person">Phone No:  {this.state.person.phone} </h3>
                        <img src={this.state.person.picture.large} />

                        <hr />

                        <ChildAPI name={this.state.person.name.first} Email={this.state.person.email} imgsrc={this.state.person.picture.large}/>


                    </div>)}
                   
                  
            </div>
        );
    }
}

export default ParentAPI;
//  Email={this.state.person.email} imgsrc={this.state.person.picture.large}