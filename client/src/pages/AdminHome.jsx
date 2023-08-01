import { useState } from "react";
import "./AdminHome.css";

import Nav from "../components/Nav";
import Card from "../components/Card";
import SeriesTable from "../components/tables/SeriesTable";
import ManufacturerTable from "../components/tables/ManufacturerTable";
import TeamsTable from "../components/tables/TeamsTable";
import DriversTable from "../components/tables/DriversTable";

// home page for the app
// will show nav bar
// will contain tables to display database data
// user can search through the tables with a search bar
// after searching, if displayed info is clicked on, the admin can edit the database data

function AdminHome(props) {
  const [tableInfo, setTableInfo] = useState([]);
  // handles which form will be displayed when clicked
  const [display, setDisplay] = useState("home");
  const [displayData, setDisplayData] = useState([]);

  console.log(display);
  const cards = ["Series", "Manufacturers", "Teams", "Drivers"];

  const handleLogout = () => {
    props.setIsAuth(false);
  };

  const handleEdit = (data) => {
    console.log("editing" + data);
  };

  const handleDelete = (data) => {
    console.log("deleting" + data);
  };

  const renderTable = (display) => {
    console.log(display);
    if (display === "series") {
      return <SeriesTable />;
    }

    if (display === "manufacturers") {
      return <ManufacturerTable />;
    }

    if (display === "teams") {
      return <TeamsTable />;
    }

    if (display === "drivers") {
      return <DriversTable />;
    }
  };

  return (
    <>
      <Nav handleLogout={handleLogout} setDisplay={setDisplay} />
      <main>
        <div className="header-wrapper">
          <h1>Motorsport Database Manager</h1>
          <p>Select a card to view</p>
        </div>
        {/* display the default cards if on the home page */}
        {display === "home" ? (
          <div className="card-container">
            {cards.map((card) => {
              return <Card key={card} title={card} setDisplay={setDisplay} />;
            })}
          </div>
        ) : (
          renderTable(display)
        )}
      </main>
    </>
  );
}

export default AdminHome;
