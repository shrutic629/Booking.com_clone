import React, { useContext, useState } from "react";
import "./Login.css";
import { AuthContext } from "../../context/AuthContext.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const navigate = useNavigate();

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    // console.log(">>inside handleclick function>>>>>>");
    dispatch({ type: "LOGIN_START" });
    try {
      // console.log(">>>>>inside try>>>>");
      const res = await axios.post(
        "http://localhost:8800/auth/login",
        credentials
      );
      // console.log(">>>>>after post>>>>", res);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      // console.log(">>>>>inside catch>>>>", err);
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lcontainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="linput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="linput"
        />
        <button disabled={loading} onClick={handleClick} className="lbutton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
