import React from 'react';
import { FaFlag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


const Player = ({ player }) => {

    return (
        <>
            <div>
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img className='h-56 w-full object-cover'
                            src={player.image}
                            alt={player.name} />
                    </figure>
                    <div className="card-body p-3">
                        <h2 className="card-title"> <FaUser />{player.name}</h2>
                        <div className='flex items-center justify-between border-b border-gray-300 pb-3'>
                            <p className='flex items-center gap-3'><FaFlag className='text-gray-400' />{player.country}</p>
                            <button className='text-center border border-gray-300 rounded px-3 py-2'>{player.role}</button>
                        </div>
                        <div className='space-y-3'>
                            <h3>Rrating</h3>
                            <div className='flex justify-between'>
                                <div>{player.battingType}</div>
                                <div>{player.bowlingType}</div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div>${player.biddingPrice}</div>
                                <div><button className='btn'>Choose Player</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Player;