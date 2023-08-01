function Nav(props) {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-title-wrapper">
          <p>Admin Panel</p>
        </div>
        <div className="logout-wrapper">
          <button
            id="homeBtn"
            onClick={() => {
              props.setDisplay("home");
            }}
          >
            Home
          </button>
          <button id="logoutBtn" onClick={props.handleLogout}>
            Logout
          </button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
