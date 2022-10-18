import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/UserContex";

const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { signIn } = useContext(authContext);
  const navigate = useNavigate();
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .then((err) => console.error(err));
  };
  return (
    <form onSubmit={handleSignIn} className="form-container">
      <div className="form-title">Login</div>
      <div className="form-controler">
        <label labelfor="email">Email</label>
        <input type="email" name="email"></input>
      </div>
      <div className="form-controler">
        <label labelfor="password">Password</label>
        <input type="password" name="password" required></input>
      </div>

      <div className="form-controler">
        <input
          className="btn-submit"
          type="submit"
          value="Login"
          required
        ></input>
      </div>
      <p>
        New To emajhon? <Link to={"/register"}>Create a new Account</Link>
      </p>
    </form>
  );
};

export default Login;
