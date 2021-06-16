import axios from 'axios';
import React, { useEffect, useState } from 'react';

function MultipleApi(props) {
    const [playerName, setPlayerName] = useState([]);
    const [playerPic, setPlayerPic] = useState([]);
    const [num, setNum] = useState();
    const id = 12
    const picvar = "stephen"

    const fetchData = () => {
        const playerAPI = `https://www.balldontlie.io/api/v1/players/${id}`;
        const playerPic = `https://nba-players.herokuapp.com/players/${picvar}`;

        const getNBAPlayer = axios.get(playerAPI)
        const getPlayerPic = axios.get(playerPic)
        
        axios.all([getNBAPlayer, getPlayerPic]).then(
            axios.spread((...allData) => {
                const allDataPlayer = [allData[0].data.first_name, "   " ,allData[0].data.last_name]
                const getNBAPlayerPic = allData[1].config.url;

                setPlayerName(allDataPlayer);
                console.log(allDataPlayer)
                setPlayerPic(getNBAPlayerPic);
            })
        )
    }

    useEffect(() => {
        fetchData()
    },[])
  
    return (
        <div><hr/>
            <h1>Multiple API call</h1>

            {/* <input type="number" onChange={(event) => {
                    setNum(event.target.value);
                }} />
            <h2> you choose {num} </h2>  */}

            <h3>Player Name: {playerName} </h3>
            <img src={playerPic} />

        </div>
    );
}

export default MultipleApi;