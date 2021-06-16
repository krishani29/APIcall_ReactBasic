import React, { useState } from 'react';
import Movie from './movie';

function Tut1(props) {
    const [movies, setMovies] = useState([
        {
            name: "ek tha tiger",
            price: "100$",
            id: 1
        },
        {
            name: "namastey london",
            price: "150$",
            id: 2
        },
        {
            name: "welcome",
            price: "120$",
            id: 3
        },
    ])
    return (

        <div className="container">
            <h1>State Management</h1>
          
            {movies.map(movie => (
                <Movie name={movie.name} price={movie.price} key={movie.id}/>
            ))}


        </div>
    );
}

export default Tut1;