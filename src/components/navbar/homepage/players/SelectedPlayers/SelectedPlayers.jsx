import React from 'react';

import SelectedCard from '../Ui/SelectedCard';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, setCoin, coin}) => {
    console.log(selectedPlayers, 'selected players');

    const handleDeleteSelectedPlayer = (player, e) => {
        console.log(player);
        e.preventDefault();
        const filteredPlayers = selectedPlayers.filter((selectedPlayer) => selectedPlayer.playerName !== player.playerName);
        console.log(filteredPlayers);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price);
    }
    return (
        <div>
            <div className='space-y-5'>
                { selectedPlayers.length === 0 ?
                <div className='h-[400px] flex items-center justify-center flex-col gap-4'>
                    <h2 className='font-semibold text-xl'>No Players Selected Yet</h2>
                    <p>Go to Available tab to Select Player</p>
                    </div>
               : selectedPlayers.map ((player, index) => {
                  return ( 
                <SelectedCard key={index} player={player} handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}></SelectedCard>
               )}
                )
            }
            </div>
        </div>
    );
};

export default SelectedPlayers;