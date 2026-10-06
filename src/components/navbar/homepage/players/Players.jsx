import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const MAX_PLAYERS = 12;

const Players = ({ playersPromise, setCoin, coin }) => {

    const players = use(playersPromise);
    // console.log(players);

    const [selectedType, setSelectedType] = useState('available');
    // console.log(selectedType);

    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div className='container mx-auto my-[60px] PX-4'>

            <div className='flex justify-between gap-4 items-center mb-[20px]'>
                <h2 className="font-bold text-3xl">
                    {selectedType === 'available'
                        ? 'Available Players'
                        : `Selected Players (${selectedPlayers.length}/${MAX_PLAYERS})`}
                </h2>
                <div>
                    <button
                        onClick={() => setSelectedType('available')}
                        className={`btn ${selectedType === 'available' ? 'bg-[#E7FE29]' : ''} rounded-r-none rounded-l-xl`}>Available</button>
                    <button
                        onClick={() => setSelectedType('selected')}
                        className={`btn ${selectedType === 'selected' ? 'bg-[#E7FE29]' : ''} rounded-r-xl rounded-l-none`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>

            {selectedType === 'available' ? (<AvailablePlayers players={players} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></AvailablePlayers>) : (<SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoin={setCoin} coin={coin}></SelectedPlayers>)}
        </div>
    );
};

export default Players;