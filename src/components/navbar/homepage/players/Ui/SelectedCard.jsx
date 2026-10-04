import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelectedCard = ({player, handleDeleteSelectedPlayer}) => {
    return (
        <div className='flex items-center gap-5 justify-between p-10 rounded-2xl border'>
          <div>
               <img src={player.playerImg} alt={player.playerName} className='h-[75px] w-auto rounded-md'/>
                   <div>
                    <h2 className='flex items-center gap-2 font-semibold text-xl'><FaRegUser></FaRegUser>{player.playerName}</h2>
                     <p>{player.playerType}</p>
                      </div>
                         </div>
                   <button className='btn text-red-400 ' onClick={()=>handleDeleteSelectedPlayer(player)}>
                      <MdDelete></MdDelete>
                        </button>
                  </div>
    );
};

export default SelectedCard;