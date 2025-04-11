import React, { Suspense } from 'react';
import Players from '../Players/Players';

const loadPlayers = fetch('players.json')
    .then(response => response.json())

const Main = () => {
    const playersPromise = loadPlayers;
    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <Players playersPromise={playersPromise}></Players>
            </Suspense>
        </div>
    );
};

export default Main;