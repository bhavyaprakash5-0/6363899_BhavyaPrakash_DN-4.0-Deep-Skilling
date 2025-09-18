import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 95 },
    { name: 'Rohit Sharma', score: 88 },
    { name: 'Shubman Gill', score: 66 },
    { name: 'KL Rahul', score: 71 },
    { name: 'Hardik Pandya', score: 42 },
    { name: 'Ravindra Jadeja', score: 55 },
    { name: 'R Ashwin', score: 77 },
    { name: 'Bumrah', score: 83 },
    { name: 'Shami', score: 69 },
    { name: 'Ishan Kishan', score: 32 },
    { name: 'Surya Kumar Yadav', score: 90 }
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} — Score: {player.score}
          </li>
        ))}
      </ul>

      <h2>Players with Score &lt; 70:</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>
            {player.name} — Score: {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
