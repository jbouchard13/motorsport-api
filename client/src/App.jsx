import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import AdminHome from "./pages/AdminHome";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  console.log(isAuth);

  return (
    // if user is not authenticated, display login
    // else, redirect to admin home page
    <>
      {isAuth ? (
        <AdminHome setIsAuth={setIsAuth} />
      ) : (
        <Login setIsAuth={setIsAuth} />
      )}
    </>
  );
}

export default App;
