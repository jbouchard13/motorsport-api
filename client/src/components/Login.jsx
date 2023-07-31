import { useState } from "react";
import validator from "validator";

function Login(props) {
  const [userData, setUserData] = useState({
    email: "",
    role: "",
  });
  const [emailInput, setEmailInput] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      email: emailInput,
    });
    props.setIsAuth(true);
  };

  return (
    <div className="login-container">
      <form id="loginForm">
        <label id="emailInputLabel" htmlFor="email">
          Please enter the login email
        </label>
        <input
          id="emailInput"
          type="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => {
            setEmailInput(e.target.value);
          }}
        />
        <button
          id="loginBtn"
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
