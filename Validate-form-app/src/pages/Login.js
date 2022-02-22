import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const history = useHistory();

  const onChangeEmail = function (event) {
    //console.log(event.target.value);
    setEmail(event.target.value); // email = event.target.value
  };

  const onChangePassword = function (event) {
    setPassword(event.target.value);
  };

  const onClickLogin = function () {
    console.log("Button Clicked");

    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password
      })
      .then(function (response) {
        console.log("Response : ", response);

        setShowError(false);
        history.push("/");
        // redirect user to dashboard
      })
      .catch(function (error) {
        console.log("Error : ", error);

        // show error message
        setShowError(true);
      });
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-3"></div>
        <div className="col-6">
          {showError && (
            <div className="mb-3">
              <div className="alert alert-danger">
                Either email/password is incorrect.
              </div>
            </div>
          )}

          <div className="mb-3">
            <h2 className="text-center">LOGIN PAGE</h2>
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              onChange={onChangeEmail}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              onChange={onChangePassword}
            />
          </div>

          <button
            className="btn btn-outline-success form-control"
            onClick={onClickLogin}
          >
            Login
          </button>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default Login;
