import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
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
        <MovieContext.Provider>

        </MovieContext.Provider>
    );
}

  