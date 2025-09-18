import React from 'react';

const IndianPlayers = () => {
  const players = ['Virat', 'Rohit', 'Gill', 'Rahul', 'Hardik', 'Jadeja'];

  const oddTeam = players.filter((_, index) => index % 2 === 0);
  const evenTeam = players.filter((_, index) => index % 2 !== 0);

  const T20players = ['Kohli', 'SKY', 'Pant'];
  const RanjiPlayers = ['Pujara', 'Rahane', 'Saha'];
  const mergedPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Indian Players (Destructured):</h2>
      <p><strong>Odd Team:</strong> {oddTeam.join(', ')}</p>
      <p><strong>Even Team:</strong> {evenTeam.join(', ')}</p>

      <h2>Merged Players (T20 + Ranji):</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
