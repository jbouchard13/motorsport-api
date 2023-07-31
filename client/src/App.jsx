import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import AdminHome from "./pages/AdminHome";

function App() {
  const [count, setCount] = useState(0);

  const [isAuth, setIsAuth] = useState(false);

  console.log(isAuth);

  return (
    // if user is not authenticated, display login
    // else, redirect to admin home page
    <>{isAuth ? <AdminHome /> : <Login setIsAuth={setIsAuth} />}</>
  );
}

export default App;
