import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
          console.log(res.data)
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map((person) => <li key={person.id}> <b>Name:</b> {person.name},<br/> <b>Website:</b> <a href={`https://www.${person.website}`}>{person.website}</a><br/><br/></li>)}
      </ul>
    )
  }
}

