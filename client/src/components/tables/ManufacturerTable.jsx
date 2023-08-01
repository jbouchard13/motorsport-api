import { useEffect, useState } from "react";
import API from "../../utils/API";
import "./tables.css";

function ManufacturerTable(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(API.getManufacturers);
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr className="table-header">
            <th id="name">Name</th>
            <th className="table-btns">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((manufacturer) => {
            return (
              <tr key={manufacturer.name}>
                <td>{manufacturer.name}</td>
                <td className="table-btns">
                  <button
                    id={`${manufacturer.name}Edit`}
                    data-id={manufacturer.id}
                    onClick={() => {
                      console.log("edit");
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    id={`${manufacturer.name}Delete`}
                    data-id={manufacturer.id}
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
    </>
  );
}

export default ManufacturerTable;
