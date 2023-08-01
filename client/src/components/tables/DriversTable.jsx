import { useEffect, useState } from "react";
import API from "../../utils/API";

function DriversTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(API.getAllDrivers);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Car #</th>
          <th>Manufacturer</th>
          <th>Wins</th>
          <th>Team</th>
          <th>Series</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((driver) => {
          return (
            <tr key={driver.id}>
              <th>{driver.name}</th>
              <th>{driver.age}</th>
              <th>{driver.carNumber}</th>
              <th>{driver.manufacturer}</th>
              <th>{driver.wins}</th>
              <th>{driver.team}</th>
              <th>{driver.series}</th>
              <th>
                <button>Edit</button>
                <button>X</button>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DriversTable;
