import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import Card from './Ui/Card';

const AvailablePlayers = ({players, setCoin, coin, selectedPlayers, setSelectedPlayers}) => {
    // console.log(players, 'players');
     
    return (
        <div>

            
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                 {players.map((player, index)=> {
                    // console.log(player);
                    return (
                     <Card key={index} player={player} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card>
                    );                    
                })}
               </div>

    </div>
    );
};
  

export default AvailablePlayers;