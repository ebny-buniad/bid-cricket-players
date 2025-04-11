import React, { use } from 'react';
import Player from '../Player/Player';

const Players = ({ playersPromise }) => {
    const players = use(playersPromise);
    // console.log(players)
    return (
        <>
            <div className='container flex items-center justify-between mx-auto my-10'>
                <h2 className='text-2xl font-semibold'>Available Players</h2>

                <div className='border border-gray-300 flex  rounded-md'>
                    <button className='bg-[#d8fc38] p-3 rounded-l-md cursor-pointer'>Available</button>
                    <button className='p-3 rounded-r-md cursor-pointer'>Selected <span>(0)</span></button>
                </div>
            </div>

            <div className='container grid grid-cols-4 gap-4 mx-auto'>
                {
                    players.map((player) =>
                        <Player player={player}></Player>
                    )
                }
            </div>

        </>
    );
};

export default Players;