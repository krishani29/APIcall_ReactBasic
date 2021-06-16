import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import axios from 'axios';

const Test = () => {

    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();


    useEffect(() => {
        async function getData(){
            const res = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${num}`
                );
        console.log(res.data);
        setName(res.data.name);
        setMoves(res.data.moves.length)
      }
      getData();
    })

    return (
        <div>
            <h1>Let's try API now</h1>

            <select value={num}
                onChange={(event) => {
                    setNum(event.target.value);
                }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>

            </select>
            <h2> you choose {num} </h2>
            <h3> The pokemon is {name} </h3>
            <h3> {name} has {moves} moves </h3>
            <h1>Let's try API now</h1>

           
            
          
        </div>
    );
}


export default Test