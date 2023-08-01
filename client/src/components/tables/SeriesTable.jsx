import { useEffect, useState } from "react";
import API from "../../utils/API";
import "./tables.css";

function SeriesTable(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(API.getSeries);
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
          {data.map((series) => {
            return (
              <tr key={series.title}>
                <td>{series.title}</td>
                <td className="table-btns">
                  <button
                    id={`${series.title}Edit`}
                    data-id={series.id}
                    onClick={() => {
                      console.log("edit");
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    id={`${series.title}Delete`}
                    data-id={series.id}
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

export default SeriesTable;
