import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Register = function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const history = useHistory();
  const onChangeEmail = function (event) {
    setEmail(event.target.value);
  };
  const onChangePassword = function (event) {
    setPassword(event.target.value);
  };
  const onClickRegister = function () {
    console.log("Button clicked");
    axios
      .post("https://reqres.in/api/regiter", {
        email: email,
        password: password
      })
      .then(function (response) {
        console.log("Response : ", response);
        setShowError(false);
        history.push("/");
      })
      .catch(function (error) {
        console.log("Error : ", error);
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
                Either email/password is invalid.
              </div>
            </div>
          )}
        </div>

        <div className="mb-3">
          <h2 className="text-center">REGISTER PAGE</h2>
        </div>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" />
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
          <label>Creat Password</label>
          <input
            type="password"
            className="form-control"
            onChange={onChangePassword}
          />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input type="password" className="form-control" />
        </div>
        <button
          className="btn btn-outline-success form-control"
          onClick={onClickRegister}
        >
          Register
        </button>
        <div className="col-3"></div>
      </div>
    </div>
  );
};
export default Register;
