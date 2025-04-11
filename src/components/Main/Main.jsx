import React, { Suspense } from 'react';
import Players from '../Players/Players';

const loadPlayers = fetch('players.json')
    .then(response => response.json())

const Main = ({subCredit}) => {
    const playersPromise = loadPlayers;
    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <Players subCredit={subCredit} playersPromise={playersPromise}></Players>
            </Suspense>
        </div>
    );
};

export default Main;