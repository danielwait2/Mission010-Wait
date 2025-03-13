import { useEffect, useState } from 'react';
import { bowler } from './types/bowler.ts';

function BowlerList() {
  const [bowlers, setBowler] = useState<bowler[]>([]);

  // prevents tons of unncessesary fetches
  useEffect(() => {
    const fetchBowlers = async () => {
      const response = await fetch('https://localhost:5000/api/Bowler');
      const data = await response.json();
      setBowler(data);
    };
    fetchBowlers();
  }, []);

  return (
    <>
      <h2>Bowlers</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Init</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zipcode</th>
            <th>Phone Number</th>
            <th>Team Name</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((b) => (
            <tr key={b.bowlerId}>
              <td>{b.bowlerFirstName}</td>
              <td>{b.bowlerMiddleInit}</td>
              <td>{b.bowlerLastName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
              <td>{b.team.teamName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
