import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const SelectedCard = ({ player, handleDeleteSelectedPlayer }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-base-100 rounded-xl shadow-sm border border-gray-200 my-3">
      <div className="flex items-center gap-4">
        {/* Player Image */}
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="w-16 h-16 rounded-xl object-cover border"
        />

        {/* Player Details */}
        <div>
          <h3 className="font-bold text-lg">{player.playerName}</h3>
          <p className="text-sm text-gray-500">{player.battingStyle || player.playerType}</p>
          <p className="text-sm font-semibold text-gray-700">
            Price: ${player.price?.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Delete / Remove Button */}
      <button
        onClick={(e) => handleDeleteSelectedPlayer(player, e)}
        className="btn btn-ghost text-red-500 hover:bg-red-100 rounded-full p-3"
        title="Remove player"
      >
        <FaTrashAlt className="text-lg" />
      </button>
    </div>
  );
};

export default SelectedCard;