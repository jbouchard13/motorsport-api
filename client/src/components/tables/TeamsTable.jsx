import { useEffect, useState } from "react";
import API from "../../utils/API";

function TeamsTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(API.getTeams);
  }, []);

  return (
    <table>
      <thead>
        <tr className="table-header">
          <th id="name">Name</th>
          <th id="teamManufacturer">Manufacturer</th>
          <th className="table-btns">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((team) => {
          return (
            <tr key={team.name}>
              <td>{team.name}</td>
              <td>{team.manufacturer}</td>
              <td className="table-btns">
                <button
                  id={`${team.name}Edit`}
                  data-id={team.id}
                  onClick={() => {
                    console.log("edit");
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  id={`${team.name}Delete`}
                  data-id={team.id}
                  onClick={() => {
                    console.log("delete");
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TeamsTable;
