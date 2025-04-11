import React, { use, useState } from 'react';
import Player from '../Player/Player';
import Newsletter from '../Newsletter/Newsletter';

const Players = ({ playersPromise, subCredit }) => {
    const players = use(playersPromise);

    const [active, setActive] = useState('allPlayers');

    const [selected, setSelected] = useState(0)

    const updateSelectedPlayers = () => {
        const newSelected = selected + 1;
        setSelected(newSelected)

    }

    return (
        <>
            <div className='container flex items-center justify-between mx-auto my-10'>
                <h2 className='text-2xl font-semibold'>Available Players</h2>

                <div className='border border-gray-300 flex  rounded-md'>
                    <button onClick={() => { setActive('allPlayers') }}
                        className={` ${active === 'allPlayers' ? 'bg-[#d8fc38]' : ''}  p-3 rounded-l-md cursor-pointer`}>Available
                    </button>
                    <button onClick={() => { setActive('selectedPlayers') }}
                        className={`p-3 ${active === 'selectedPlayers' ? 'bg-[#d8fc38]' : ''} rounded-r-md cursor-pointer`}>
                        Selected <span>({selected})</span>
                    </button>
                </div>
            </div>

            {active === 'allPlayers' && (
                <div className='container grid grid-cols-4 gap-4 mx-auto mb-20'>
                    {
                        players.map((player) =>
                            <Player key={player.playerId}
                                player={player}
                                subCredit={subCredit}
                                updateSelectedPlayers={updateSelectedPlayers}
                            ></Player>
                        )
                    }
                </div>
            )}



            {active === 'selectedPlayers' && (
                <div>
                    <p>Selected Players</p>
                </div>
            )}

            <Newsletter> </Newsletter>

        </>
    );
};

export default Players;