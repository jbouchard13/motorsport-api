import { useState } from "react";
import db from "../assets/data";
import Nav from "../components/Nav";
import "./AdminHome.css";

// home page for the app
// will show nav bar
// will contain tables to display database data
// user can search through the tables with a search bar
// after searching, if displayed info is clicked on, the admin can edit the database data

function AdminHome(props) {
  const [tableInfo, setTableInfo] = useState([]);

  // handles if the user wants to go back to the default admin page
  const [home, setHome] = useState(true);

  const handleLogout = () => {
    props.setIsAuth(false);
  };
  return (
    <>
      <Nav handleLogout={handleLogout} />
      <main>
        <div className="header-wrapper">
          <h1>Motorsport Database Manager</h1>
          <p>Select a card to view</p>
        </div>
        <div className="card-container">
          <div id="seriesCard" className="card-wrapper">
            <p>Series</p>
          </div>

          <div id="manufacturersCard" className="card-wrapper">
            <p>Manufacturers</p>
          </div>

          <div id="teamsCard" className="card-wrapper">
            <p>Teams</p>
          </div>

          <div id="driversCard" className="card-wrapper">
            <p>Drivers</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default AdminHome;
