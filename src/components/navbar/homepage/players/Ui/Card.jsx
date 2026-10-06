import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const MAX_PLAYERS = 6;

const Card = ({ player, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
  // Check directly if player is already selected in parent state
  const isSelected = selectedPlayers.some((p) => p.playerName === player.playerName);

  const handleChoosePlayer = () => {
    // 1. Check max player limit
    if (selectedPlayers.length >= MAX_PLAYERS) {
      toast.error(`You cannot select more than ${MAX_PLAYERS} players!`);
      return;
    }

    // 2. Check duplicate selection
    if (isSelected) {
      toast.error(`${player.playerName} is already selected!`);
      return;
    }

    // 3. Check coin balance
    if (coin < player.price) {
      toast.error('Not enough coins to purchase this player!');
      return;
    }

    // Deduct coins & add player
    setCoin((prevCoin) => prevCoin - player.price);
    setSelectedPlayers((prev) => [...prev, player]);
    toast.success(`${player.playerName} selected successfully!`);
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-sm border border-gray-200">
        <figure className="px-4 pt-4">
          <img
            src={player.playerImg}
            alt={player.playerName}
            className="rounded-xl h-48 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title gap-3">
            <FaUser />
            {player.playerName}
          </h2>
          <div className="flex justify-between gap-2 items-center">
            <div className="flex gap-2 items-center text-gray-500">
              <FaFlag />
              <p>{player.playerCountry}</p>
            </div>
            <button className="btn btn-sm btn-soft">{player.playerType}</button>
          </div>
          <div className="divider my-1"></div>

          <h2 className="font-bold">Rating ({player.rating})</h2>

          <div className="flex justify-between gap-4 text-sm font-semibold text-gray-600">
            <p>{player.battingStyle}</p>
            <p className="text-right">{player.bowlingStyle}</p>
          </div>

          <div className="card-actions justify-between items-center mt-2">
            <p className="font-bold">Price: ${player.price?.toLocaleString()}</p>
            <button
              className={`btn btn-sm ${isSelected ? 'btn-disabled' : 'bg-[#E7FE29] text-black'}`}
              onClick={handleChoosePlayer}
              disabled={isSelected}
            >
              {isSelected ? 'Selected' : 'Choose Player'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;