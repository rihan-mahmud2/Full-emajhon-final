import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/UserContex";
import "./Register.css";
const Register = () => {
  const { createUser } = useContext(authContext);
  const [error, setError] = useState(null);
  const handleEmail = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);
    if (password.length < 6) {
      setError("Password should be at least 6 or more characters");
      return;
    }
    if (password !== confirm) {
      setError("Your confirm passowrd should be same as your main password");
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
      })
      .catch((err) => console.error(err));
  };
  return (
    <form onSubmit={handleEmail} className="form-container">
      <div className="form-title">Register</div>
      <div className="form-controler">
        <label labelfor="email">Email</label>
        <input type="email" name="email" required></input>
      </div>
      <div className="form-controler">
        <label labelfor="password">Password</label>
        <input type="password" name="password" required></input>
      </div>
      <div className="form-controler">
        <label labelfor="confirm">confirm</label>
        <input type="password" name="confirm"></input>
      </div>
      <div className="form-controler">
        <input className="btn-submit" type="submit" value="Register"></input>
      </div>
      <p>
        Already have an account? <Link to={"/login"}>Login</Link>
      </p>

      <p className="error-text">{error}</p>
    </form>
  );
};

export default Register;
